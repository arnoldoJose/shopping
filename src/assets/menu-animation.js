export const closeMenu = (e,menu) => {
    if(!e.target.checked){
      menu.current.classList.add('close-menu');
    //   return;  
    }

    setTimeout(() => {
        menu.current.classList.remove('close-menu')
    },200);
}