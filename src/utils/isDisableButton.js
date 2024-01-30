export const isDisableButton = (submittedTime) => {
    if (submittedTime) {
        const currentTime = new Date();
        const submittedDateTime = new Date(submittedTime);
        const twentyFourHoursLater = new Date(
            submittedDateTime.getTime() + 24 * 60 * 60 * 1000
        );
        return currentTime < twentyFourHoursLater;
    }
    return false;
};
