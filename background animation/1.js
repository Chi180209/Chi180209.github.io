document.addEventListener("DOMContentLoaded",function(){
    const banner = document.getElementsByClassName('banner')[0];
    const blocks = document.getElementsByClassName('blocks');
    for (var i = 0; i < 4; i++){
        banner.innerHTML += "<div class='blocks'></div>";
    }
    
})