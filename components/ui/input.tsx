/* eslint-disable @typescript-eslint/no-explicit-any */

// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

// testing here
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => {
      const radius = 100; // change this to increase the radius of the hover effect
      const [visible, setVisible] = React.useState(false);
    
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);
    
      function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }
  
      return (
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="p-[2px] rounded-lg transition duration-300 group/input"
        >
          <textarea
            ref={ref}
            className={cn(
              `flex h-52 w-full border-none bg-zinc-800 text-white 
               rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 
               dark:placeholder:text-neutral-600 focus-visible:outline-none 
               focus-visible:ring-[2px] focus-visible:ring-neutral-600 
               disabled:cursor-not-allowed disabled:opacity-50
               shadow-[0px_0px_1px_1px_var(--neutral-700)]
               group-hover/input:shadow-none transition duration-400`,
              className
            )}
            {...props}
          />
        </motion.div>
      );
    }
  );
  
  Textarea.displayName = "Textarea";

export { Input, Textarea };
