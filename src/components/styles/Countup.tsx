import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface CountUpProps {
  to: number | string;
  from?: number | string;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  // Convert numeric strings to numbers
  const parseNumber = (val: number | string) =>
    typeof val === "string" && !isNaN(Number(val)) ? Number(val) : val;

  const fromNum = parseNumber(from);
  const toNum = parseNumber(to);

  // Motion only works if both are numbers
  const motionValue = useMotionValue(
    direction === "down" && typeof toNum === "number"
      ? toNum
      : typeof fromNum === "number"
      ? fromNum
      : 0
  );

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals =
    typeof fromNum === "number" && typeof toNum === "number"
      ? Math.max(getDecimalPlaces(fromNum), getDecimalPlaces(toNum))
      : 0;

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = String(direction === "down" ? to : from);
    }
  }, [from, to, direction]);

  useEffect(() => {
    if (
      isInView &&
      startWhen &&
      typeof fromNum === "number" &&
      typeof toNum === "number"
    ) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? fromNum : toNum);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") onEnd();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    fromNum,
    toNum,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    if (typeof fromNum !== "number" || typeof toNum !== "number") return;

    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        const hasDecimals = maxDecimals > 0;
        const options: Intl.NumberFormatOptions = {
          useGrouping: !!separator,
          minimumFractionDigits: hasDecimals ? maxDecimals : 0,
          maximumFractionDigits: hasDecimals ? maxDecimals : 0,
        };

        const formattedNumber = Intl.NumberFormat("en-US", options).format(
          latest
        );

        ref.current.textContent = separator
          ? formattedNumber.replace(/,/g, separator)
          : formattedNumber;
      }
    });

    return () => unsubscribe();
  }, [springValue, separator, maxDecimals, fromNum, toNum]);

  return <span className={className} ref={ref} />;
}
