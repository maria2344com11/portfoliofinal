function cliqueModal(img){
    const janelaModal= document.getElementById('janelaModal');
    const imgModal= document.getElementById('imgModal');
    const txtModal= document.getElementById('txtModal');
    const btnFechar= document.getElementById('btnFechar');


    janelaModal.classList.remove("escondeJanelaModal");
    janelaModal.classList.add("mostraJanelaModal");


imgModal.src= img.src; 
imgModal.alt= img.alt;
txtModal.innerHTML= img.alt;

btnFechar.onclick=function(){
janelaModal.classList.remove("mostraJanelaModal");
janelaModal.classList.add("escondeJanelaModal");}
}