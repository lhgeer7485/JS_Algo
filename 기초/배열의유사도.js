function solution(s1, s2) {
    var answer = 0;

    // answer = s1.filter(v => s2.includes(v)).length;

    answer = s1.length + s2.length - set([...s1, ...s2]).size;

    return answer;
}