import produtos from '../dadosMockados/dados.js'
function buscar(app){
    app.innerHTML = `
        <section class="container-buscar">
        <h4 class="titulo-pagina">Radar de Promoções</h4>
        <h2 class="subtitulo-buscar">O que você quer comprar mais barato?</h2>
      
        <form class="form-busca" id="form-busca">
          <input
            id="input-busca"
            type="search"
            class="input-busca"
            placeholder="Digite um produto..."
            aria-label="Buscar produto"
          />
          <button id="btn-busca" class="btn" type="submit">Buscar</button>
        </form>
        
        
        <div class="div-central">
          <p class="busca-atencao">Ofertas de 10 a 16 de agosto, enviado por quem está no mercado.</p>
        </div>
        
        <div class="div-central">
          <h6 class="subtitulo">
            Categorias
          </h6>
        </div>
      
        <div class="categorias-busca" id="categorias-busca">
            <div class="categoria" data-categoria="bebidas">
            <span>Bebidas</span>
            </div>
            <div class="categoria" data-categoria="alimentos">
              <span>Alimentos</span>
            </div>
            <div class="categoria" data-categoria="higiene">
              <span>Higiene</span>
            </div>
            <div class="categoria" data-categoria="limpeza">
              <span>Limpeza</span>
            </div>        
        </div>

      </section>

    `
    adicionarEvento(app)
}

function adicionarEvento(app){
    const botaoBusca = document.getElementById("btn-busca")
    const listaCategoria = document.querySelectorAll(".lista-categoria")
    botaoBusca.addEventListener("click",()=>{
       produtos.pagina(app)
    })

    listaCategoria.forEach(item => item.addEventListener("click", ()=>{
        produtos.pagina(app)
    }))
}

export default {
    url: "#buscar",
    label: "buscar",
    icon: "search",
    pagina: buscar
}