
let angulo = 0;
for(a = 0; a <= 9; a++) {
    angulo = parseInt(prompt("Digite las medidas de los Ángulos:"));
    if(angulo === 90) {
        document.write(angulo + " grados:" + " Este es un Triángulo Rectángulo <br><br>");
    } else if(angulo < 90) {
        document.write(angulo + " grados:" + " Este es un Triángulo Acuntángulo <br><br>");
    } else if (angulo > 90) {
        document.write(angulo + " grados:" + " Este es una Triángulo Obtusángulo <br><br>");
    } else {
        document.write("Por favor ingrese un numero valido <br>")
    }
}
