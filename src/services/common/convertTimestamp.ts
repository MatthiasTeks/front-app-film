/**
 * Returns a date string in the format "DD/MM/YYYY" from a given timestamp.
 * @param {number} timestamp - The timestamp to convert.
 * @returns {string} A date string in the format "DD/MM/YYYY".
 */
export const convertTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
