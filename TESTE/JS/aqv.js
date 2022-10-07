
//ATIRADOR
   elemento = document.getElementById("placar");
   //elemento.innerHTML = pontos.toString();
   
function moverdireita5(){

   let atiradorLeft= parseInt(getComputedStyle(atirador).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let atiradorWidth= parseInt(getComputedStyle(atirador).width);
   atirador.style.left = atiradorLeft +5;

   if ( atiradorLeft >=  fundoWidth - atiradorWidth){
   clearInterval(m5);
   m5 = setInterval ("moveresquerda5()", 15);
}}

   function moveresquerda5(){
   let atiradorLeft= parseInt(getComputedStyle(atirador).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let atiradorWidth= parseInt(getComputedStyle(atirador).width);
   
   atirador.style.left = atiradorLeft - 5;
   if ( atiradorLeft <= 0){
   clearInterval(m5);
   m5 = setInterval ("moverdireita5()",15);
   }}

   function disparo2(){
      missel2 = document.createElement("div");
      missel2.setAttribute("class","missel2");
      missel2.setAttribute("id","m2");
      missel2.style.left = (getComputedStyle(atirador).left);
      missel2.style.top = (getComputedStyle(atirador).top);
      fundo.appendChild(missel2);
      subir2 = setInterval("cima2()",100);
    }
    function cima2(){
       let m2top = parseInt(getComputedStyle(m2).top);
       let fundoWidth= parseInt(getComputedStyle(fundo).width)+40;
       m2.style.top = m2top +5;
      
       if (m2top >= fundoWidth ){
       clearInterval(subir2);
       fundo.removeChild(m2); 
       disparo2();
    }
    }
  
   //DETECTA COLISÃO DO MISSEL INIMIGO

    function colisao5(){
 
      let div1Left= parseInt(getComputedStyle(m2).left);
      let div1Top= parseInt(getComputedStyle(m2).top);
      let div1Height= parseInt(getComputedStyle(m2).height);
      let div1Width= parseInt(getComputedStyle(m2).width);
   
      let div2Left= parseInt(getComputedStyle(div1).left);
      let div2Top= parseInt(getComputedStyle(div1).top);
      let div2Height= parseInt(getComputedStyle(div1).height);
      let div2Width= parseInt(getComputedStyle(div1).width);
   
      let fundoHeight= parseInt(getComputedStyle(fundo).height);
      let fundoWidth= parseInt(getComputedStyle(fundo).width);
    
      if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
      ((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
         
         console.log("nav");
         clearInterval(subir2);
         clearInterval(m5);
         clearInterval(n5);
         fundo.removeChild(m2);
         disparo2();
         
         pontos2 = pontos2+1; 

         console.log(pontos2);
 }
   
    if(pontos2 == 1){
       
    //  console.log("sou o missel");
      para5();

      clearInterval(subir2);

      clearInterval(m5);
      clearInterval(n5);

      clearInterval(m4);
      clearInterval(n4);

      clearInterval(m3);
      clearInterval(n3);

      clearInterval(m);
      clearInterval(n);

   }
   }
   
    function para5(){

      clearInterval(m5);
      clearInterval(subir2);   

      clearInterval(m);
      clearInterval(subir);     
      
      body.removeChild(fundo);
           
     
   }





  
   
 



   
//INIMIGOS

function moverdireita4(){

   let div4Left= parseInt(getComputedStyle(div4).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div4Width= parseInt(getComputedStyle(div4).width);
   div4.style.left = div4Left +5;

   if ( div4Left >=  fundoWidth - div4Width){
   clearInterval(m4);
   m4 = setInterval ("moveresquerda4()",15);

}}

   function moveresquerda4(){
   let div4Left= parseInt(getComputedStyle(div4).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div4Width= parseInt(getComputedStyle(div4).width);
   
   div4.style.left = div4Left -5;
   if ( div4Left <= 0){
   clearInterval(m4);
   m4 = setInterval ("moverdireita4()",15);
   }}

////

  function moverdireita3(){

   let div3Left= parseInt(getComputedStyle(div3).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div3Width= parseInt(getComputedStyle(div3).width);
   div3.style.left = div3Left +5;

   if ( div3Left >=  fundoWidth - div3Width){
   clearInterval(m3);
   m3 = setInterval ("moveresquerda3()",15);
}}

   function moveresquerda3(){
   let div3Left= parseInt(getComputedStyle(div3).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div3Width= parseInt(getComputedStyle(div3).width);
   
   div3.style.left = div3Left -5;
   if ( div3Left <= 0){
   clearInterval(m3);
   m3 = setInterval ("moverdireita3()",15);
   }}


// mover cursor 2 - automático


   function moverdireita(){

   let div2Left= parseInt(getComputedStyle(div2).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div2Width= parseInt(getComputedStyle(div2).width);
   div2.style.left = div2Left +5;

   if ( div2Left >=  fundoWidth - div2Width){
   clearInterval(m);
   m = setInterval ("moveresquerda()",15);
}}

   function moveresquerda(){
   let div2Left= parseInt(getComputedStyle(div2).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div2Width= parseInt(getComputedStyle(div2).width);
   
   div2.style.left = div2Left -5;
   if ( div2Left <= 0){
   clearInterval(m);
   m = setInterval ("moverdireita()",15);
   }}
   
   // Mover cursor 1  - através dos botões
   
   
   function move(Direcao) {
   
   if (Direcao == "direita") {
   
   direita();
   contador ++;
   }
   
   if (Direcao == "esquerda") {
   
   esquerda();
   
   contador ++;
   
   }
   }
   
   
   function direita() {
   let div1Left= parseInt(getComputedStyle(div1).left);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
   let div1Width= parseInt(getComputedStyle(div1).width);
   
   div1.style.left = div1Left+15;
   if ( div1Left >= fundoWidth - div1Width){
   
   //clearInterval(timer);
   
   esquerda();
   
   }}
   
   function esquerda() {
   
   let div1Left= parseInt(getComputedStyle(div1).left);
   div1.style.left = div1Left-15;
   
   if ( div1Left <= 0){
   
   
   direita();
   
   }
   }
   

   
   function disparo(){
     missel = document.createElement("div");
     missel.setAttribute("class","missel");
     missel.setAttribute("id","m1");
     missel.style.left = (getComputedStyle(div1).left);
     missel.style.top = (getComputedStyle(div1).top);
     fundo.appendChild(missel);
     subir = setInterval("cima()",100);
   }
   function cima(){
      let m1top = parseInt(getComputedStyle(m1).top);
      m1.style.top = m1top -5;
   
      if (m1top <= 0){
      clearInterval(subir);
      fundo.removeChild(m1); 
      disparo();
   }}
   
   function colisao(){

   let div1Left= parseInt(getComputedStyle(m1).left);
   let div1Top= parseInt(getComputedStyle(m1).top);
   let div1Height= parseInt(getComputedStyle(m1).height);
   let div1Width= parseInt(getComputedStyle(m1).width);

   let div2Left= parseInt(getComputedStyle(div2).left);
   let div2Top= parseInt(getComputedStyle(div2).top);
   let div2Height= parseInt(getComputedStyle(div2).height);
   let div2Width= parseInt(getComputedStyle(div2).width);

   let fundoHeight= parseInt(getComputedStyle(fundo).height);
   let fundoWidth= parseInt(getComputedStyle(fundo).width);
      
   if (((div1Left >= div2Left)&&(div1Left <= div2Left + div2Width))&&
   ((div1Top >= div2Top)&&(div1Top <= div2Top + div2Height))){
      para2();
      clearInterval(subir);
      clearInterval(m);
      clearInterval(n);
      fundo.removeChild(m1);
      fundo.removeChild(div2);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
     // alert (pontos);
      disparo();
     
   }
   if (((div2Left >= div1Left)&&(div2Left <= div1Left + div1Width))&&
   ((div2Top >= div1Top)&&(div2Top <= div1Top + div1Height))){
      para2();
      clearInterval(subir);
      clearInterval(m);
      clearInterval(n);
      fundo.removeChild(m1);
      fundo.removeChild(div2);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
     // alert (pontos);
      disparo();
   }
   if(pontos==3){
      para5();

      clearInterval(subir2);

      clearInterval(m5);
      clearInterval(n5);

      clearInterval(m4);
      clearInterval(n4);

      clearInterval(m3);
      clearInterval(n3);

      clearInterval(m);
      clearInterval(n);
   }
   }
   function para2(){
    clearInterval(m);
    clearInterval(subir);
   }

   function colisao3(){

      let div1Left= parseInt(getComputedStyle(m1).left);
      let div1Top= parseInt(getComputedStyle(m1).top);
      let div1Height= parseInt(getComputedStyle(m1).height);
      let div1Width= parseInt(getComputedStyle(m1).width);
      
      let div3Left= parseInt(getComputedStyle(div3).left);
      let div3Top= parseInt(getComputedStyle(div3).top);
      let div3Height= parseInt(getComputedStyle(div3).height);
      let div3Width= parseInt(getComputedStyle(div3).width);
      
      let fundoHeight= parseInt(getComputedStyle(fundo).height);
      let fundoWidth= parseInt(getComputedStyle(fundo).width);
      
   
   
   if (((div1Left >= div3Left)&&(div1Left <= div3Left + div3Width))&&
   ((div1Top >= div3Top)&&(div1Top <= div3Top + div3Height))){
      para3();
      clearInterval(subir);
      clearInterval(m3);
      clearInterval(n3);
      fundo.removeChild(m1);
      fundo.removeChild(div3);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
     // alert (pontos);
      disparo();
     
   }
   if (((div3Left >= div1Left)&&(div3Left <= div1Left + div1Width))&&
   ((div3Top >= div1Top)&&(div3Top <= div1Top + div1Height))){
      para3();
      clearInterval(subir);
      clearInterval(m3);
      clearInterval(n3);
      fundo.removeChild(m1);
      fundo.removeChild(div2);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
     // alert (pontos);
      disparo();
   }}
   function para3(){
      clearInterval(m3);
      clearInterval(subir);
   }

   function colisao4(){

      let div1Left= parseInt(getComputedStyle(m1).left);
      let div1Top= parseInt(getComputedStyle(m1).top);
      let div1Height= parseInt(getComputedStyle(m1).height);
      let div1Width= parseInt(getComputedStyle(m1).width);
      
      let div4Left= parseInt(getComputedStyle(div4).left);
      let div4Top= parseInt(getComputedStyle(div4).top);
      let div4Height= parseInt(getComputedStyle(div4).height);
      let div4Width= parseInt(getComputedStyle(div4).width);
      
      let fundoHeight= parseInt(getComputedStyle(fundo).height);
      let fundoWidth= parseInt(getComputedStyle(fundo).width);
      
   
   
   if (((div1Left >= div4Left)&&(div1Left <= div4Left + div4Width))&&
   ((div1Top >= div4Top)&&(div1Top <= div4Top + div4Height))){
      para4();
      clearInterval(subir);
      clearInterval(m4);
      clearInterval(n4);
      fundo.removeChild(m1);
      fundo.removeChild(div4);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
    
      disparo();
     
   }
   if (((div4Left >= div1Left)&&(div4Left <= div1Left + div1Width))&&
   ((div4Top >= div1Top)&&(div4Top <= div1Top + div1Height))){
      para4();
      clearInterval(subir);
      clearInterval(m4);
      clearInterval(n4);
      fundo.removeChild(m1);
      fundo.removeChild(div4);
      pontos = pontos+1;
      elemento.innerHTML = pontos.toString();
      
      disparo();
   }}

   function para4(){
      clearInterval(m4);
      clearInterval(subir);
   }
   


   function iniciar(){
   //Ao carregar a página estas linhas são executadas
   
  fundo.removeChild(menu);
  
  pontos = 0; 
  pontos2 = 0;
  contador = 0;
  cont = 0;  
 
   //Funções que são chamadas a cada 15 e 5 milisegundos
   
  m = setInterval("moverdireita()", 15);
  n = setInterval("colisao()", 10);

  m3 = setInterval("moverdireita3()", 15);
  n3 = setInterval("colisao3()", 10);
   
  m4 = setInterval("moverdireita4()", 15);
  n4 = setInterval("colisao4()", 10);

  m5 = setInterval("moverdireita5()", 15);
  n5 = setInterval("colisao5()", 10);
   
   disparo();   
   disparo2();

   document.querySelector("#esquerda").addEventListener("click",()=>{ move('esquerda')});   
   document.querySelector("#direita").addEventListener("click",()=>{ move('direita')});

 }
 

  document.querySelector("#menu").addEventListener("click",()=>{iniciar()});   
   


