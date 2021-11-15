export default function getDate(localDateTime) {
    var string = localDateTime.split('T');
    string = string[0].split("-")
    string = string[2] + "/" + string[1] + "/" + string[0]
    return string
}
