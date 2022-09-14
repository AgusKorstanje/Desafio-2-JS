let examen = 1;
let nota1;
let nota2;
let notaf; /*nota promedio*/
let notarec;  /*nota recuperatorio*/
let final;  
let mensajef;   /*mensaje final*/
function limites(valor){
    while( valor < 0 || valor > 10 || valor == isNaN){
        alert("nota no valida")
        if(examen === 1){
            valor = parseInt(prompt("PARCIAL 1"))
            nota1 = valor;
        }
        else if(examen === 2){
            valor = parseInt(prompt("PARCIAL 2"))
            nota2 = valor;
        }
        else if(examen === 3){
            valor = parseInt(prompt("nota del final"))
            final = valor;
        }
    }
}

alert("Bienvenido al calculador de notas, se va a solicitar el nombre del alumno y notas de sus examenes, en caso de queres abandonar tipee 'ESC' cuando se soliite alumno")
let alumno = prompt("ingrese nombre del alumno");
alumno = alumno.toUpperCase("");

while(alumno != "ESC"){
    nota1 = parseInt(prompt("PARCIAL 1"));
    limites(nota1);
    examen = examen + 1;
    nota2 = parseInt(prompt("PARCIAL 2"));
    limites(nota2);
    examen = examen + 1;
    notaf = nota1 + nota2;
    /* la nota llega para final?? */
    if(notaf < 8 || nota1 == 1 || nota2 == 1){
        if(nota1 < 4 && nota2 < 4){
        }
        else if(nota1 < 4){
            notarec = parseInt(prompt("ingrese nota del recuperatorio"));
            nota1 = notarec;
        }
        else if(nota2 < 4){
            notarec = parseInt(prompt("ingrese nota del recuperatorio"));
            nota2 = notarec;
        }
    }
    /* nota final del alumno */
    notaf = nota1 + nota2;
    if(notaf < 8){
        alert("desaprobaste");
        notaf = parseInt((nota1 + nota2)/2);
    }
    else if(notaf < 13) {
        alert("vas a final");
        final = parseInt(prompt("nota del final"));
        limites(final)
        notaf = final;
    }
    else {
        alert("promocionaste")
        notaf = Math.round((nota1 + nota2)/2);
    }
    mensajef = alert(`la nota final de ${alumno} es ${notaf}`);
    examen = 1;
    alumno = prompt("ingrese nombre del alumno");
    alumno = alumno.toUpperCase("");
}