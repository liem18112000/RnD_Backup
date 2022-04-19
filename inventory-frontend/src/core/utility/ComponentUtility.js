/**
 * Function for delay (in millisecond)
 * If no param is provided ms is set to 1000 by default
 * @param ms                    Delay time in millisecond
 * @returns {Promise<unknown>}
 */
export const sleep = (ms = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check a variable is a JSON string
 * @param item
 * @returns {boolean}
 */
export const isJson = (item) => {
    item = typeof item !== "string" ? JSON.stringify(item) : item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    return typeof item === "object" && item !== null;
}

export const isNumber = (number) => {
    return number && !isNaN(number);
}

export const convertDateToEnCADate = (dateString) => {
    try {
        return new Date(dateString).toLocaleDateString('en-CA');
    } catch (e) {
        console.error("Parse date with local en-CA failed");
        return new Date().toLocaleDateString('en-CA');
    }
}

export const compose = (...functions) =>
        argument =>
            functions.reduce(
                (composed, func) => func(composed),
                argument
            )