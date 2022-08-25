// Ingresar nota de 5 alumnos

for (let i = 1; i <= 5; i++){
    let nota = parseInt(prompt("Ingresar nota"))

    while (nota <= 0 || nota > 10) {
        alert("Nota incorrecta");
        nota = parseInt(prompt("Ingresar nota"))
       
    }
    if (nota >= 1 && nota <= 5) {
        alert("Desaprobado");
    }
        
    else if (nota >= 6 && nota <= 10) {
        alert("Aprobado");
    }
        
     
}

alert("Ingreso finalizado");




