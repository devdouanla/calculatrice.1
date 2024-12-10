// HTML Elements
var btn = document.querySelectorAll('.button');
var lsci = document.querySelectorAll('.lsci');
var result = document.querySelector('.reponse');
var saisie = document.querySelector('.saisie');
var egale = document.querySelector('.buttadd');
var supp = document.querySelector('.buttsupp');
var sin = document.querySelector('.sin');
var cos = document.querySelector('.cos');
var tan = document.querySelector('.tan');
var sqrt = document.querySelector('.sqrt');
var exp = document.querySelector('.exp');
var log = document.querySelector('.log');
var pu = document.querySelector('.puiss');
var dec = document.querySelector('.dec');
var hex = document.querySelector('.hex');
var bin = document.querySelector('.bin');
var facto = document.querySelector('.facto');
var heu = document.querySelector('.heu');
var mode = document.querySelector('.mode');
function affiche(value) {
    var text1 = saisie.innerText;
    saisie.innerText = text1 + value;
    return saisie.innerText;
}
function del(h) {
    h.innerText = "";
}
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
sin.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.sin(degreesToRadians(ce)).toString();
});
cos.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.cos(degreesToRadians(ce)).toString();
});
tan.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.tan(degreesToRadians(ce)).toString();
});
sqrt.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.sqrt(ce).toString();
});
exp.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.exp(ce).toString();
});
log.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    result.innerText = Math.log10(ce).toString();
});
pu.addEventListener('click', function () {
    saisie.innerText = saisie.innerText + "**";
});
mode.addEventListener('click', function () {
    if (mode.innerText == "normal") {
        lsci.forEach(function (element) {
            element.classList.remove("enleve");
            mode.innerText = "scientific";
        });
    }
    else if (mode.innerText == "scientific") {
        lsci.forEach(function (element) {
            element.classList.add("enleve");
            mode.innerText = "normal";
        });
    }
});
egale.addEventListener('click', function () {
    try {
        var ce = eval(saisie.innerText);
        if (ce == Infinity) {
            result.innerText = 'MATH ERROR';
        }
        else {
            result.innerText = ce;
        }
    }
    catch (err) {
        result.innerText = 'SYNTHAX ERROR';
    }
});
var _loop_1 = function (i) {
    btn[i].addEventListener('click', function () {
        affiche(btn[i].innerText);
    });
};
for (var i = 0; i < btn.length; i++) {
    _loop_1(i);
}
supp.addEventListener('click', function () {
    del(result);
    del(saisie);
});
function fact(n) {
    if (n < 0) {
        throw new Error("Le factoriel n'est pas défini pour les nombres négatifs");
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function convertToBinary(num) {
    if (!Number.isInteger(num)) {
        return "Erreur : Seuls les nombres entiers peuvent être convertis en binaire.";
    }
    return num.toString(2);
}
bin.addEventListener('click', function () {
    var ce = saisie.innerText;
    result.innerText = convertToBinary(Number(ce)).toString();
});
hex.addEventListener('click', function () {
    var ce = saisie.innerText;
    var v = Number(ce);
    var hex = v.toString(16);
    result.innerText = hex;
});
dec.addEventListener('click', function () {
    var ce = saisie.innerText;
    var bi = /^[01]+$/.test(ce);
    if (bi) {
        result.innerText = parseInt(ce, 2).toString();
    }
    else {
        result.innerText = parseInt(ce, 16).toString();
    }
});
function afficherHeure() {
    var now = new Date(); // Crée un objet Date représentant l'heure actuelle
    var hour = now.getHours().toString().padStart(2, '0'); // Récupère l'heure, avec un format à 2 chiffres
    var minutes = now.getMinutes().toString().padStart(2, '0'); // Récupère les minutes, format à 2 chiffres
    var secondes = now.getSeconds().toString().padStart(2, '0'); // Récupère les secondes, format à 2 chiffres
    // Retourner l'heure au format "HH:MM:SS"
    return hour + ':' + minutes + ':' + secondes;
}
heu.innerText = afficherHeure();
