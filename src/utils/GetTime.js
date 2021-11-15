export default function getTime(localDateTime) {
    var string = localDateTime.split('T');
    string = string[1].split(":");
    string = string[0] + ":" + string[1]
    return string
}
