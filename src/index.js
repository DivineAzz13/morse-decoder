const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      let decodingArr = [];
			for (let i = 0; i < expr.length; i += 10) {
				let temp = expr.slice(i, i + 10);
				temp = temp.replace(/11/g, "-");
				temp = temp.replace(/10/g, ".");
				temp = temp.replace(/0/g, "");
				decodingArr.push(MORSE_TABLE[temp]);
			}
			for (let j = 0; j < decodingArr.length; j++) {
				if (decodingArr[j] === undefined) {
					decodingArr[j] = " ";
				}
			}
			return decodingArr.join("");
}

module.exports = {
    decode
}