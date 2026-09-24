
const listaDeProdutos = [
    {
     nome: "café", preco: 12.50, distancia: 600
    },
    {
     nome: "café", preco: 9.50, distancia: 2000
    },
    {
     nome: "café", preco: 16.50, distancia: 200
    }
]
function produtos(app) {
    app.innerHTML = `
    <div class="container-produtos">
        <div class="card-produtos">
            <header class="header-produtos">
                <form class="form-busca-produtos" id="form-busca-produtos">
                    <input
                        id="input-busca-produtos"
                        type="search"
                        class="input-busca-produtos"
                        placeholder="Digite um produto..."
                        aria-label="Buscar produto"
                    />
                    <button id="btn-busca" class="btn" type="submit">Buscar</button>
                </form>
            </header>
            ${
               listaDeProdutos.map(item=> `
                <div class="item-produtos"> 
                    Nome: ${item.nome} Preço:${item.preco } Distância:${item.distancia}
                </div> ` ).join('<br>')
            }
        </div>
    </div>`
    window.location.hash = "#produtos"
}

export default { 
    url: "#produtos",
    label: "",
    icon: "shopping-basket",
    pagina: produtos
 };