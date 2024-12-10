// HTML Elements
var btn = document.querySelectorAll('.button');
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
var puiss = document.querySelector('.puiss');
function affiche(value) {
    var text1 = saisie.innerText;
    saisie.innerText = text1 + value;
    return saisie.innerText;
}
function del(h) {
    h.innerText = "";
}
sin.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.sin(ce).toString();
});
cos.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.cos(ce).toString();
});
tan.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.tan(ce).toString();
});
sqrt.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.sqrt(ce).toString();
});
exp.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.exp(ce).toString();
});
log.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.log10(ce).toString();
});
puiss.addEventListener('click', function () {
    var ce = saisie.innerText;
    var s = " ";
    if (typeof ce === 'number')
        console.log(ce);
    result.innerText = Math.pow(ce).toString();
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
