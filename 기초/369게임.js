function solution(order) {
    var answer = 0;

    let v = order.toString().match(/[369]/g) ?? [];

    return order.toString().split('').filter(e => e == '3' || e == '6' || e =='9').length;
}