export const checkDate = (date) => {
    const currentDate = new Date();
    const tenggatDate = new Date(date);

    return currentDate.getTime() >= tenggatDate.getTime();
};
