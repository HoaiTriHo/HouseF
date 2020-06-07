//xu ly khi nhan vao user thif se dropdow
var bt = document.getElementsByClassName('header__wrap__right__drop__user'),
stic = document.getElementById('sticker'),
drop = document.getElementsByClassName('header__wrap__right__drop__dow');
    bt[0].onclick=function(){
        if(stic.style.display === 'none' && drop[0].style.display === 'none'){
            stic.style.display='block';
            drop[0].style.display='block';
        }
        else{
            stic.style.display='none';
            drop[0].style.display='none';
        }
        };
   