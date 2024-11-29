// HTML Elements
const btn: any = document.querySelectorAll('.button');

let result = document.querySelector('.reponse') as HTMLElement 
let saisie = document.querySelector('.saisie') as HTMLElement 
 let egale: any = document.querySelector('.buttadd');
 let supp: any = document.querySelector('.buttsupp');
function affiche( value: string):string{
     
   let text1: string= saisie.innerText   
saisie.innerText = text1+value;
return saisie.innerText
}
function del (h:HTMLElement){
     h.innerText = "";
}

  egale.addEventListener('click', () => {
     try{
   const ce = eval(saisie.innerText)

   if (ce==Infinity){
     result.innerText ='MATH ERROR';
   }else{
     result.innerText = ce;
   }
  }catch(err){
   result.innerText= 'SYNTHAX ERROR'
   }
});
for (let i = 0; i < btn.length; i++) {
     btn[i].addEventListener('click', () => {
          affiche(btn[i].innerText)
     });
 }


supp.addEventListener('click', () => {
     del (result );
     del(saisie)
})