const div = document.querySelector("#typing");
const text = "<Olá Mundo!/>";
const interval = 100;

function escrever (div, text, interval){

    const char = text.split("").reverse();

    const typer = setInterval(() =>{

        if (!char.length) {

            return clearInterval(typer);
        }

        const  next = char.pop()

    div.innerHTML += next;
    }, interval)
}

escrever (div, text, interval);

// Acima código que cria o efeito escrita com a frase "<Olá Mundo!/>" editável.


const btnAnima = document.querySelector('#getTop');
const Anchor = document.querySelector('#about-me');
const AnchorEnd = document.querySelector('.footer')
const screenView = window.innerHeight;


function goTop() {
    const topoItem = Anchor.getBoundingClientRect().top;
    const fimPagina = AnchorEnd.getBoundingClientRect().top;
    const End = fimPagina - screenView <= 5;
    const visibleItem = topoItem - screenView < -800;
    // console.log(topoItem)

    if (visibleItem) {
        btnAnima.classList.add('show');
    } else{
        btnAnima.classList.remove('show')
    } if (End) {
        btnAnima.classList.remove('show')
    }
}
window.addEventListener('scroll', goTop);

// Acima botão icone com efeito de scroll top.

function fade() {
    var uiFade = document.querySelectorAll('.fade');

    for (var i = 0; i < uiFade.length; i++) {
        var userView = window.innerHeight;
        var userUiView = uiFade[i].getBoundingClientRect().top;
        var uiFadeCounter = 20;

        if (userUiView < userView - uiFadeCounter) {
            uiFade[i].classList.add('active');
        }
    }
}


function pageLoad() {
    fade();
    window.addEventListener('scroll', fade);
}
window.addEventListener('load', pageLoad);

// Acima efeito de slide fade nos textos da página.

var R, G, B;

var salvar = function(){
    R = parseInt(document.getElementById('R').value)
    G = parseInt(document.getElementById('G').value)
    B = parseInt(document.getElementById('B').value)
}

var webColor = function(){
    document.body.style.setProperty('--set-web-color', 'rgb(' + R + ',' + G + ',' + B + ')')
    document.body.style.setProperty('--set-web-bg-color', 'linear-gradient(90deg, rgb(51, 51, 51) 30%, rgb('+R+','+G+','+B+'))')
    document.body.style.setProperty('--set-grad-left-color', 'linear-gradient(90deg, rgb(51, 51, 51) 40%, rgb('+R+','+G+','+B+'))')
    document.body.style.setProperty('--set-grad-right-color', 'linear-gradient(-90deg, rgb(51, 51, 51) 40%, rgb('+R+','+G+','+B+'))')
    document.body.style.setProperty('--shadow-border', '.3rem 1rem 1rem rgb('+R+','+G+','+B+')')

}
var time = setInterval(salvar, 10)
var time = setInterval(webColor, 10)


// Acima código responsável pela função de modificação de cores da página.


function menuShow() {
    let wrapper = document.querySelector('.r-menu-content');
    if(wrapper.classList.contains('open')) {
        wrapper.classList.remove('open');
        document.querySelector('ion-icon').name = "menu-outline";
    }else{
        wrapper.classList.add('open');
        document.querySelector('ion-icon').name = "close-outline";
    }
};

function chatShow() {
    let wrapper = document.querySelector('.chat_box');
    if(wrapper.classList.contains('hide_chat_box')) {
        wrapper.classList.remove('hide_chat_box');
        document.querySelector('.btn_chat_icon ion-icon').name = "close-outline";
    }else{
        wrapper.classList.add('hide_chat_box');
        document.querySelector('.btn_chat_icon ion-icon').name = "chatbubble-ellipses";
    }
};

function cardClose() {
    let wrapper = document.querySelector('.chat_box');
    if(wrapper.classList.contains('hide_chat_box')) {
        wrapper.classList.remove('hide_chat_box');
        document.querySelector('.btn_chat_icon ion-icon').name = "close-outline";
    }else{
        wrapper.classList.add('hide_chat_box');
        document.querySelector('.btn_chat_icon ion-icon').name = "chatbubble-ellipses";
    }
};

function scrollClose(){
    
    let wrapper = document.querySelector('.chat_box');
        wrapper.classList.add('hide_chat_box');
        document.querySelector('.btn_chat_icon ion-icon').name = "chatbubble-ellipses";
    }
window.addEventListener('scroll',scrollClose)

function closeBtn() {
    let wrapper = document.querySelector('.fullscreen');
    if (wrapper.classList.contains('hide')) {
        wrapper.classList.remove('hide');
    } else {
        wrapper.classList.add('hide');
    }
}

// Acima código que monitora os botões de close da página.

let audio = document.getElementById("control-sound");
audio.volume = 0.1;

function enableMute() {
    if (audio.muted) {

        document.querySelector('.mute ion-icon').name = "pause-outline";
    } else{
        document.querySelector('.mute ion-icon').name = "play-outline";
    }
    audio.muted = !audio.muted; // Inverte o valor de muted
}
function plussound() {
    audio.volume += 0.1;
    }
function lesssound() {
    audio.volume -= 0.1;
    }




// Acima controlador de música ambiente
