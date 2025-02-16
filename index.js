let actionBox = document.getElementById('action-box');
let videoMenus = document.querySelectorAll('.fa-ellipsis-vertical');
let openInputMobile = document.getElementById('open-input');
let mobileInput = document.getElementById('nav-mini');
let otherInput = document.getElementById('nav');
let closeInput = document.getElementById('close-mobile-search');
let vid = document.querySelector('.vid');
const progressBar = document.querySelectorAll(".progress-bar");
const progressContainer = document.querySelectorAll(".progress-container");
// console.log(vid);

// Update Progress Bar
// vid.addEventListener("timeupdate", () => {
//   const progressPercent = (vid.currentTime / vid.duration) * 100;
//   progressBar.style.width = `${progressPercent}%`;
// });

document.querySelectorAll('.vid').forEach((menu, index)=>{
  menu.addEventListener('timeupdate', (e)=>{
    const progressPercent = (menu.currentTime / menu.duration) * 100;
    let newProgressBar = e.target.parentElement.querySelector('.progress-bar');
    newProgressBar.style.width = `${progressPercent}%`;
    // let timing = e.target.parentElement.querySelector('.video-container-additions').querySelector('.vid-two-group').querySelector('.video-time');
    // console.log(timing);
    let tu = e.target.parentElement.children[1].children[1].children[0];
    
    // console.log(e.target.parentElement.children[1].children[1].children[0]);
    
    // tu.textcontent = formatTime(menu.currentTime);
    tu.innerHTML = formatTime(menu.currentTime); // Instead of textContent
    tu.offsetHeight;
    
    

  })
  
  function formatTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = Math.floor(seconds % 60);
  
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
  // progressBar.forEach((progressB,index)=>{
  //   progressB.style.width = `${progressPercent}%`;
  // })
  // progressBar.style.width = `${progressPercent}%`;
})


// Seek Video on Click
// progressContainer.addEventListener("click", (e) => {
//   const width = progressContainer.clientWidth;
//   const clickX = e.offsetX;
//   const duration = vid.duration;
  
//   vid.currentTime = (clickX / width) * duration;
// });
progressContainer.forEach((progressC, index)=>{
  progressC.addEventListener('click', (e) =>{
    const width = progressC.clientWidth;
    const clickX = e.offsetX;
    let videc = e.target.parentElement.parentElement.querySelector('.vid');
    console.log(videc);
    
    const duration = videc.duration;
    
    
    videc.currentTime = (clickX/width) * duration;
    
    // vid.forEach((vidy)=>{
    //   const duration = vidy.duration;
    // })
    
  })
})

document.querySelector('.fa-volume-xmark').addEventListener('click',(event) => {
  console.log(event.target.parentElement.parentElement.parentElement);
  let parent = event.target.parentElement.parentElement.parentElement;
  let child = parent.querySelector('.vid');
  console.log(child);
  child.muted = !child.muted;
  
  
})
// document.querySelectorAll('.fa-volume-xmark').forEach((mute, index) =>{
//   mute.addEventListener('click', (event) =>{
//     let parent = event.target.closest('.vid');
//     console.log(event);
//     // let cont = parent.document.querySelector('.vid')
    
//     console.log(parent);
    
//    cont.muted = !cont.muted;
//   }

    
//     // vid.muted = !vid.muted;
//     // muteBtn.classList.toggle("fa-volume-mute", !vid.muted);
//     // muteBtn.classList.toggle("fa-volume-up", vid.muted);
//   )
// })

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
// document.getElementById('vide').addEventListener('click',(e)=>{
//   console.log('mouse');
//   console.log(e.target);
  
//   vid.play();
  
// })
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
    console.log(e.target.closest);
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
    let clickedInsideMenu = Array.from(videoMenus).some(menu => menu.contains(event.target));
    if (!actionBox.contains(event.target) && !clickedInsideMenu) {
        actionBox.classList.remove('action-box');
        actionBox.classList.add('non-action-box');
        // child.style.left = '';
        // child.style.right = '';
    }
}

function refreshPage(){
  setTimeout(function() {
    location.reload();
  }, 60000); // Refresh the page after 5 seconds
}
// refreshPage()

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YAIzaSyDnljhbOU0vrE3g-hVpGLeaZE7LNo4Qgjo");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet,contentDetails,statistics"
      ],
      "chart": "mostPopular",
      "regionCode": "US"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "725810913778-jpqlsiqab0iqgoc48ncroin0sh9ukp4m.apps.googleusercontent.com"});
  });