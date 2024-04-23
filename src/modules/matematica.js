/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
    return x + y;
}
const multiplicar = (a, b) => {
    return a * b;
};
function restar(c,d) {
    return c - d;
}
const dividir = (e, f) => {
    return e / f;
};
const array = ["dos", "cuatro", "ocho", "diez"];
// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar, restar, dividir, array};