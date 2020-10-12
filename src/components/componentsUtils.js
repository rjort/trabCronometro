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
    return DateTime.local().setZone(timeZone).toFormat('HH') - DateTime.local().toFormat('HH');
}