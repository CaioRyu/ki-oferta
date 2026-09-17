
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
    <div>
    <h1>Página produtos</h1>
    ${
        listaDeProdutos.map(item=> `Nome: ${item.nome} Preço:${item.preco } Distância:${item.distancia} ` ).join('<br>')
    }
    </div>`
    window.location.hash = "#produtos"
}

export default { 
    url: "#produtos",
    label: "",
    icon: "shopping-basket",
    pagina: produtos
 };