// Global var
let loaded=0;


const load=()=> {
  document.getElementById('loadStyle').style.width=`${loaded}%`;
  document.getElementById('statusText').innerText=`I'm ${loaded} % done!`;
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

const updateStatus=()=> {
  document.getElementById('statusText').innerText='Lets get crazay !';
  // this.loader.fadeOut();
  fadeOut(document.getElementById('loadStyle'));
  this.animatePreloader();
}


let loading = setInterval(load, 20);

