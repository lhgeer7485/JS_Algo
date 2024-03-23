function solution(array, height) {
    var answer = array.filter(p => p > height).length;
    return answer;
}