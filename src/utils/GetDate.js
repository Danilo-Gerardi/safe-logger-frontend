export default function getDate(localDateTime) {
    var string = localDateTime.split('T');
    string = string[0].replaceAll("-", "/")
    return string
}
