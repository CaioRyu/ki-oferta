function navbar(item_menu) {
  const navbar = document.getElementById('navbar');

  const itens = item_menu
    .filter((menu) => menu.label !== "")
    .map(
      (item) =>
        `<li class="nav-item">
           <a href="${item.url}" class="navbar-item">${item.label}</a>
         </li>`
    )
    .join("");

  navbar.innerHTML = `
    <nav class="navbar-bottom">
      <ul class="nav">
        ${itens}
      </ul>
    </nav>
  `;
}

export { navbar };