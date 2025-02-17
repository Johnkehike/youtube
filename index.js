let videoMenus = document.querySelectorAll('.fa-ellipsis-vertical');
let openInputMobile = document.getElementById('open-input');
let mobileInput = document.getElementById('nav-mini');
let otherInput = document.getElementById('nav');
let closeInput = document.getElementById('close-mobile-search');
let vid = document.querySelector('.vid');
const progressBar = document.querySelectorAll(".progress-bar");
const progressContainer = document.querySelectorAll(".progress-container");








document.querySelectorAll('.vid').forEach((menu, index)=>{
  menu.addEventListener('timeupdate', (e)=>{
    const progressPercent = (menu.currentTime / menu.duration) * 100;
    let newProgressBar = e.target.parentElement.querySelector('.progress-bar');
    newProgressBar.style.width = `${progressPercent}%`;

    let tu = e.target.parentElement.children[1].children[1].children[0];
    
    tu.innerHTML = formatTime(menu.currentTime); 
    tu.offsetHeight;
    
    

  }
)
  menu.addEventListener('mouseover',(e)=>{
    // console.log(e.target.parentElement.querySelector('.video-container-additions'));
    let hoverEffected = e.target.parentElement.querySelector('.video-container-additions');
    // hoverEffected.classList.remove('video-container-additions');
    hoverEffected.classList.add('video-container-additions-non')
    
  });

  menu.addEventListener('mouseleave',(e)=>{
    // console.log(e.target.parentElement.querySelector('.video-container-additions'));
    let hoverEffected = e.target.parentElement.querySelector('.video-container-additions');
    hoverEffected.classList.remove('video-container-additions-non');
    hoverEffected.classList.add('video-container-additions')
    
  });

  function formatTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);
  
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

})



progressContainer.forEach((progressC, index)=>{
  progressC.addEventListener('click', (e) =>{
    const width = progressC.clientWidth;
    const clickX = e.offsetX;
    let videc = e.target.parentElement.parentElement.querySelector('.vid');
    console.log(videc);
    
    const duration = videc.duration;
    
    
    videc.currentTime = (clickX/width) * duration;
    

    
  })
})

document.querySelector('.fa-volume-xmark').addEventListener('click',(event) => {
  console.log(event.target.parentElement.parentElement.parentElement);
  let parent = event.target.parentElement.parentElement.parentElement;
  let child = parent.querySelector('.vid');
  console.log(child);
  child.muted = !child.muted;
  
  
})


openInputMobile.addEventListener('click', openMobileSearch);
closeInput.addEventListener('click', openMobileSearch);

function openMobileSearch(e){
  if (mobileInput.classList.contains('nav-mini-non')) {
    otherInput.style.display = 'none';
    mobileInput.classList.remove('nav-mini-non');
    mobileInput.classList.add('nav-mini');
  }else if (mobileInput.classList.contains('nav-mini')) {
    mobileInput.classList.remove('nav-mini');
    otherInput.style.display = '';
    mobileInput.classList.add('nav-mini-non');
  }

}

document.querySelectorAll('.vid').forEach((eachVid, index)=>{
  
  eachVid.addEventListener('click',()=>{
    eachVid.play();
  })
});
document.querySelectorAll('.vid').forEach((eachVid, index)=>{
  eachVid.addEventListener('mouseleave',()=>{
    eachVid.pause();
    eachVid.currentTime = 0;
  })
});
document.querySelectorAll('.fa-ellipsis-vertical').forEach((menu, index) => {
    menu.addEventListener('click', openActionBox);
})
document.addEventListener('click', closeActionBox);

function openActionBox(e){
    // console.log(e.target.closest);
    let parent = this.closest('.video-text');
    let child = parent.querySelector('.non-action-box, .action-box');

        if (child.classList.contains('non-action-box')) {
            child.classList.remove('non-action-box');
            child.classList.add('action-box');
        }else{
            child.classList.remove('action-box');
            child.classList.add('non-action-box');
        }
        

        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let rect = child.getBoundingClientRect();
        console.log(rect);
        console.log(viewportWidth);
        
        if (rect.right > viewportWidth) {
     
            child.style.right = `0rem`;
        } else {
     
        }

        
    
        e.stopPropagation();
    
}



function closeActionBox(event) {
  console.log('mine');
  
  // !actionBox.contains(event.target) && !clickedInsideMenu
  let clickedInsideMenu = Array.from(videoMenus).some(menu => menu.contains(event.target));
  document.querySelectorAll('.valid').forEach((actionBoxx, index)=>{
    if (!actionBoxx.contains(event.target) && !clickedInsideMenu) {
      actionBoxx.classList.remove('action-box');
      actionBoxx.classList.add('non-action-box');
    }
  })
}

function refreshPage(){
  setTimeout(function() {
    location.reload();
  }, 60000); 
}