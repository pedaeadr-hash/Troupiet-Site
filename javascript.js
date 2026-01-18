let index = 0;
const carolseu = document.querySelector('.viwe');
const cards=document.querySelectorAll('.p')
const total= cards.length
const bntl =document.querySelector('.left');
const bntr =document.querySelector('.right');

bntl.style.display = 'none';  


const cardWidth = 28.7; // vw
const visibleCards = Math.floor(100 / cardWidth);
const maxIndex = total - visibleCards;

function updateCarousel() {
  carolseu.style.transform = `translateX(-${index * cardWidth}vw)`;
}


function right() {
  if (index < maxIndex) {
    index++;
    updateCarousel();
  }
  if (index>0) {
    bntl.style.display = 'flex';  
}
    if(index==maxIndex) {
    bntr.style.display = 'none';  
}
}

function left() {
  if (index > 0) {
    index--;
    updateCarousel();
  }
  if (index==0) {
    bntl.style.display = 'none'; 
  }
  if(index<maxIndex) {
    bntr.style.display = 'flex'; 
  }
}



let index1 =0;
const carolseu1 = document.querySelector('.viwe1');
const cards1=document.querySelectorAll('.p1');
const total1=cards1.length;
const bntl1 =document.querySelector('.left1');
const bntr1 =document.querySelector('.right1');

bntl1.style.display='none';

const visivelcard = Math.floor(100/29.6);
const maxindex1 = total1 - visivelcard;

function updatecarolseu1 () {
    carolseu1.style.transform=`translateX(-${index1 * 28.7}vw)`;
}

function right1 () {
    if (index1<maxindex1) {
        index1++;
        updatecarolseu1();
    }
    if (index1>0) {
    bntl1.style.display = 'flex';  
}
    if (index1==maxindex1) {
      bntr1.style.display='none';
    }
}

function left1 () {
    if(index1>0) {
        index1--;
        updatecarolseu1 ();
    }
    if (index1==0) {
    bntl1.style.display = 'none';  
}
    if (index1<maxindex1){
      bntr1.style.display='flex';
    }
}





function chamarm () {
  document.querySelector('.menu').classList.add('ativom');
  document.body.style.overflow='hidden';
  document.querySelector('.over').classList.add('overy');
}
function closem () {
  document.querySelector('.menu').classList.remove('ativom');
  document.body.style.overflow='';
  document.querySelector('.over').classList.remove('overy');
}




let nu=0;
const carrosel=document.querySelector('.carro')
const bolls1 = document.querySelector('.b1')
const bolls2 = document.querySelector('.b2') 

if (nu===0) {
  bolls1.classList.add('bactive');
}

function av (){
  if (nu<1){
  nu++;
  carrosel.style.transform=`translateX(${-nu*100}%)`
  if (nu===1){
    bolls1.classList.remove('bactive');
    bolls2.classList.add('bactive');
  }
}
}
function vo(){
  if(nu>0){
  nu--;
  carrosel.style.transform=`translateX(${-nu*100}%)` 
  if(nu===0) {
    bolls2.classList.remove('bactive');
    bolls1.classList.add('bactive');
  }
}
}




let posmb=0;
const carrinho=document.querySelector('.carro');





function avmb () {
  if(posmb<1){
    posmb++;
    carrinho.style.transform=`translateX(${-posmb *100}%)`
    if (posmb===1){
    bolls1.classList.remove('bactive');
    bolls2.classList.add('bactive');
  }
    
  }
  

}

function volmb () {
  if(posmb>0){
    posmb--;
    carrinho.style.transform=`translateX(${-posmb *100}%)`
    if(posmb===0) {
    bolls2.classList.remove('bactive');
    bolls1.classList.add('bactive');
  }
  }
}





let indexmb=0;
const carruselmb =document.querySelector('.carroselmb');



function avamb1 () {
  if  (indexmb<1) {
    indexmb++;
    carruselmb.style.transform=`translateX(${-indexmb * 100}%)`
  }
}

function volmb1 () {
  if (indexmb>-1) {
    indexmb--;
    carruselmb.style.transform=`translateX(${-indexmb * 100}%)`
  }
}

























