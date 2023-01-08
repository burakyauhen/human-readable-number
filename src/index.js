module.exports = function toReadable (number) {
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const elevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let str = '';
    if (number > 99) {
        str = `${units[Math.trunc(number / 100) - 1]} hundred`;
        number = number % 100;
    }
    if (number > 19) {
        str = `${str} ${dozens[Math.trunc(number / 10) - 2]}`;
        number = number % 10;
    }
    if (number >= 11 && number <= 19) {
        str = `${str} ${elevenToNineteen[number  -11]}`;
    }
    if (number >= 1 && number<= 10) {
        str = `${str} ${units[number -1]}`;
    }
    if (str[0] === ' ') {
        str = str.slice(1);
    }
    if (str === '') {
        str = 'zero';
    }
    return str;
}
