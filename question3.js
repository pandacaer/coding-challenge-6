/* Write a function that converts HEX to RGB. 
Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

const hexToRGB = hex => {
    let r, g, b;
    if (hex.length === 7){
        r = parseInt(hex.slice(1,3), 16);
        g = parseInt(hex.slice(3,5), 16);
        b = parseInt(hex.slice(5,7), 16);
    } else if (hex.length === 4){
        r = parseInt(hex.charAt(1).repeat(2), 16);
        g = parseInt(hex.charAt(2).repeat(2), 16);
        b = parseInt(hex.charAt(3).repeat(2), 16);
    }
      
    return `(${r},${g},${b})`;
}

const rgbToHex = rgb => {
    const hex = rgb.replace(/["'\(\)]/g, "")
             .split(',')
             .map(val => getSingleHex(val))
             .join('');
    return `#${hex}`;
     
}

const getSingleHex = rgb => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2){
        hex = '0' + hex;
    }
    return hex;
}

// rgb is passing hex first
const convert = input => {
    console.log(input);
    const rgb = /\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/g;
    const hex = /[0-9a-f]+/i;
    
    if (hex.test(input)){
        return hexToRGB(input);
    } else if (rgb.test(input)){
        return rgbToHex(input);
}


console.log(rgbToHex('(10,20,30)'));
console.log(hexToRGB('#0a141e'));
console.log(hexToRGB('#f00'));

console.log(convert('(10,20,30)'));
console.log(convert('#0a141e'));
console.log(convert('#f00'));