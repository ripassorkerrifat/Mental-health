export const remainingTimeUntilEnable = (submittedTime) => {
    if (submittedTime) {
        const currentTime = new Date();
        const submittedDateTime = new Date(submittedTime);
        const twentyFourHoursLater = new Date(
            submittedDateTime.getTime() + 24 * 60 * 60 * 1000
        ); // Add 24 hours to the submitted time
        const remainingTime = twentyFourHoursLater - currentTime;

        // Calculate hours, minutes, and seconds from remaining milliseconds
        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }
    return {
        hours: 0,
        minutes: 0,
        seconds: 0,
    }; // Return 0 if submitted time is not provided
};
