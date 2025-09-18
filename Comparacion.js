const cantidadDeNumeros = 3;
function pedirNumeros(cantidad) {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numeroDado = Number(prompt(`Ingresa el número ${i + 1}:`));
    }
    return numeros;
}
/* Notita : '...' Es la sintaxis de propagación, crea una copia superficial del arreglo.
    El método 'sort' es una función integrada en JS para ordenar elementos de un arreglo 
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    */
function ordenarArreglo(arr) {
    const n = arr.length;
    let intercambiado;

    do {
        intercambiado = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                intercambiado = true;
            }
        }
    } while (intercambiado);
    return arr;
}

function analizarNumeros() {
    const numeros = pedirNumeros(cantidadDeNumeros);
/* Notita:
El método every itera sobre cada elemento del arreglo. Para cada elemento, ejecuta una función de prueba. Si la función de prueba devuelve true para cada uno de los elementos, every() también devolverá true. Si la función de prueba devuelve false incluso para un solo elemento, every() se detiene inmediatamente y devuelve false. */
    if (numeros.every(num => num === numeros[0])) {
        console.log("¡Los tres números ingresados son iguales!");
        return;
    }


    // Haciendo el ordenamiento manual
    const numerosOrdenados = ordenarArreglo(numeros);
    const numerosStatus = new Array(numerosOrdenados.length);
    for (let i = 0; i < numerosOrdenados.length; i++) {
        const numeroActual = numerosOrdenados[i];
        const numeroAnterior = numerosOrdenados[i - 1];
        const numeroSiguiente = numerosOrdenados[i + 1];
        if ((i > 0 && numeroActual === numeroAnterior) || (i < numerosOrdenados.length - 1 && numeroActual === numeroSiguiente)) {
            numerosStatus[i] = "repetido";
        } else {
            numerosStatus[i] = "único";
        }
    }

    console.log("Resultados del Análisis:");

    const mayor = numerosOrdenados[2];
    const centro = numerosOrdenados[1];
    const menor = numerosOrdenados[0];
    console.log(`Número mayor: ${mayor}`);
    console.log(`Número en el centro: ${centro}`);
    console.log(`Número menor: ${menor}`);

    console.log("Números ordenados con su estado:");
    numerosOrdenados.forEach((numero, index) => {
        const estado = numerosStatus[index];
        console.log(`- ${numero} (${estado})`);
    });

    console.log("\nNúmeros ordenados de MAYOR a MENOR:");
    console.log(numerosOrdenados.slice().reverse().join(", "));

    console.log("\nNúmeros ordenados de MENOR a MAYOR:");
    console.log(numerosOrdenados.join(", "));
}

analizarNumeros();