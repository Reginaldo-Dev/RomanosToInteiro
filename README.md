Explicação
Dicionário de valores: Primeiro, criamos um objeto (romanToValue) que mapeia cada símbolo romano ao seu valor inteiro correspondente.
Iteração reversa: Percorremos a string s de trás para frente. Isso nos ajuda a lidar facilmente com a lógica de subtração, pois sabemos que um numeral romano é subtrativo se for menor que o numeral à sua direita.
Cálculo do total:
Para cada símbolo, comparamos o seu valor (currentValue) com o valor do símbolo anterior (prevValue).
Se o valor atual for menor que o valor anterior, subtraímos o valor atual do total (total -= currentValue).
Caso contrário, somamos o valor atual ao total (total += currentValue).
Atualização do valor anterior: Após cada iteração, atualizamos prevValue para o valor atual.
Este algoritmo é eficiente e claro, garantindo que todos os casos de numerais romanos sejam tratados corretamente, incluindo os casos de subtração.
