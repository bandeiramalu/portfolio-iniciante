const botaoTema = document.getElementById("btn-tema");

function alternarTema() {
  document.body.classList.toggle("escuro");
}

botaoTema.addEventListener("click", alternarTema);

const trilho = document.getElementById("trilho-projetos");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");

function rolarDireita() {
  trilho.scrollBy({ left: 700, behavior: "smooth" });
}

function rolarEsquerda() {
  trilho.scrollBy({ left: -700, behavior: "smooth" });
}

btnProximo.addEventListener("click", rolarDireita);
btnAnterior.addEventListener("click", rolarEsquerda);

function animarBarras() {
  document.querySelectorAll(".nivel").forEach((barra) => {
    barra.style.width = barra.dataset.nivel + "%";
  });
}

const secaoSkills = document.getElementById("skills");

const observadorSkills = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        animarBarras();
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.25 }
);

observadorSkills.observe(secaoSkills);

const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const retornoFormulario = document.getElementById("retorno-formulario");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const mensagem = campoMensagem.value.trim();

  if (!nome || !email || !mensagem) {
    retornoFormulario.textContent =
      "Preencha todos os campos antes de enviar.";
    return;
  }


  retornoFormulario.textContent =
    `Obrigado, ${nome}! Sua mensagem foi registrada nesta demonstração.`;

  formulario.reset();
});