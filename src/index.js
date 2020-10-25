const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let chunkArray = expr.match(/.{1,10}/g);
    let result = '';

    for (let smallExpr of chunkArray) {

        if (smallExpr == '**********') {
            result = result.concat(' ');
        }

        if (smallExpr != '**********') {
            let smallChunkArray = smallExpr.match(/.{1,2}/g);
            let letter = '';
            for (let letterChunk of smallChunkArray) {
                switch (letterChunk) {
                    case ('00'):
                        letter = letter.concat('');
                        break;
                    case ('10'):
                        letter = letter.concat('.');
                        break;
                    case ('11'):
                        letter = letter.concat('-');
                        break;
                }
            }
            result = result.concat(MORSE_TABLE[letter]);
        }
    }
    return result;
}

module.exports = {
    decode
}