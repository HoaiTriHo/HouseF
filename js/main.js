//Menu responsive
document.addEventListener('DOMContentLoaded', function(){
    var nut = document.querySelector('div#btn_menu button');
    var mang = document.querySelector('ul');

    nut.addEventListener('click', function(){
        mang.classList.toggle('header-nav__menu-list');
        mang.classList.toggle('active');
    });
//Text nhap nhay
var xemvideo = document.getElementById('xemvideo');
setInterval(()=>{
    if(xemvideo.style.color == 'red'){
        xemvideo.style.color = '#e66e24';
        xemvideo.style.fontSize='0.3em';
    }
    else{
        xemvideo.style.color = 'red';
        xemvideo.style.fontSize='0.4em';
    }
    },300);
});

  