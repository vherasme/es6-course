export var add = function (a, b) {
    return a + b;
}

export var subtract = (a, b) => a - b;

export var multiply = (a, b) => a * b;

export var division = (a, b) => {
    if (b !== 0)
        return a / b;
    else
        return "Division by 0 not defined";
}