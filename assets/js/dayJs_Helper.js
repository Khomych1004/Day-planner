// Returns the current date in the required format
function getDateForPage() {

    const currentDate = dayjs();
    const dayOfWeek = currentDate.format('dddd');
    const currentMonth = currentDate.format('MMMM');
    const currentDay = currentDate.format('D');

    return dayOfWeek + ", " + currentMonth + " " + currentDay + addSuffix(currentDay);
}

// Adding an ending to a date
function addSuffix(day) {

    let dayStr = day.toString();

    const lastDigit = Number(dayStr.charAt(dayStr.length - 1));

    if (day > 10 && day < 14) {
        return 'th'
    }
    else {
        switch (lastDigit) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    }
}

// Return current hour
function currentHour() {
    return dayjs().hour();
}