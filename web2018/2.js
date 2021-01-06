document.addEventListener("DOMContentLoaded",function(){
    var hinh = document.querySelectorAll('.picture-cell img');
    var mau = document.querySelector('.modal');
    var hinhmau = document.querySelector('.modalImg');
    var dong = document.querySelector('.close');
    
    hinh.forEach((image) => {
        image.addEventListener('click', ()=> {
            hinhmau.src = image.src;
            mau.classList.add('appear');
            dong.addEventListener('click', () =>{
                mau.classList.remove('appear');
            })
        })
    })





})