document.addEventListener("DOMContentLoaded",function(){
    //khai bao phan tu cho nut Home
    var home = document.querySelector('.bntHome'),
        holder = document.querySelector('.menuTop');
    
        //xu ly cho nut Home
    home.addEventListener('click',function(){
        holder.classList.toggle('toggle');
    })

    //xu ly cuon chuot
    //khai bao phan tu cho cac phan trong content
    var profile = document.getElementById('profile'),
        resume = document.getElementById('resume'),
        porfolio = document.getElementById('porfolio'),
        vtprofile = profile.offsetTop,
        vtresume = resume.offsetTop,
        vtporfolio = porfolio.offsetTop;
        

    //khai bao phan tu cho cac phan trong menu
    var 
    current = document.querySelector('.current h3');
        listMenu = document.querySelectorAll('.menu ul li a');
        console.log(listMenu);
    var trangthai = 'duoi';
    window.addEventListener('scroll',function(){
        //xu ly cuon chuot profile
        if (window.pageYOffset < vtresume){
            
            listMenu[1].classList.remove('hl');
            listMenu[2].classList.remove('hl');
            listMenu[0].classList.add('hl');
            current.innerHTML = 'プロフィール';
            
        }
        else if ((window.pageYOffset >= vtresume) && (window.pageYOffset < vtporfolio)) {
            listMenu[0].classList.remove('hl');
            listMenu[2].classList.remove('hl');
            listMenu[1].classList.add('hl');
            current.innerHTML = 'レジュメ';

        }
        else{
            listMenu[0].classList.remove('hl');
            listMenu[1].classList.remove('hl');
            listMenu[2].classList.add('hl');
            current.innerHTML = 'ポートフォリオ';
        }
    })
    //xu ly click chuot cho nut phan porfolio
    //khai bao phan tu
    var nutPo = document.querySelector('.buttonList'),
        nhomBntLst = document.querySelector('.bntList');
        nutPo.addEventListener('click',function(){
            nhomBntLst.classList.toggle('toggleNho');
        })

    //filter phan portfolio
    var sortBnt = document.querySelector('.filter-MenuPo').children;
    var sortItem = document.querySelector('.filter-ItemPo').children;
        
    for(var i = 0; i < sortBnt.length; i++){
        sortBnt[i].addEventListener('click', function(){
            for(var j = 0; j < sortBnt.length; j++){
                sortBnt[j].classList.remove('now');
            }
            this.classList.add('now');

            var targetData = this.getAttribute('data-target');
            
            for(var k = 0; k < sortItem.length; k++){
                sortItem[k].classList.remove('active');
                sortItem[k].classList.add('delete');

                if(sortItem[k].getAttribute('data-item') == targetData || targetData == 'all'){
                    sortItem[k].classList.remove('delete');
                    sortItem[k].classList.add('active');
                }
            }
        })
    }

     
        

    



    
    








})
