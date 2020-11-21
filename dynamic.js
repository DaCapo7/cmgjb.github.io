
var image
var next
var slideshow
var filelist
var i
var mybutton
var avant


function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }



window.onload = function(){
    slideshow = document.getElementById("slideshow");
    next = document.getElementById("next");
    image = document.getElementById('slideimg')
    console.log(mybutton)
    mybutton = document.getElementById('next')
    console.log(mybutton)



    filelist = [
        'imgs/background.jpeg',       'imgs/background.png',
        'imgs/buche.jpg',             'imgs/cabaneautomne1.jpeg',
        'imgs/cabaneautomne2.jpeg',   'imgs/etagere1.jpeg',
        'imgs/foret1.jpeg',           'imgs/mur1.jpeg',
        'imgs/panneau.jpg',
        'imgs/piquenique1.jpeg',
        'imgs/piquenique2.jpeg',      'imgs/riviere1.jpeg',
        'imgs/riviere2.jpeg',         'imgs/riviereetsoleil3.jpeg',
        'imgs/riviereetsoleil4.jpeg', 'imgs/rivieretsoleil1.jpeg',
        'imgs/rivieretsoleil2.jpeg',  
        'imgs/tables.jpeg',           
                    
        'imgs/vueavecsoleil1.jpeg',   'imgs/vueensemble1.jpeg'
      ];
      filelist = filelist.sort(function(){ return Math.random() - 0.5});
      i=0;
      afterload()
    
}

function afterload(){
    mybutton.addEventListener("click", () => {
        
        image.setAttribute('src', filelist[i])
 
        i++
        i = i%20

});
}
