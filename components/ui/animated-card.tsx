"use client";

import * as React from "react";
import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Assuming we use standard divs if Card doesn't exist, we will use a generic wrapper.
// Shadcn UI 'Card' components export divs with standard classes.

interface Props extends Omit<HTMLMotionProps<"div">, "children"> {
    children?: React.ReactNode;
}

export function AnimatedCard({
    children,
    className,
    ...props
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("relative overflow-hidden rounded-2xl glass-card", className)}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            <div className="relative z-10 p-6 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}
