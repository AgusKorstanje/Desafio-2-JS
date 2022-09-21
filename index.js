let examen = 1;
let nota1;
let nota2;
let notarec; /*nota recuperatorio*/
let notaf; 
let mensajef;   /*mensaje final*/
let nombre;
let Alumnos = [];

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
    examen = 4;
    let final = parseInt(prompt("nota del final"));
    return limites(final);
}

function alumno (){
    alert("Bienvenido al calculador de notas, se va a solicitar el nombre del alumno y notas de sus examenes, coloque final, luego se solicitara nombre del alumno para mostrar sus notas, en caso de querer abandonar tipee 'ESC'");
    nombre = prompt("ingrese nombre del alumno").toUpperCase("");
    return nombre;
}

function promediador(){
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
        examen = 1;
}

function mensaje(){
    if(notaf < 8){
        notaf = parseInt((nota1 + nota2)/2);
    }
    else if(notaf < 13) {
        alert("el alumno va a final");
        notaf = notafinal();
        examen = 1;
    }
    else {
        notaf = Math.round((nota1 + nota2)/2);
    }
    mensajef = alert(`la nota final de ${nombre} es ${notaf}`);
}

class Alumno{
    constructor(info){
    this.nombre = info.nombre;
    this.parcial1 = info.nota1;
    this.parcial2 = info.nota2;
    this.final = info.notaf;
    }
}

alumno();
while(nombre != "ESC"){
    promediador();
    mensaje();
    Alumnos.push(new Alumno(
            {
            nombre: nombre,
            nota1: nota1,
            nota2: nota2,
            notaf: notaf,
            }
        )
    )
    console.log(Alumnos);
    alumno();
}
