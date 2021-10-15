console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm"); 

const perimetroCuadrado = ladoCuadrado * 4;  
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado  + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();


//Separación grupos


console.group("Triangulo");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo3 = 4;
const alturatriangulo = 5.5;
console.log(
    "Los lados del triangulo miden:" 
    + ladotriangulo1 
    + " cm, " 
    + ladotriangulo2 
    + " cm, " 
    + basetriangulo3 
    + " cm"
);

const alturaTriangulo = 5.5;  
console.log("La altura del triangulo mide: " + alturaTriangulo  + " cm");

const perimetoTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo3;
console.log("El perimetro del triangulo mide: " + perimetoTriangulo);

const areaTriangulo = (basetriangulo3 * alturaTriangulo) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + " cm^2");

console.groupEnd();


//Separación grupos


console.group("Circulo");

const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo  + " cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo  + " cm");

const PI = Math.PI;
console.log("PI del circulo mide: " + PI);

const circunferenciaCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide: " + circunferenciaCirculo  + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide: " + areaCirculo  + " cm^2");


console.groupEnd();