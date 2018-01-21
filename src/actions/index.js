export const plus = (amount) => {
    return {
        type: 'PLUS',
        amount
    };
}

export const minus = (amount) => {
    return {
        type: 'MINUS',
        amount
    };
}

export const set = (amount) => {
    return {
        type: 'SET',
        amount
    };
}