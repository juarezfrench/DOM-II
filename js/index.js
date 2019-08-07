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


let allTb = document.querySelectorAll('p')


  allTb.forEach(tb => tb.addEventListener('mouseenter', function(e){
    e.target.style.background='lightgray',
    e.target.style.color='blue'
   
  }))
  
  allTb.forEach(tb =>tb.addEventListener('mouseout', function(e){
    e.target.style.background='transparent',
    e.target.style.color='black'
    
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

    ////////////////////dblclick and auxclick ////////////////////// 
  //////////////////////////////////// light & dark /////////////////////


let doc =document.querySelector("body")
let headerBox = document.querySelector("header")


document.addEventListener("dblclick", function() {
    
    darkStyle();
  });
  
 document.addEventListener("auxclick", function(e) {
    
    lightStyle();
    e.preventDefault()
  });
  

  
  function darkStyle() {
    doc.style.background = "darkslategray";
    headerBox.style.background = "darkslategray";
    doc.style.color = "white";
    pgTitle.style.color = "white";
    navs.forEach(link => link.style.color = "white");
  }
  
  function lightStyle() {
    doc.style.background = "";
    headerBox.style.background = "";
    doc.style.color = "";
    pgTitle.style.color = "";
    navs.forEach(link => link.style.color = "");
  }
  

///////////////////// key down & key up//////////////

  document.addEventListener("keydown", function(e) {
    
    wacky();
  
  });
  
  
  
  function wacky()  {
    

  let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
  
    }


    document.addEventListener("keyup", function(e) {
    
        lightStyle();
      
      });






    doc.addEventListener("resize", function() {
    
        doc.style.background = 'red'
      });