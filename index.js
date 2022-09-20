let examen = 1;
let nota1;
let nota2;
let notarec; /*nota recuperatorio*/
let notaf; 
let mensajef;   /*mensaje final*/
let nombre;

function limites (valor){
    while( valor < 0 || valor > 10 || isNaN(valor)){
        alert("nota no valida")
        if(examen === 1){
            valor = parseInt(prompt("PARCIAL 1"));
        }
        else if(examen === 2){
            valor = parseInt(prompt("PARCIAL 2"));
        }
        else if(examen === 3){
            valor = parseInt(prompt("nota del recuperatorio"))
        }
        else if(examen === 4){
            valor = parseInt(prompt("nota del final"));
        }
    }
    return valor;
}

function notafinal(){
    let final = parseInt(prompt("nota del final"));
    return limites(final);
}

function alumno (){
    alert("Bienvenido al calculador de notas, se va a solicitar el nombre del alumno y notas de sus examenes, en caso de queres abandonar tipee 'ESC' cuando se solicite alumno")
    nombre = prompt("ingrese nombre del alumno");
    nombre = nombre.toUpperCase("");
}

function promediador(){
    alumno();
    if(alumno != "ESC"){
        nota1 = parseInt(prompt("PARCIAL 1"));
        nota1 = limites(nota1);
        examen ++;
        nota2 = parseInt(prompt("PARCIAL 2"));
        nota2 = limites(nota2);
        examen ++;
        notaf = nota1 + nota2;
        /* la nota llega para final?? */
        if(notaf < 8 || nota1 == 1 || nota2 == 1){
            if(nota1 < 4 && nota2 < 4){
            }
            else if(nota1 < 4){
                notarec = parseInt(prompt("nota del recuperatorio"));
                notarec = limites(notarec);
                nota1 = notarec;
            }
            else if(nota2 < 4){
                notarec = parseInt(prompt("nota del recuperatorio"));
                notarec = limites(notarec);
                nota2 = notarec;
            }
        }
        /* nota final del alumno */
        notaf = nota1 + nota2;
        examen ++;
    }
}

function mensaje(){
    if(notaf < 8){
        alert("desaprobaste");
        notaf = parseInt((nota1 + nota2)/2);
    }
    else if(notaf < 13) {
        alert("vas a final");
        notaf = notafinal();
    }
    else {
        alert("promocionaste")
        notaf = Math.round((nota1 + nota2)/2);
    }
    mensajef = alert(`la nota final de ${nombre} es ${notaf}`);
}

promediador();
mensaje();
