import { mapaderotas } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById("app")
const btnBusca = document.getElementById("btn-busca")
navbar(mapaderotas)

function renderizarPagina() {
    const hash = window.location.hash || '#home'
    const rota  = mapaderotas.find(tela => tela.url === hash)
    console.log(rota)
    if (rota) {
        rota.pagina(app)
    }
}

btnBusca.addEventListener("click", ()=>{
    window.location.hash = "#buscar"
    renderizarPagina()
})

window.addEventListener("hashchange", ()=>{
    renderizarPagina()
})
renderizarPagina()
