function sumar(valor1 , valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function restar(valor1, valor2){
    const resultado= valor1- valor2;
    return resultado;
}

function multiplicar(valor1,valor2){
    const resultado= valor1 * valor2;
    return resultado
}

function dividir(valor1,valor2){
    const resultado = valor1/valor2;
    return resultado
}

function calculadora(){
    let operacion;

    while (operacion != "X" && operacion != "Salir"){

        operacion = prompt("¿Qué operación quiere realizar?\n +: Sumar\n -: Restar\n /: Dividir\n *: Multiplicar\n \n Para abandonar la calculadora presione X o Salir ");
    
        switch(operacion){
            case "+":
                valor1 = parseInt(prompt("Ingrese el primer valor:"));
                valor2 = parseInt(prompt("Ingrese el segundo valor:"));
                alert("El resultado de la suma es " + sumar(valor1, valor2));
                break;
            
            case "-":
                valor1 = parseInt(prompt("Ingrese el primer valor:"));
                valor2 = parseInt(prompt("Ingrese el segundo valor:"));
                alert("El resultado de la resta es " + restar(valor1, valor2));
                break;
    
            case "*":
                valor1 = parseInt(prompt("Ingrese el primer valor:"));
                valor2 = parseInt(prompt("Ingrese el segundo valor:"));
                alert("El resultado de la multiplicación es " + multiplicar(valor1, valor2));
                break;
    
            case "/":
                valor1 = parseInt(prompt("Ingrese el primer valor:"));
                valor2 = parseInt(prompt("Ingrese el segundo valor:"));
                alert("El resultado de la división es " + dividir(valor1, valor2));
                break;
                
            case "X":
                break;

            case "Salir":
                break;

            
                default:
                alert("La operación ingresada es inválida");
        }
    }
}

calculadora();

