// Your code goes here



///////////////// Nav Link Hovers //////////////////////////

let navs = document.querySelectorAll("a");
//console.log('index.js -> %cnavs:', 'color: blue', navs)

navs.forEach(link => link.addEventListener('mouseover', 
(e => 
   { e.target.style.background = 'darkgray',
    e.target.style.color = 'white'
})));
navs.forEach(link => link.addEventListener('mouseleave', 
(e => 
   { e.target.style.background = '',
    e.target.style.color = ''}

    )));


/////////////// Text Content Reading Highlights //////////////////

let textBox = document.querySelector('.content-section .text-content ')
let textGoBox = document.querySelector('.inverse-content .text-content ')
let textDestBox = document.querySelector('.content-destination p')
let allTb = document.querySelectorAll('p')
//console.log('index.js -> %callTb:', 'color: indigo', allTb)



  allTb.forEach(tb => tb.addEventListener('mouseenter', function(e){
    e.target.style.background='lightgray',
    e.target.style.color='blue',
    e.stopPropagation()
  }))
  
  allTb.forEach(tb =>tb.addEventListener('mouseleave', function(e){
    e.target.style.background='transparent',
    e.target.style.color='black',
    e.stopPropagation()
  }))

////////////////Prevent context menu (right-click menu) on images//////////////////////

let imgs = document.querySelectorAll("img")
//console.log('index.js -> %cimgs:', 'color: crimson', imgs)
imgs.forEach(img => img.addEventListener('contextmenu', (e => e.preventDefault())))

//////////////////// Title Animation - ready state change////////////////
let pgTitle = document.querySelector(".logo-heading")
console.log('index.js -> %cpgTitle:', 'color: maroon', pgTitle)


document.addEventListener('readystatechange', function(){
    TweenMax.to(pgTitle, 1, {fontSize: '2rem',  rotation:'360', color:'blue', scale: 2.5, margin: '3% 0 3% 0'});
  } )

  
  