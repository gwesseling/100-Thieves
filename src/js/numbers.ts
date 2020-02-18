const formats = {
    trillion: 1000000000000,
    billion: 1000000000,
    million: 1000000,
    thousand: 1000,
};

/**
 * Make number readable
 */
export const formatNumber = (num: number, deci: number) => {
    const {trillion, billion, million, thousand} = formats;

    let value = num;
    let suffix = "";
    const round = Math.pow(10, deci);

    if (num >= trillion) {
        value = num / trillion;
        suffix = "T";
    } else if (num >= billion) {
        value = num / billion;
        suffix = "B";
    } else if (num >= million) {
        value = num / million;
        suffix = "M";
    } else if (num > thousand) {
        value = num / thousand;
        suffix = "K";
    } else {
        deci = 0;
    }

    return {
        number: Number(Math.floor(value * round) / round),
        suffix,
    };
};
