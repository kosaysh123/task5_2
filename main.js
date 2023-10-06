let Serche=document.querySelector(".Serche");
let nav=document.querySelector("nav")
let carousel=document.querySelector(".carousel")


Serche.onclick=()=>{
    nav.style.display="none"
    let form=document.createElement("div")
    form.className="formTo"
    let input=document.createElement("input")
    input.className="serch-by";
    let X=document.createElement("button")
    let xText=document.createTextNode("X")
    X.appendChild(xText)
    X.className="xexit"
    X.style.cssText="display: flex;align-items: center;justify-content:center;";
    form.style.cssText=" height: 65px;width: 100%;display: flex;align-items: center;justify-content:center;background-color: #f8f9fa;";
    form.appendChild(input)
    form.appendChild(X)
    carousel.before(form)
    let xexit=document.querySelector(".xexit")
let forme=document.querySelector(".formTo")
xexit.onclick=(e)=>{
    forme.style.display="none";
    nav.style.display="block"
}
}

let a1=document.querySelector(".a1")
let a2=document.querySelector(".a2")
let a3=document.querySelector(".a3")
let a4=document.querySelector(".a4")

function clicka1() {
    if(window.innerWidth < 991){
           let POSS =document.querySelector(".POSS")
    let div=document.createElement("div");
    div.className="box1-1 text-left mx-auto";
    let buttom=document.createElement("buttom");
    buttom.className="btn1"
    let buttomtext=document.createTextNode("X")
    buttom.appendChild(buttomtext);
    let img=document.createElement("img");
    img.src="/assets/img/pp1.webp";
    img.className="imge1 mb-3"
    let h6 =document.createElement("h6")
    let texth6=document.createTextNode("SCORPION PROCESSOR")
    h6.appendChild(texth6);
    let p=document.createElement("p")
    let textp=document.createTextNode("Tristique senectus et netus et malesuada fames ac turpis.");
    p.appendChild(textp);
    div.appendChild(img)
    div.appendChild(h6)
    div.appendChild(p)
    div.appendChild(buttom)
    POSS.appendChild(div)
    buttom.onclick=()=>{
        div.remove();
    }
 
    }
}


function clicka2() {
    if(window.innerWidth < 991){
        let POSS =document.querySelector(".POSS")
        let div=document.createElement("div");
        div.className="box1-2 text-left mx-auto";
        let buttom=document.createElement("buttom");
        buttom.className="btn1"
        let buttomtext=document.createTextNode("X")
        buttom.appendChild(buttomtext);
        let img=document.createElement("img");
        img.src="/assets/img/pp2.webp";
        img.className="imge1 mb-3"
        let h6 =document.createElement("h6")
        let texth6=document.createTextNode("DUAL SIM CARDS")
        h6.appendChild(texth6);
        let p=document.createElement("p")
        let textp=document.createTextNode("Donec ultrices tincidunt arcu non sodales neque sodales ut.");
        p.appendChild(textp);
        div.appendChild(img)
        div.appendChild(h6)
        div.appendChild(p)
        div.appendChild(buttom)
        POSS.appendChild(div)
        buttom.onclick=()=>{
            div.remove();
    }

    }
}
function clicka3() {
    if(window.innerWidth < 991){
        let POSS =document.querySelector(".POSS")
        let div=document.createElement("div");
        div.className="box1-2 text-left mx-auto";
        let buttom=document.createElement("buttom");
        buttom.className="btn1"
        let buttomtext=document.createTextNode("X")
        buttom.appendChild(buttomtext);
        let img=document.createElement("img");
        img.src="/assets/img/pp3.webp";
        img.className="imge1 mb-3"
        let h6 =document.createElement("h6")
        let texth6=document.createTextNode("48 MP CAMERA")
        h6.appendChild(texth6);
        let p=document.createElement("p")
        let textp=document.createTextNode("Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.");
        p.appendChild(textp);
        div.appendChild(img)
        div.appendChild(h6)
        div.appendChild(p)
        div.appendChild(buttom)
        POSS.appendChild(div)
        buttom.onclick=()=>{
            div.remove();
    }

    }
}

function clicka4() {
    if(window.innerWidth < 991){
        let POSS =document.querySelector(".POSS")
        let div=document.createElement("div");
        div.className="box1-2 text-left mx-auto";
        let buttom=document.createElement("buttom");
        buttom.className="btn1"
        let buttomtext=document.createTextNode("X")
        buttom.appendChild(buttomtext);
        let img=document.createElement("img");
        img.src="/assets/img/pp4.png";
        img.className="imge1 mb-3"
        let h6 =document.createElement("h6")
        let texth6=document.createTextNode("48 HRS BACKUP")
        h6.appendChild(texth6);
        let p=document.createElement("p")
        let textp=document.createTextNode("Natoque penatibus et magnis dis parturient montes nascetur.");
        p.appendChild(textp);
        div.appendChild(img)
        div.appendChild(h6)
        div.appendChild(p)
        div.appendChild(buttom)
        POSS.appendChild(div)
        buttom.onclick=()=>{
            div.remove();
    }
 
    }
}


// Swiper
if(window.innerWidth < 500) {
    var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 30,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
}else{
if (window.innerWidth > 501 && window.innerWidth < 991) {
var swiper = new Swiper(".mySwiper", {
slidesPerView: 2,
spaceBetween: 30,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
}else{
  var swiper = new Swiper(".mySwiper", {
slidesPerView: 4,
spaceBetween: 30,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
}

}



const result = fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    displayData(result.products);
    // console.log(result.products)
  }); 
function displayData(arr) {
    let swiperWrapper=document.querySelector(".swiper-wrapper")
    let conuter=0;
    let limt=6
  arr.forEach(function (item){
    conuter++
    if (conuter <= limt) {
            swiperWrapper.innerHTML+=` 
    <div class="swiper-slide">
    <img src="${item.images[0]}" alt="" width="200px" height="200px">
    <div class="text"> 
      <h1>${item.title}</h1>
    <p class="gg">${item.description}</p>
    <button class="btn btn-outline-success mb-4">Add To Card</button>
    </div>

  </div>`
    }else{
        return
    }

  })};
// Swiper


// Start  Drop Down List

const resulte = fetch("https://restcountries.com/v3.1/all")
  .then(function (resulte) {
    return resulte.json();
  })
  .then(function (resulte) {
    let dropdownContent=document.querySelector(".dropdown-content")
    for (let i = 0; i < 50; i++) {
      dropdownContent.innerHTML+=`   <div class="flags-down">
       <h6>${resulte[i].altSpellings[0]}</h6>
       <img src="${resulte[i].flags.svg}" alt="" width="20px" height="20px">
       </div>`
    }       
    dropbtn.innerHTML+=`<div class="flags-down">
    <h6>${resulte[0].altSpellings[0]}</h6>
    <img src="${resulte[0].flags.svg}" alt="" width="20px" height="20px">
    </div>`
  }); 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  let dropbtn=document.querySelector(".dropbtn") 
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        let cont=event.target.cloneNode(true);
        dropbtn.innerHTML=""
        dropbtn.appendChild(cont)
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// End Drop Down List