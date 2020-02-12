const formats = {
    trillion: 1000000000000,
    billion: 1000000000,
    million: 1000000,
    thousand: 1000,
}

export const formatNumber = (num: number, deci: number = 2) => {
    const {trillion, billion, million, thousand} = formats;

    let value = num;
    let suffix = "";

    if (num >= trillion) {
        value = num / trillion;
        suffix = "T";
    }else if (num >= billion){
        value = num / billion;
        suffix = "B";
    } else if (num >= million) {
        value = num / million;
        suffix = "M";
    } else if (num > thousand) {
        value = num / thousand;
        suffix = "K";
    }else {
        deci = 0;
    }

    return Number(Number(value).toFixed(deci)) + suffix;
}