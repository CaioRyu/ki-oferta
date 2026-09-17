function navbar(item_menu) {
  const navbar = document.getElementById('navbar');

  const itens = item_menu
    .filter((menu) => menu.label !== "")
    .map(
      (item) =>
        `<li class="nav-item">
           <a href="${item.url}" class="navbar-item nav-link">${item.label}</a>
         </li>`
    )
    .join("");

  navbar.innerHTML = `
    <nav class="navbar-bottom d-flex justify-content-center align-items-center gap-1">
      <ul class="nav list-unstyled d-flex gap-1 m-0 p-0">
        ${itens}
      </ul>
    </nav>
  `;
}

export { navbar };