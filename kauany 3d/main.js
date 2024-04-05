const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
.contador{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.contador-digito{
  padding: 0 16px;
  text-align: center;
  min-width: 100px;
}
.contador-digito-número{
  font-size: 80px;
  margin: 0;
}
.contador-digito-texto{
  color: var(--verde);
  font-size: 20px;
  margin: 0;
}

