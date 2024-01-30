export const formattedDate = (time) => {
    const timestamp = new Date(time);

    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    };

    return timestamp.toLocaleString("en-US", options);
};
