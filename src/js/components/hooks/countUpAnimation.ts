import React, {useState, useEffect, useRef} from "react";

// TODO: make is ease more (slow down at the end)
/**
 * Handles count up animation
 */
export default function useCountUpAnimation(val = 0, deci) {
    const [count, setCount] = useState(0.0);
    const countRef = useRef(count);
    let timeout;

    /**
     * Set timeout for counter anima;tion.
     */
    const setTimeoutCounter = () => {
        // TODO: rename variables
        let addon = val / 31.25;

        // check if addon is lower the rest value of val - current count
        if (val - countRef.current < addon) {
            // if not replace addon with the rest value
            addon = val - countRef.current;
        }

        // Add addon value to current count.
        const newCount = (countRef.current += addon);
        // Calculate value for rounding on (multiple) digits
        const round = Math.pow(10, deci);
        // Round number to solid number or a number with (mulitple) digits
        const c = Number.isInteger(val) ? Math.trunc(newCount) : Math.floor(newCount * round) / round;

        setCount(c);

        if (countRef.current < val) {
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
        if (val > 0) {
            startAnimation();
        }
    }, [val]);

    return {
        count,
    };
}
