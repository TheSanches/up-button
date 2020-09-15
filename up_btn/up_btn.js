'use strict';

// ===============================================
// up button
// ===============================================
  function up(set){
    const upBtn = document.createElement('div'),
          upBtnImg = document.createElement('img');

    upBtn.classList.add('up-btn', 'up-btn__hide');
    upBtnImg.classList.add('up-btn__img');

    function showBtn(num){
      if(document.documentElement.scrollTop >= num){    
        upBtn.classList.remove('up-btn__hide');
      } else {
        upBtn.classList.add('up-btn__hide');
      }
    }

    if(set){

      if(set.src){
        upBtnImg.src = set.src;
      } else {
        upBtnImg.src = 'chevron-up-solid.svg';
      }
  
      upBtn.style.top = set.top;
      upBtn.style.bottom = set.bottom;
      upBtn.style.left = set.left;
      upBtn.style.right = set.right;
      upBtn.style.background = set.bg;
      upBtn.style.width = set.width;
      upBtn.style.height = set.height;
  
      if(set.circle){
        upBtn.classList.add('up-btn_circle');
      }
  
      document.body.append(upBtn);
      upBtn.append(upBtnImg);


      if(set.whenShow){
        window.addEventListener('scroll', () => {
          showBtn(set.whenShow);
        });
      } else {
        window.addEventListener('scroll', () => {
          showBtn(400);
        });
      }
            
    } else{
      upBtnImg.src = '../img/chevron-up-solid.svg';
      document.body.append(upBtn);
      upBtn.append(upBtnImg);

      window.addEventListener('scroll', () => {
        showBtn(400);
      });
    }

    upBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

  }