const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// ===================================================================Prodetail

var mainimgs= document.getElementById("mainimg");
var smallimg= document.getElementsByClassName("small-img");




// --------------------------------------------Search

let availablekeywords = [
    'iQOO Z7 Pro 5G',
    'One Plus Nord CE 3 Lite',
    'Realme Narzo 60 5G',
    'Redmi Note 12 5G',
    'Redmi Note 12 por 5G',
    'Redmi Note 13 5G',
    'Redmi 13C',
    'Samsung Galaxy M13',
];

const searchresults = document.querySelector(".searchresult");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result =[];
    let input = inputbox.value;
    if(input.length){
        result= availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        inputbox.innerHTML='';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+ list + "</li>";
    });

    searchresults.innerHTML = "<ul>"+ content.join('') + "</ul>";
}

function selectInput(list){
    inputbox.value = list.innerHTML;
    inputbox.innerHTML='';
}