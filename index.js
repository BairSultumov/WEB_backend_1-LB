//Писать строго в консоли!!!!!
//node
function f(m){
    let summa = 0
    for (let i = 0; i < m.length; i++) {
        summa= summa + m[i];
    }
    return summa
}

let m =[4,3,2,7,5,4,3,3,2,1] //Вводите любые числа (для беспалевности)

f(m)
