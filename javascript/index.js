import Header_menu from "./header-menu.js";

const link_css = document.createElement("link")
link_css.rel = "shortcut icon"
link_css.type = "image/x-icon"
link_css.href = "../logo/favicon.ico"
document.head.appendChild(link_css)

Header_menu();

