//db is global variable (window.db) defined in menu.html within an inline module script
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');
  
  const btnProperties = {
    colors: ['rgb(0, 128, 0)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)'],
    locations: ['', '../playerProfileSelector/profiles.html', '../ProfileViewer/editor.html']
  };
  buttons.forEach((button, index) => {
    
    button.style.backgroundColor = btnProperties.colors[index];
    let btnColor = btnProperties.colors[index];
    
    button.addEventListener('click', () => {
      if (btnProperties.locations[index]) {
        window.location.href = btnProperties.locations[index];
        mod.sessionStore('pageTransferData', 'switchPage', index);
      }
    });
    
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = mod.colorMix(btnColor, 'rgb(255, 255, 255)50%');
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = btnColor;
    });
  });
  
  function resizeElements() {
    const padding = 50;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    if (buttons.length > 0) {
      let total = 0;
      for (let i = 0; i < buttons.length; i++) {
        total += buttons[i].getBoundingClientRect().width + padding;
      }
      total /= 2;
      for (let e = 0; e < buttons.length; e++) {
        buttons[e].style.left = `${(winWidth / 2) - total}px`;
        total -= buttons[e].getBoundingClientRect().width + padding;
      }
    }
  }
  
  window.addEventListener('resize', resizeElements);
  
  //Inialize parameters and setup functions
  resizeElements();
});

// hex raises the color value in order of 0,1,2,3... then a,b,c... to f ff = 255