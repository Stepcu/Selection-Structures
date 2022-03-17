
var num = [], par = 0, impar = 0, mayor = 0, menor = 0;
for(n = 0; n <= 9; n++) { 
    num[n] = parseInt(prompt("Digite un numero:"));
    if (n % 2 == 0) {
        par++;
    } else {
        impar++;
    }
}  
mayor = Math.max(...num);
menor = Math.min(...num); 
document.write("De los 10 numeros ingresados " + par + " son pares!");
document.write("<br> De los 10 numeros ingresados " + impar + " son impares!");
document.write("<br> De los 10 numeros ingresados " + mayor + " es el numero mayor");
document.write("<br> De los 10 numeros ingresados " + menor + " es el numero menor");