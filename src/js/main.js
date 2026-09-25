import { icons, createIcons} from 'Lucide';
import { mapaDeRotas } from './rotas/rotas.js'
import { navbar } from './navbar/navbar.js'

const app = document.getElementById("app")
const btnBusca = document.getElementById("btn-busca")
navbar(mapaDeRotas)

function renderizarPagina() {
    const hash = window.location.hash || '#home'
    const rota  = mapaDeRotas.find(tela => tela.url === hash)
    console.log(rota)
    if (rota) {
        rota.pagina(app)
    }
}

btnBusca.addEventListener("click", ()=>{
    window.location.hash = "#buscar"
})

window.addEventListener("hashchange", ()=>{
    renderizarPagina()
})
renderizarPagina()
createIcons({icons});
