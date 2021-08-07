//Codigo del cuadrado

console.group("Cuadrados"); //darle un nombre a un grupo para agrupar console.logs

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado)
{
    return lado * 4;
} 
perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrada = ladoCuadrado * ladoCuadrado;
function areaCuadrada(lado)
{
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrada + "cm2");

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo3 = 4;

//console.log
//(
//    "Los lados del triangulo miden: " 
//    + ladoTriangulo1 
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//   + baseTriangulo3 
//    + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
function areaTriangulo(base, altura)
{
    return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");


console.groupEnd();


//Codigo del circulo
console.group("Circulos");

//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio)
{
    return radio * 2;
}

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");


//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");


//Circunferencia
function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo del circulo es: " + perimetroCirculo + "cm");


//Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm2");

function areaCirculo(radio)
{
    return (radio * radio) * PI;
}



console.groupEnd();


//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado()
{
    const input  = document.getElementById("InputCuadrado");
    const value = input.value; //para obtener el valor que escriben los usuarios

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado()
{
    const input  = document.getElementById("InputCuadrado");
    const value = input.value; //para obtener el valor que escriben los usuarios

    const area = areaCuadrada(value);
    alert(area);
}

//document.getElementById ()