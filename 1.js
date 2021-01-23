document.addEventListener("DOMContentLoaded",function(){
    

    // //xu ly load cac phan tu trong trang
    let itemrow = document.querySelectorAll('.row');
    window.addEventListener('scroll', scanItem);

    function scanItem (){
        itemrow.forEach(item => {
            if(isVisible(item)){
                item.classList.add('hienlen');
            }else{
                item.classList.remove('hienlen');
            }
        })
    }

    function isVisible (item){
        const elementRow = item.getBoundingClientRect();
        let distancefromTop = -100;
        return elementRow.top - window.innerHeight < distancefromTop ? true : false;
    }

    // xu ly scrollspy
    const spyScrolling = () => {
        const sections = document.querySelectorAll('section');
        // console.log(sections);
        window.onscroll = () =>{
            const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollPosition);
            for (let s in sections){
                if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition){
                    const id = sections[s].id;
                    // console.log(id);
                    document.querySelector('.hl')
                    .classList.remove('hl');

                    document.querySelector( `a[href*=${ id }]` ).classList.add('hl');
                    
                    // console.log(sections[s].offsetTop);
                    document.querySelector('.hienchu').classList.remove('hienchu');
                    document.querySelector(`[class*=${ id }]`).classList.add('hienchu');
                }
            }
        }
    }
    //ham goi cho scrollspy
    spyScrolling();
    
    //khai bao phan tu cho nut Home
    var home = document.querySelector('.bntHome'),
        holder = document.querySelector('.menuTop'),
        current = document.querySelector('.current');
    
        //xu ly cho nut Home
    home.addEventListener('click',function(){
        holder.classList.toggle('toggle');
        current.classList.toggle('an');
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
