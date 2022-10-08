export const closeMenu = (e,menu,closeMen,openMen) => {
    if(!e.target.checked){
      menu.current.classList.add('close-menu');
      closeMen.current.style.display = 'none';
      openMen.current.style.display = 'block'
      //   return;  
    }else{
      openMen.current.style.display = 'none'
      closeMen.current.style.display = 'block';
    }

    setTimeout(() => {
        menu.current.classList.remove('close-menu')
    },200);
}