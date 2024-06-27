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

    const day = output.getDate();
    const month = months[output.getMonth()];
    const year = output.getFullYear();

    const dateFormatted = `${day} ${month} ${year}`;

    const hours = output.getHours();
    const minutes = output.getMinutes();

    const timeFormatted = `${hours}:${minutes}`;

    output = `${dateFormatted} ${timeFormatted}`;

    return output;
};

export default parseDate;
