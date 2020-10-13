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