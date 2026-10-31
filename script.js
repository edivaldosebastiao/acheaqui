
/* ================================
   MENU MOBILE
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );
});

navItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

/* Fechar menu ao clicar fora */

document.addEventListener("click", event => {
    if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

/* ================================
   CABEÇALHO AO ROLAR
================================ */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ================================
   ANIMAÇÃO DOS ELEMENTOS
================================ */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

/* ================================
   DESTAQUE DO MENU
================================ */

const sections = document.querySelectorAll(
    "main section[id]"
);

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.id;

                navItems.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${currentId}`
                    );
                });
            }
        });
    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});

/* ================================
   BOTÃO VOLTAR AO TOPO
================================ */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ================================
   ANO AUTOMÁTICO NO RODAPÉ
================================ */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

/* ================================
   VÍDEO DEMONSTRATIVO
================================ */

const demoVideo = document.getElementById("demoVideo");

if (demoVideo) {
    demoVideo.addEventListener("error", () => {
        console.error(
            "Não foi possível carregar o vídeo AcheAqui. Confira o caminho do arquivo."
        );
    });
}

/* ================================
   VERIFICAÇÃO DO DOWNLOAD
================================ */

const downloadButton = document.querySelector(".btn-download");

if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        console.log("Download do AcheAqui solicitado.");
    });
}

/* ================================
   ANIMAÇÃO SUAVE DOS LINKS
================================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
