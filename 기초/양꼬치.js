function solution(n, k) {
    k -= ~~(n / 10);
    var answer = n*12000 + k*2000;
    return answer;
}