// HTML Elements
const btn: any = document.querySelectorAll('.button');

let result = document.querySelector('.reponse') as HTMLElement 
let saisie = document.querySelector('.saisie') as HTMLElement 
 let egale: any = document.querySelector('.buttadd');
 let supp: any = document.querySelector('.buttsupp');
let sin  = document.querySelector('.sin') as HTMLElement 
let cos = document.querySelector('.cos') as HTMLElement 
let tan = document.querySelector('.tan') as HTMLElement 
let sqrt = document.querySelector('.sqrt') as HTMLElement 
let exp = document.querySelector('.exp') as HTMLElement 
let log = document.querySelector('.log') as HTMLElement 
let puiss = document.querySelector('.puiss') as HTMLElement 





function affiche( value: string):string{
     
   let text1: string= saisie.innerText   
saisie.innerText = text1+value;
return saisie.innerText
}
function del (h:HTMLElement){
     h.innerText = "";
}

sin.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.sin(ce).toString();
  

});
cos.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.cos(ce).toString();
  

});
tan.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.tan(ce).toString();
  

});
sqrt.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.sqrt(ce).toString();
  

});
exp.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.exp(ce).toString();
  

});
log.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.log10(ce).toString();
  

});


puiss.addEventListener('click', () => {
     const ce : any = saisie.innerText
     let s: any = " "
     if ( typeof ce === 'number') 
          console.log(ce)
             result.innerText = Math.pow(ce).toString();
  

});





















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