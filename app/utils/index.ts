export const formatDate = (value: string) => {
    if (!value) return null;
    const [day, month, year] = value.split('/').map(v => Number(v));
    return new Date(year, month - 1, day);
};

export const getExactYears = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return null;
    const start: any = new Date(startDate);
    const end: any = new Date(endDate);

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const year = (end - start) / millisecondsPerYear;
    if (year < 1) return `${Math.round(Number(year) * 10)} months`;
    return `${year.toFixed(2)} years`;
};