const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function string(length) {
    let result = '';
    const lettersLength = letters.length;
    for(let i = 0; i < length; i++ ){
        result += letters.charAt(Math.floor(Math.random() * lettersLength));
    }
    return result;
}
console.log(string(10));