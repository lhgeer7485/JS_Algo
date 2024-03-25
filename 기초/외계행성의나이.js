function solution(age) {
    let chr = 'abcdefghij';

    age = Array.from(age.toString())

    return age.map(n => chr[parseInt(n)]).join('');
}