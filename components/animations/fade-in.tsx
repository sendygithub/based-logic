"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...directions[direction] }
            }
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
        >
            {children}
        </motion.div>
    );
}
