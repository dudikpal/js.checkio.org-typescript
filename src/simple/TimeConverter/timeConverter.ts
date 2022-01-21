export function timeConverter(dayTime: string) {

    let twelveFormat = new Date('2000-01-01 ' + dayTime).toLocaleTimeString('en-GB', {hour12: true, hour: "numeric", minute: '2-digit'})
        .replace(/([apm])/g, '$1.')
        .replace(/(^0)/, '12');

    return twelveFormat;
}