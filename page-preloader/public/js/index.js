// Global var
let loaded=0;
const statusText= document.getElementById('statusText');
const loadStyle=document.getElementById('loadStyle');
const preloader=document.getElementsByClassName('preloader')[0];
const load=()=> {
  loadStyle.style.width=`${loaded}%`;
  statusText.innerText=`I'm ${loaded} % done!`;
  loaded < 100 ? loaded++ : doneLoading();
}
const doneLoading=()=> {
  clearInterval(loading);
  updateStatus();
}

function fadeOut(el){
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= .05) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

const animatePreloader=()=>{
  let tick=0;
  const stop=document.body.clientHeight/2;
  setTimeout(() => {
    animate=setInterval(function(){
      preloader.style.marginTop=`-${tick}px`;
      if(tick>=stop)
        clearInterval(animate);
      tick+=4;
      console.log(tick)
    },4)
  }, 600);
}

const updateStatus=()=> {
  statusText.innerText='Lets get crazay !';
  fadeOut(loadStyle);
  animatePreloader();
}


let loading = setInterval(load, 20);

console.log(document.body.clientHeight)