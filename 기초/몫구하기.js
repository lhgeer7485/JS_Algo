function solution(num1, num2) {
    // ~ 표시는 -(n-1)이 된다
    // ~5 >> -6
    // ~(-6) >> 5
    // 즉 ~~ 두번하면 실수가 정수가 되는 마법
    var answer = ~~(num1 / num2);
    return answer;
}