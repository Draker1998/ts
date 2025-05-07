function logAndReturnValue <T>(value: T): T {
    return value;
}

// const result1 = logAndReturnValue<boolean>(true)

function getRandomArrayValue<T>(values: T[]): T {
    const i = Math.floor(Math.random() * values.length)
    return values[i]
}

interface User {
    name: string
    score: number
}

const user: User[]= [
    {name: 'Draker', score: 1000},
    {name: 'Min', score: 900},
    {name: 'Mon', score: 1100},
    {name: 'Kyaw', score: 500}
]

const result = getRandomArrayValue(user)
console.log(result);
