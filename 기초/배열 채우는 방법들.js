// 길이가 100인 배열을 생성
console.log(Array(100));

// 특정 문자를 반복 ex) 000000 ...
console.log('0'.repeat(100));

// split()은 문자열을 지정된 구분자로 구분하여 배열을 반환한다. ex) ['0','0', ...]
console.log('0'.repeat(100).split(''));

// fill()은 배열을 채우는 함수, 괄호안에 빈값을 넣으면 undefind로 채워진다. ex) [undefind, undefind, ...]
// map()은 배열에서 값을 뽑아내서 다시 새로운 배열을 만드는 함수
console.log(Array(100).fill().map((_, index) => index));

// filter()는 배열에서 값을 뽑아내서 조건을 만족하는 값으로 새로운 배열을 만드는 함수 ex) [0, 2, 4, 6, ...]
console.log(Array(100).fill().map((_, index) => index).filter(num => num % 2 === 0));

// reduce()는 배열에서 값을 뽑아내서 콜백 함수를 실행하고 그 누적값을 단일 값으로 반환한다. ex) 짝수의 합
console.log(Array(100).fill().map((_, index) => index).filter(num => num % 2 === 0).reduce((a, c) => a + c, 0 ));