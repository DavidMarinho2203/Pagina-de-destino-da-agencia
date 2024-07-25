// obtendo o elemento para acionar o menu
const hambuguer = document.getElementById("hambuguer");

// obtendo o elemento do menu
const menu = document.getElementById("menu");

// acionando o menu
hambuguer.addEventListener("click", () => {
    
    if(menu.style.display == "flex"){
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }
})
// evento para quando a janela for redimensionada (aumentar ou diminuir) o tamanho do menu
window.addEventListener('resize', () => { //
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});


const links = document.querySelectorAll('a')
links.forEach(elemento => {
    elemento.addEventListener("click", (e) => {
        e.preventDefault()
        alert("Obrigado por interagir na nossa página")
    })
})
