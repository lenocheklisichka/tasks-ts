import {
    calculator,
    division,
    getBanknoteList, getDeepCopyStudent,
    getSum,
    getTriangleType,
    isEvenIndexSumGreater,
    isSquareGreater,
    multiplication, subtract,
    sum,
    summa
} from "./tasks";

test("summa should be correct", () => {
    const a: number = 20;
    const b: number = 5;
    const result = summa(a,b)
    expect(result).toBe(25)
})

test("multiplication should be correct", () => {
    expect(multiplication(20,5)).toBe(100)
})

test("division should be correct", () => {
    expect(division(20,5)).toBe(4)
})

test("subtract should be correct", () => {
    expect(subtract(20,5)).toBe(15)
})

test("calculator", () => {
    expect(calculator(5,4, {type: "summa"})).toBe(9)
    expect(calculator(5,4, {type: "multiplication"})).toBe(20)
    expect(calculator(5,4, {type: "division"})).toBe(1.25)
    expect(calculator(5,4, {type: "subtract"})).toBe(1)
})

test("deep copy of student", () => {
    const student ={
        name: "Bob",
        age: 23,
        isMarried: true,
        friends: ["Alex", "Mike"]
    }
    const copyStudent = getDeepCopyStudent(student)
    expect(copyStudent === student).toBe(false)
    expect(copyStudent.name === student.name).toBe(true)
    expect(copyStudent.age === student.age).toBe(true)
    expect(copyStudent.friends === student.friends).not.toBe(true)
    expect(copyStudent.friends[0] === student.friends[0]).toBe(true)
})

test("get sum1", () => {
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
})

test("get Triangle Type", ()=> {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(2, 3, 3)).toBe("01")
    expect(getTriangleType(4, 5, 3)).toBe("11")
    expect(getTriangleType(10, 2, 2)).toBe("00")
})

test("get Sum", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})
test("is Even Sum Greater", ()=> {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEvenIndexSumGreater([100, 1, 200, 2, 4])).toBe(true)
})
test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})
test("get banknote list", ()=> {
    // надо бы проверять длинну резалтов и их сумму
    const result2500 = getBanknoteList(2500)
    const result23 = getBanknoteList(23)
    expect(result2500[0]).toBe(1000)
    expect(result2500[1]).toBe(1000)
    expect(result2500[2]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)

})