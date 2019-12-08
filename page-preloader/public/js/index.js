// Global var
let loaded=0;


const load=()=> {
  document.getElementById('loadStyle').style.width=`${loaded}%`;
  document.getElementById('statusText').innerText=`I'm ${loaded} % done!`;
  loaded < 100 ? loaded++ : doneLoading();
}
const doneLoading=()=> {
  clearInterval(loading);
  // this.updateStatus();
}

let loading = setInterval(load, 20);

