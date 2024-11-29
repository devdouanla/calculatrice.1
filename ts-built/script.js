// HTML Elements
var btn = document.querySelectorAll('.button');
var result = document.querySelector('.reponse');
var saisie = document.querySelector('.saisie');
var egale = document.querySelector('.buttadd');
var supp = document.querySelector('.buttsupp');
function affiche(value) {
    var text1 = saisie.innerText;
    saisie.innerText = text1 + value;
    return saisie.innerText;
}
function del(h) {
    h.innerText = "";
}
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
