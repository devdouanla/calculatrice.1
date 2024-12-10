
// HTML Elements
const btn: any = document.querySelectorAll('.button');
const lsci: any = document.querySelectorAll('.lsci');

let result = document.querySelector('.reponse') as HTMLElement
let saisie = document.querySelector('.saisie') as HTMLElement
let egale: any = document.querySelector('.buttadd');
let supp: any = document.querySelector('.buttsupp');
let sin = document.querySelector('.sin') as HTMLElement
let cos = document.querySelector('.cos') as HTMLElement
let tan = document.querySelector('.tan') as HTMLElement
let sqrt = document.querySelector('.sqrt') as HTMLElement
let exp = document.querySelector('.exp') as HTMLElement
let log = document.querySelector('.log') as HTMLElement
let pu = document.querySelector('.puiss') as HTMLElement
let dec = document.querySelector('.dec') as HTMLElement
let hex = document.querySelector('.hex') as HTMLElement
let bin = document.querySelector('.bin') as HTMLElement
let facto = document.querySelector('.facto') as HTMLElement
let heu = document.querySelector('.heu') as HTMLElement
let mode = document.querySelector('.mode') as HTMLElement






function affiche(value: string): string {

     let text1: string = saisie.innerText
     saisie.innerText = text1 + value;
     return saisie.innerText
}
function del(h: HTMLElement) {
     h.innerText = "";
}
function degreesToRadians(degrees: number): number {
     return degrees * (Math.PI / 180);
 }
 
 




sin.addEventListener('click', () => {
     const ce: any|number = saisie.innerText
     let s: any = " "
     result.innerText = Math.sin(degreesToRadians(ce)).toString();
   


});
cos.addEventListener('click', () => {
     const ce: any = saisie.innerText
     let s: any = " "



     
          result.innerText = Math.cos(degreesToRadians(ce)).toString();
   

});
tan.addEventListener('click', () => {
     const ce: any = saisie.innerText
     let s: any = " "
   
          result.innerText = Math.tan(degreesToRadians(ce)).toString();
     





});
sqrt.addEventListener('click', () => {
     const ce: any = saisie.innerText
     let s: any = " "
    
          result.innerText = Math.sqrt(ce).toString();
     






});
exp.addEventListener('click', () => {
     const ce: any = saisie.innerText
     let s: any = " "



   
          result.innerText = Math.exp(ce).toString();
    

});
log.addEventListener('click', () => {
     const ce: any = saisie.innerText
     let s: any = " "



   
          result.innerText = Math.log10(ce).toString();
    



});


pu.addEventListener('click', () => {
     saisie.innerText = saisie.innerText + "**"


});
mode.addEventListener('click', () => {
     if (mode.innerText == "normal") {
          lsci.forEach(element => {
               element.classList.remove("enleve")
               mode.innerText = "scientific"
          });

     } else if (mode.innerText == "scientific") {

          lsci.forEach(element => {
               element.classList.add("enleve")
               mode.innerText = "normal"
          });

     }


});





















egale.addEventListener('click', () => {
     try {
          const ce = eval(saisie.innerText)

          if (ce == Infinity) {
               result.innerText = 'MATH ERROR';
          } else {
               result.innerText = ce;
          }
     } catch (err) {
          result.innerText = 'SYNTHAX ERROR'
     }
});
for (let i = 0; i < btn.length; i++) {
     btn[i].addEventListener('click', () => {
          affiche(btn[i].innerText)
     });
}


supp.addEventListener('click', () => {
     del(result);
     del(saisie)
})

function fact(n: number): number {
     if (n < 0) {
          throw new Error("Le factoriel n'est pas défini pour les nombres négatifs");
     }
     let result = 1;
     for (let i = 2; i <= n; i++) {
          result *= i;
     }
     return result;
}
function convertToBinary(num: number): string {
     if (!Number.isInteger(num)) {
          return "Erreur : Seuls les nombres entiers peuvent être convertis en binaire.";
     }
     return num.toString(2);
}

bin.addEventListener('click', () => {
     const ce: any = saisie.innerText
   
result.innerText = convertToBinary(Number(ce)).toString();
     

})

hex.addEventListener('click', () => {
     const ce: any = saisie.innerText
let v = Number(ce)

let hex =v.toString(16)
    
          result.innerText = hex
   
})
dec.addEventListener('click', () => {
     const ce: any = saisie.innerText
     const bi = /^[01]+$/.test(ce)
     if (bi) {
          result.innerText = parseInt(ce, 2).toString()
     } else {
          result.innerText = parseInt(ce, 16).toString()

     }







})

function afficherHeure(): string {
     const now = new Date(); // Crée un objet Date représentant l'heure actuelle

     const hour = now.getHours().toString().padStart(2, '0'); // Récupère l'heure, avec un format à 2 chiffres
     const minutes = now.getMinutes().toString().padStart(2, '0'); // Récupère les minutes, format à 2 chiffres
     const secondes = now.getSeconds().toString().padStart(2, '0'); // Récupère les secondes, format à 2 chiffres

     // Retourner l'heure au format "HH:MM:SS"
     return hour + ':' + minutes + ':' + secondes;
}
heu.innerText = afficherHeure();

