export function summa(a: number, b: number) {
    return a + b;
}
export function multiplication(a: number, b: number) {
    return a * b
}
export function division(a: number, b: number) {
    return a / b;
}
export function subtract(a: number, b: number) {
    return a - b;
}

export type ActionType = {
    type: "summa" | "multiplication" | "division" | "subtract";
}
export function calculator(a: number, b: number, action: ActionType ) {
    switch (action.type) {
        case "summa":
            return a + b;
        case "multiplication":
            return a * b;
        case "subtract":
            return a - b;
        case "division":
            return a / b;
        default:
            return "Error of type action"
    }
}

export type StudentType = {
    name: string;
    age: number;
    isMarried: boolean;
    friends: Array<string>
}

export function getDeepCopyStudent(student: StudentType) {
    return {...student, friends: [...student.friends]}
}

// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum( ...numbers: Array<number>): number {
    return numbers.reduce((acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return "10"
        }
        else if (a === b || b === c || c === a) {
            return "01"
        }
        else {
            return "11"
        }
    }
    return "00"
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    return number.toString().split("").reduce((a, b) => a + +b, 0)
}

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0; let odd = 0;
    arr.reduce((acc,el,index) => index % 2 === 0 ? even += el : odd += el)
    return even > odd
}

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    return (areaCr / areaSq <= Math.PI / 4)
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    return [1]
}