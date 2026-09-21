const header = document.getElementById("header");
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const btnTopo = document.getElementById("btn-topo");
const linksMenu = menu.querySelectorAll("a");
const ano = document.getElementById("ano");


// ANO DO FOOTER

ano.textContent = new Date().getFullYear();


// HEADER AO ROLAR

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    if (window.scrollY > 500) {
        btnTopo.classList.add("visivel");
    } else {
        btnTopo.classList.remove("visivel");
    }
});


// MENU MOBILE

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    const menuAberto = menu.classList.contains("ativo");
    btnMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );
    btnMenu.textContent = menuAberto ? "×" : "☰";
});

// FECHAR MENU AO CLICAR EM LINK

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        btnMenu.setAttribute("aria-expanded", "false");
        btnMenu.textContent = "☰";
    });
});

// VOLTAR AO TOPO

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ANIMAÇÃO AO ENTRAR NA TELA

const elementosAnimados = document.querySelectorAll(
    ".projeto-card, .tecnologia, .sobre-destaques article, .processo article"
);
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementosAnimados.forEach(elemento => {
    elemento.classList.add("animar");
    observer.observe(elemento);
});
