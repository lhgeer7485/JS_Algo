function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');

    return my_string.replace(reg, '')
}

console.log(solution("abcdef1118112113","f"))