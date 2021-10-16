//Separación grupos CUADRADO

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm"); 

function perimetroCuadrado(lado) {
    return lado * 4;
}  

//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado  + " cm");

function areaCuadrado(lado) {
    return lado * lado; 
}

//console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();


//Separación grupos TRIANGULO


console.group("Triangulo");

//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo3 = 4;
//const alturatriangulo = 5.5;
//console.log(
//    "Los lados del triangulo miden:" 
//    + ladotriangulo1 
//    + " cm, " 
//    + ladotriangulo2 
//    + " cm, " 
//    + basetriangulo3 
//    + " cm"
//);

//const alturaTriangulo = 5.5;  
//console.log("La altura del triangulo mide: " + alturaTriangulo  + " cm");

function perimetoTriangulo(lado, lado, base) {
    return lado + lado + base;
}
//console.log("El perimetro del triangulo mide: " + perimetoTriangulo);

//const areaTriangulo = (basetriangulo3 * alturaTriangulo) / 2;
//console.log("El area del triangulo mide: " + areaTriangulo + " cm^2");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Separación grupos CIRCULO


console.group("Circulo");

const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo  + " cm");

//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo mide: " + diametroCirculo  + " cm");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI del circulo mide: " + PI);

//const circunferenciaCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo mide: " + circunferenciaCirculo  + " cm");

function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo mide: " + areaCirculo  + " cm^2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();