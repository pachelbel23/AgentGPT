import { motion } from "framer-motion";
import React from "react";
import type { PropsWithChildren } from "react";

interface MotionProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

/**
 * Expected impact: Reduces re-renders of elements inside FadeIn when parent re-renders.
 */
const FadeIn = React.memo((props: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, type: "spring", delay: props.delay ?? 0.3 }}
    {...props}
  >
    {props.children}
  </motion.div>
));

FadeIn.displayName = "FadeIn";
export default FadeIn;
