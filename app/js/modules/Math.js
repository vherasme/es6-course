export var add = function(a, b){
    return a + b;
}

export var subtract = function(a, b){
    return a - b;
}

export var multiply = function(a, b){
    return a * b;
}

export var division = function(a, b){
    if(b !== 0)
        return a / b;
    else
        return "Division by 0 not defined";
}