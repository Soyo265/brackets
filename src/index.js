module.exports = function check(str, bracketsConfig) {
    let currentBrackets = [];

    let brackets = [];
    for (let currentSet of bracketsConfig) brackets.push(...currentSet);

    for (let i = 0; i < str.length; i++) {
        const lastOpenedBracket = currentBrackets[currentBrackets.length - 1];

        let isOpenBracket = brackets.indexOf(str[i]) % 2 !== 1;
        if (brackets.filter((val, idx) => idx % 2 === 1).includes(str[i]) && lastOpenedBracket === str[i])
            isOpenBracket = false;

        if(isOpenBracket) {
            if (i === str.length - 1) return false;
            currentBrackets.push(str[i]);
            continue;
        }

        let isCorrectBracket = false;
        for (let j = 1; j < brackets.length; j += 2) {
            if (str[i] === brackets[j]) {
                if (lastOpenedBracket === brackets[j - 1]) {
                    currentBrackets.pop();
                    isCorrectBracket = true;
                    break;
                }
            }
        }
        if (!isCorrectBracket) return false;
    }

    return true;
}
