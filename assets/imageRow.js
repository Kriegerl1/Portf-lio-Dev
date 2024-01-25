document.addEventListener('DOMContentLoaded', function () {
    // Coloque o código de imageRow.js aqui
    const controls = document.querySelectorAll('.control');
    let itemAtual = 0;
const items = document.querySelectorAll('.imagem');
const maxItems = items.length;


controls.forEach(control => {
    control.addEventListener('click', () => {
        const toLeft = control.classList.contains('arrow-left');

        if (toLeft){
            itemAtual -= 1;
        }else{
            itemAtual += 1;
        }
        
        if(itemAtual >= maxItems){
            itemAtual = 0;
        }
        
        if(itemAtual < 0){
            itemAtual = maxItems - 1;
        }
        console.log("control", toLeft, itemAtual);
        
        items.forEach(item =>
            item.classList.remove('imagem-atual'));
            items[itemAtual].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            })
            items[itemAtual].classList.add('imagem-atual')
        })
    });
});


