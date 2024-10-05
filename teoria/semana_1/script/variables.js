//alert("Enlace");

let cadenaUno = "Esta es una cadena";
let cadenaDos = 'Segunda cadena';
let cadenaTres = String("Cadena tres");
let cadenaCuatro = new String('cuarta cadena');

console.log(cadenaUno);
console.log(cadenaDos);
console.log(cadenaTres);
console.log(cadenaCuatro);

//concatenar
console.log(cadenaUno + cadenaDos);

//mètodos de string

//longitud
console.log(cadenaUno.length);

//posicion de cadena
console.log(cadenaUno.indexOf('cadena'));

//subcadena
console.log(cadenaUno.substring(0,4));

//combinar mètodos
console.log(cadenaUno.charAt(cadenaUno.length - 1));

//convertir nùmeros a cadenas
let n = 34;
console.log('tu edad es: ' + n);
console.log('tu edad es: ',n.toString());
console.log('tu edad es: ',String(n));

//convertir numeros a cadenas en otras bases
n = 10
console.log("binaroo: ",n.toString(2));
console.log("octal: ",n.toString(8));
console.log("hexadecimal: ",n.toString(16));

//convertir cadenas en numeros
let dato = "10.10";
console.log(Number(dato)*2);
console.log("21" * "3");
console.log(("34"-0)*3);

//para mayor control y no solo base 10
console.log(parseInt("3 datos"));
console.log(parseFloat("3.1416 valor de pi"));
console.log(parseInt("110",2));
console.log(parseInt("A",16));