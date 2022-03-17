let seguir = 's', letra = "", contvocales = 0, contconsonantes = 0;
while(seguir === 's') {
    letra = prompt("Escriba una letra:");
    if ((letra == "a") || (letra == "e") || (letra == "i") || (letra == "o") || (letra == "u")) {
        contvocales++;
    } else {
        contconsonantes++;
    }
    seguir = prompt("Desea seguir (s/n)?:");
}
document.write("Se encontraron: " + contvocales + " vocales<br>");
document.write("Se encontraron: " + contconsonantes + " consonantes"); 