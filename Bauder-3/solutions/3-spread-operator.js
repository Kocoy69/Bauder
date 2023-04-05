// BEGIN
const convert = (...dates) => {
    if (!dates.length) {
        return [];
    }

    const english_dates = dates.map(date => {
        const english_date = new Date(date);
        return english_date.toDateString();
    });

    return english_dates;
};

export default convert;
// END