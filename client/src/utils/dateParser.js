const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const parseDate = (date) => {
    let output = new Date(date);

    const day = addLeadingZero(output.getDate());
    const month = months[output.getMonth()];
    const year = output.getFullYear();

    const dateFormatted = `${day} ${month} ${year}`;

    const hours = addLeadingZero(output.getHours());
    const minutes = addLeadingZero(output.getMinutes());
    const seconds = addLeadingZero(output.getSeconds());
    const milSeconds = addLeadZeros(output.getMilliseconds());
    const timeFormatted = `${hours}:${minutes}`;

    output = `${dateFormatted} ${timeFormatted}`;

    return output;
};

const addLeadingZero = (input) => {
    return input < 10 ? "0" + input : input;
};

const addLeadZeros = (input) => {
    if (input < 10) return "00" + input;
    else if (input < 100) return "0" + input;
    else return input;
};

export default parseDate;
