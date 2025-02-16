let actionBox = document.getElementById('action-box');
let videoMenus = document.querySelectorAll('.fa-ellipsis-vertical');
let openInputMobile = document.getElementById('open-input');
let mobileInput = document.getElementById('nav-mini');
let otherInput = document.getElementById('nav');
let closeInput = document.getElementById('close-mobile-search');

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

// function closeMobilesearch(){

// }

document.querySelectorAll('.fa-ellipsis-vertical').forEach((menu, index) => {
    menu.addEventListener('click', openActionBox)
})



document.addEventListener('click', closeActionBox);

function openActionBox(e){
    console.log(e.target.closest);
    let parent = this.closest('.video-text');
    let child = parent.querySelector('.non-action-box, .action-box');

        if (child.classList.contains('non-action-box')) {
            child.classList.remove('non-action-box');
            child.classList.add('action-box');
            // child.classList.add('action-box-end');
            // child.style.right = `0rem`;
        // }else if (child.classList.contains('non-action-box') && rect.right < viewportWidth) {
        //     child.classList.remove('non-action-box');
        //     child.classList.remove('action-box-end');
        //     child.classList.add('action-box');
        }else{
            child.classList.remove('action-box');
            // child.classList.remove('action-box-end');
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