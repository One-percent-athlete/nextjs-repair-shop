// your-button.jsx
import React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils;"

export default function Button({ variant,
    size,
    label, title, asChild, children, leftElement, rightElement, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp {...props}>
            {leftElement}
            <Slottable>{children}</Slottable>
            {rightElement}
        </Comp>
    );
}

