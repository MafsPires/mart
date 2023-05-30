
var x = document.getElementById("texto");
var y =document.getElementById("avatar");
var z =document.getElementById("bubble");
var w = document.getElementById("fechar");
var t = document.getElementsByClassName("titulo");
var tamanho = window.matchMedia("(max-width:700px)")
       
function myFunction() { 
 x.style.display = "block"; // aparece texto
 y.style.display = "none"; // desaparece texto
 
    if (tamanho.matches) { // se tamanho.matches
        t[0].style.transform = "translateY(-120px)" // mover titulo 
         z.style.display = "none" 
         }   }

 function myFunction1() {
    x.style.display = "none";
    y.style.display = "block";

           if(tamanho.matches) {
            t[0].style.transform = "translateY(0px)"
           } 
         }
        




z.style.display = "none"

document.getElementById("avatar").onmouseover = function() {mouseOver()};
document.getElementById("avatar").onmouseout = function() {mouseOut()};

function mouseOver() {
    z.style.display = "block";}

function mouseOut() {
    z.style.display = "none";}


    document.getElementById("fechar").onmouseover = function() {mouseOver1()};
    document.getElementById("fechar").onmouseout = function() {mouseOut1()};
    
function mouseOver1() {
        w.style.color = "#007199";
        }
    
function mouseOut1() {
        w.style.color = "#DE8200";}
    
    
    







        


    
