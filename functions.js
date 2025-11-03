console.log('поднятая функция:'+ add(100,200))

function add(a,b){
    return a+b
}

let addition = add
console.log('назначенная функция:'+ addition(31,64))

let anon = function(a,b){
    let result = a+b;
    return result
}
console.log('анонимная функция:'+ anon(9,1))

let iffy = (function(){
    let str = 'самовызывающаяся функция:';
    return str
})()
console.log(iffy)
