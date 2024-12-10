// your-button.jsx
import React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";

export default function Button({ variant,
    size,
    label, title, asChild, children, className }) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp>
            <Slottable>{children}</Slottable>
        </Comp>
    );
}

