/* 1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual */

let nombre = "Alejandro";
let apellido = "Elias";
let sueldoActual = 200000;
let porcentajeAumento = 115;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

let texto = `
Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%
$${calculoAumento}
y su nuevo sueldo es: $${sueldoActual + calculoAumento}`

console.log(texto);

// Termonado!!!