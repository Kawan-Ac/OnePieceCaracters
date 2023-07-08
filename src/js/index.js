const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        const idSelecionado = personagem.attributes.id.value;
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagem.classList.add("selecionado");

        const imagemPersonagemMaior = document.querySelector('.personagem-Grande');
        imagemPersonagemMaior.src = `./src/image/card-${idSelecionado}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        const nomeSelecionado = personagem.getAttribute('data-name');
        const descricaoPersonagemSelecionado = personagem.getAttribute('data-description');

        nomePersonagem.innerHTML = nomeSelecionado;
        descricaoPersonagem.innerHTML = descricaoPersonagemSelecionado

    });
});