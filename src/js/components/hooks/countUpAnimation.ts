import React, {useState, useEffect, useRef} from "react";

// TODO: make is ease more (slow down at the end)
/**
 * Handles count up animation
 */
export default function useCountUpAnimation(animation = false, value = 0, deci = 2) {
    const [count, setCount] = useState(0.0);
    const countRef = useRef(count);
    let timeout;

    /**
     * Set timeout for counter anima;tion.
     */
    const setTimeoutCounter = () => {
        // Magic number
        let addon = value / 31.25;

        // check if addon is lower the rest value of value - current count
        if (value - countRef.current < addon) {
            // if not replace addon with the rest value
            addon = value - countRef.current;
        }

        // Add addon value to current count.
        const newCount = (countRef.current += addon);
        // Calculate value for rounding on (multiple) digits
        const round = Math.pow(10, deci);
        // Round number to solid number or a number with (mulitple) digits
        const digits = Number.isInteger(value) ? Math.trunc(newCount) : Math.floor(newCount * round) / round;

        setCount(digits);

        if (countRef.current < value) {
            timeout = setTimeout(setTimeoutCounter, 1);
        }
    };

    /**
     * Start count up animation
     */
    const startAnimation = () => {
        timeout = setTimeout(setTimeoutCounter, 1);
    };

    useEffect(() => {
        if (value > 0 && animation) {
            setCount(0);
            startAnimation();
        } else {
            setCount(value);
        }
    }, [value]);

    return {
        count,
    };
}
