import {DateTime} from 'luxon';

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

export function incrementMillisecondsFromTime(time, milliseconds = 10) {
    return DateTime.fromISO(time).plus({milliseconds: milliseconds}).toFormat('HH:mm:ss.SSS').substr(0, 11);
}

export function getDiffByTwoTimes(time1, time2) {
    function addDigitIfIsLessThanThen(value) {
        return value < 10 ? `0${value}` : value;
    }

    const diff = DateTime.fromISO(time1).diff(DateTime.fromISO(time2), ['hours', 'minutes', 'seconds', 'milliseconds']).toObject();
    
    if (diff.hours === undefined) {
        return time1;
    }

    return `${addDigitIfIsLessThanThen(diff.hours)}:${addDigitIfIsLessThanThen(diff.minutes)}:${addDigitIfIsLessThanThen(diff.seconds)}.${addDigitIfIsLessThanThen(diff.milliseconds)}`;
}