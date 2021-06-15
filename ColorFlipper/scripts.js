const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const background = document.querySelector('.container-app');
const randomBtn = document.querySelector('.random-hex-generator');
const colorResult = document.querySelector('.color-result');
const infoApp = document.querySelector('.info-app');

const randomHexCreating = () => {
  let hex = '#';
  for(let i = 0; i < 6; i++){    
    hex += hexDigits[randomDigitCreating()];
    console.log(hex)
  }
  hexColorPainting(hex);
  hexColorPrinting(hex);
  textPainting(hex);
}

const randomDigitCreating = () => {
  let digit = Math.floor(Math.random()*15);
  return digit;
}

const hexColorPainting = (hex) => {
  background.style.backgroundColor = hex;
}

const hexColorPrinting = (hex) => {
  colorResult.textContent = hex;
}

const textPainting = (hex) => {
  if((hex < "#E53935" && hex > '#FF8A80')||
     (hex < "#E91E63" && hex > '#FF80AB')||
     (hex < "#BA68C8" && hex > '#EA80FC')||
     (hex < "#9575CD" && hex > '#B388FF')||
     (hex < "#7986CB" && hex > '#8C9EFF')||
     (hex < "#1E88E5" && hex > '#82B1FF')||
     (hex < "#0288D1" && hex > '#80D8FF')||
     (hex < "#00838F" && hex > '#84FFFF')||
     (hex < "#00897B" && hex > '#A7FFEB')||
     (hex < "#388E3C" && hex > '#B9F6CA')||
     (hex < "#558B2F" && hex > '#CCFF90')||
     (hex < "#D84315" && hex > '#FF9E80')||
     (hex < "#A1887F")||
     (hex < "#9E9E9E")||
     (hex < "#607D8B")){
    infoApp.style.color = "#ffffff";
    infoApp.style.borderColor = "#ffffff";
    randomBtn.style.color = "#ffffff";
    randomBtn.style.borderColor = "#ffffff";
  }else{
    infoApp.style.color = "#1f1f1f";
    infoApp.style.borderColor = "#1f1f1f";
    randomBtn.style.color = "#1f1f1f";
    randomBtn.style.borderColor = "#1f1f1f";
  }
}

randomBtn.addEventListener('click', randomHexCreating);