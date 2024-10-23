const colorList=['red','green','yellow','pink','rose','grey','brown','crimson','skyblue','blue']

document.querySelector('.js-btn').addEventListener('click',()=>changeColor())

function changeColor(){
  let newColor= colorList[Math.floor(Math.random()*colorList.length)];
  document.querySelector(".content-body").style.backgroundColor= newColor
  document.querySelector('.js-colorName').textContent= 'Background color : '+window.getComputedStyle(document.querySelector('.content-body')).backgroundColor;
}

window.addEventListener('load',(event)=>{
  if (event.target.readyState==='complete'){
    document.querySelector('.js-colorName').textContent= 'Background color : '+window.getComputedStyle(document.querySelector('.content-body')).backgroundColor;
  }
})

let myPromise = new Promise((res, x) => {
  // asynchronous operation
  let success = true; // Example condition
  
  if (success) {
    res('Operation successful!');
  } else {
    x('Operation failed.');
  }
});
console.log(myPromise)