function romanToInt(s) {
        const romanMap = { // Objeto criado para mostrar o valor de cada algarismo
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

        for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
}

// Criando a exibição em vários consoles para mostrar como podem ser usados
// O console irá visulazar no termonal os valores convertido
console.log(romanToInt("III")); 
console.log(romanToInt("IV"));  
console.log(romanToInt("IX"));  
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));


