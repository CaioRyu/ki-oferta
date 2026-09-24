
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
                    <button id="btn-busca-produtos" class="btn-produtos" type="submit">Buscar</button>
                </form>
            </header>

            <div class="mercados-produtos">
                <p class="descricao-mercado-produtos">3 produtos - 2 mercados</p>
            </div>
            ${
               listaDeProdutos.map(item=> `
                <div class="item-produtos">
                    <div class="descricao-produto">
                        <div class="imagem-produto">
                            <img class="imagem-produto" src="./assets/icon/favicon.ico" />
                        </div>
                        <div class="detalhes-produto">
                        <p class="nome-produto"> ${item.nome} </p>
                        <p class="distancia-produto"> Distância: ${item.distancia} m </p>
                        </div>
                    </div>
                    <div class="preco-produto-div">
                        <p class="preco-produto">R$${item.preco.toFixed(2)} </p>
                    </div>
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