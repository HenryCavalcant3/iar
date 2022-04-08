var tabuleiro = document.getElementById("tabuleiro");
var vida = document.getElementById("vida");
var ataque2x = document.getElementById("ataque2");
var tabuleiroVet = [];

var vilao = [];
var heroi = [];
var casa = [];

var vidas = 3;
var ataque2 = 0;
var pause = 0;

var inicializar = () => {
    for(var i=0; i<100; i++) {
        tabuleiroVet[i] = "S"
    }

    vilao[0] = Math.floor(Math.random() * 9);
    vilao[1] = Math.floor(Math.random() * 9)

    heroi[0] = Math.floor(Math.random() * 9);
    heroi[1] = Math.floor(Math.random() * 9);

    casa[0] = Math.floor(Math.random() * 9);
    casa[1] = Math.floor(Math.random() * 9);

    tabuleiroVet[(10*heroi[1])+heroi[0]] = "H";
    tabuleiroVet[(10*casa[1])+casa[0]] = "X";
    trocarVilao();

    if(heroi[0] == casa[0] && heroi[1] == casa[1]) {
        ataque2 = 1;
        tabuleiroVet[(10*casa[1])+casa[0]] = "S";
        ataque2x.innerHTML = "on";
        casa = null;
        pause = 1;
    }
}

var exibir = () => {
    var ult = "";

    for(var i=0; i<100; i++) {
        if(tabuleiroVet[i] == "V") {
            ult += "<div class='v'>V</div>";
        }
        else if(tabuleiroVet[i] == "H") {
            ult += "<div class='h'>H</div>";
        }
        else if(tabuleiroVet[i] == "X") {
            ult += "<div class='x'>X</div>";
        }
        else {
            ult += "<div class='s'></div>";
        }
    }

    tabuleiro.innerHTML = ult;
}

var trocarVilao = () => {
    vilao[0] = Math.floor(Math.random() * 9);
    vilao[1] = Math.floor(Math.random() * 9);
    tabuleiroVet[(10*vilao[1])+vilao[0]] = "V";

    if(vilao[0] == heroi[0] && vilao[1] == heroi[1]) {
        if(ataque2 == 1)
            vidas -= 2;
        else
            vidas --;
        vida.innerHTML = vidas;
        trocarVilao();
    }
}

var movimentar = () => {
    var dir;

    switch(dir) {
        case 0:

        case 1:

        case 2:

        case 3:

    }

    if(vilao[0] == heroi[0] && vilao[1] == heroi[1]) {
        if(ataque2 == 1)
            vidas -= 2;
        else
            vidas --;
        vida.innerHTML = vidas;
        trocarVilao();
    }

    vilao[0] = 0;
    vilao[1] = 0;
    tabuleiroVet[(10*vilao[1])+vilao[0]] = "V";
}

setInterval(function () {
    inicializar();
    exibir();
}, 1000);