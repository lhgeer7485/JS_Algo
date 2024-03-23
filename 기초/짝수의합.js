function solution(n) {

    var answer = Array(n).fill().map((_, i) => i + 1).filter(num => num % 2 === 0).reduce((a, c) => a + c, 0);

    return answer;
}