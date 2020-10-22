import {DateTime, Duration} from 'luxon';

function addDigitIfIsLessThanTen(value) {
    return value < 10 ? `0${value}` : value;
}

export function dateTimeNow() {
    let dateTime = DateTime.local();

    return {
        'date': dateTime.toLocaleString(),
        'time': dateTime.toFormat('HH:mm:ss')
    };
}

export function dateTimeNowByTimeZone(timeZone) {
    let dateTime = DateTime.local().setZone(timeZone);

    return {
        'date': dateTime.toLocaleString(),
        'time': dateTime.toFormat('HH:mm')
    };
}

export function differenceLocalByTimeZone(timeZone) {
    let now = DateTime.local();
    let dateLocal = DateTime.fromObject(now.toObject());
    let otherDate = DateTime.fromObject(now.setZone(timeZone).toObject());
    return otherDate.diff(dateLocal, 'hours').toObject().hours;
}

export function decrementSecondsFromTime(time, seconds = 1) {
    const timeArray = time.match(/(\d+)/g);
    const newTime = Duration.fromObject({hours: timeArray[0], minutes: timeArray[1], seconds: timeArray[2]}).minus({seconds: seconds}).toObject();
    return `${addDigitIfIsLessThanTen(newTime.hours)}:${addDigitIfIsLessThanTen(newTime.minutes)}:${addDigitIfIsLessThanTen(newTime.seconds)}`;
}

export function incrementMillisecondsFromTime(time, milliseconds = 10) {
    return DateTime.fromISO(time).plus({milliseconds: milliseconds}).toFormat('HH:mm:ss.SSS').substr(0, 11);
}

export function getDiffByTwoTimes(time1, time2) {
    const diff = DateTime.fromISO(time1).diff(DateTime.fromISO(time2), ['hours', 'minutes', 'seconds', 'milliseconds']).toObject();
    
    if (diff.hours === undefined) {
        return time1;
    }

    return `${addDigitIfIsLessThanTen(diff.hours)}:${addDigitIfIsLessThanTen(diff.minutes)}:${addDigitIfIsLessThanTen(diff.seconds)}.${addDigitIfIsLessThanTen(diff.milliseconds)}`;
}