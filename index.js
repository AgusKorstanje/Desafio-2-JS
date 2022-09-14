let nota1;
let nota2;
let notaf; /*nota promedio*/
let notarec;  /*nota recuperatorio*/
let final;  
let mensajef;   /*mensaje final*/

alert("Bienvenido al calculador de notas, se va a solicitar el nombre del alumno y notas de sus examenes, en caso de queres abandonar tipee 'ESC' cuando se soliite alumno")
let alumno = prompt("ingrese nombre del alumno");
alumno = alumno.toUpperCase("");

while(alumno != "ESC"){
    nota1 = parseInt(prompt("PARCIAL 1"));
    while(nota1 < 0 || nota1 > 10 || isNaN(nota1)){
        alert("nota no valida");
        nota1 = parseInt(prompt("PARCIAL 1"));
    }
    nota2 = parseInt(prompt("PARCIAL 2"));
    while(nota2 < 0 || nota2 > 10 || isNaN(nota2)){
        alert("nota no valida");
        nota2 = parseInt(prompt("PARCIAL 2"));
    }
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
        while(final < 0 || final > 10 || isNaN(final)){
            alert("nota no valida");
            final = parseInt(prompt("nota del final"));
        }
        notaf = final;
    }
    else {
        alert("promocionaste")
        notaf = Math.round((nota1 + nota2)/2);
    }
    mensajef = alert(`la nota final de ${alumno} es ${notaf}`);
    alumno = prompt("ingrese nombre del alumno");
    alumno = alumno.toUpperCase("");
}