let producto = "", descuento = 0, totalConDescuento = 0, frecuente = "s", cantidad = 0, precio = 0, listaTotal = 0, totalCompra = 0, seguir = "s", impuesto = 0, totalFinal = 0;
        frecuente = prompt("Es usted cliente Frecuente (s/n)? :");
        while(seguir === "s") { 
            producto = prompt("Digite el nombre del producto:");
            cantidad = parseInt(prompt("Digite la cantidad de producto:"));
            precio = parseInt(prompt("Digite el precio del producto"));
            totalCompra = cantidad * precio;
            listaTotal = listaTotal + totalCompra;
            impuesto = listaTotal * 0.13;
            totalFinal = listaTotal + impuesto;
            descuento = listaTotal * 0.1;
            totalConDescuento = totalFinal - descuento;
            seguir = prompt("Desea seguir (s/n)? :");
        }
        if (frecuente === "s") {
            document.write("A continuacion se detalla su compra: <br><br>");
            document.write("El total Bruto a pagar es de : " + listaTotal);
            document.write("<br>El impuesto del 13% a pagar es de: " + impuesto);
            document.write("<br>Descuento cliente frecuente 10% : " + descuento);
            document.write("<br>El Total Final a pagar es de : " + totalConDescuento);   
        } else  {
            document.write("A continuacion se detalla su compra: <br><br>");
            document.write("El total Bruto a pagar es de : " + listaTotal);
            document.write("<br>El impuesto del 13% a pagar es de: " + impuesto);
            document.write("<br>El Total Final a pagar es de : " + totalFinal);   
        }
        
        
        
