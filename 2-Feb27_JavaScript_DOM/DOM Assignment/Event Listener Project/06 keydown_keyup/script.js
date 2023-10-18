

// This function will change the font size and color when you presses the key 
let a = document.body.firstElementChild.lastElementChild
a.addEventListener('keydown', () => {
  a.style.color = "red";
  a.style.fontSize = "100px"
})

// This function will make lower case to uppercase when you release the key
a.addEventListener('keyup', () => {

  a.value = a.value.toUpperCase();
})