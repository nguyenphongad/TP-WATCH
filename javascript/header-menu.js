function Header_menu() {
    const menu = document.getElementById("menu");

    const link_css = document.createElement("link")
    link_css.rel = "stylesheet"
    link_css.type = "text/css"
    link_css.href = "./styles/index.css"
    document.head.appendChild(link_css)

    const link_css_font_as = document.createElement("link")
    link_css_font_as.rel = "stylesheet"
    link_css_font_as.type = "text/css"
    link_css_font_as.href = "../Fontawesome_v6/css/all.css"
    document.head.appendChild(link_css_font_as)

    const template = `
        <div class="container_menu" id="id_container_menu">
            <div class="wrap_menu">
                <div class="line-row">
                    <div class="item-box-row hanle_menu">
                        <button class="btn_menu set_active_scroll_header">
                            <i class="fa-light fa-list-ul"></i>
                            <div>
                                MENU
                            </div>
                        </button>

                        <button class="btn_search set_active_scroll_header">
                            <i class="fa-light fa-magnifying-glass"></i>
                            <div>TÌM KIẾM</div>
                        </button>

                    </div>
                    <div class="item-box-row logo_introduce">
                        <a href="#" class="border-logo">
                            <img id="id_logo_header" src="./logo/logo_white.png" alt="logo">
                        </a>
                    </div>

                    <div class="item-box-row box-control">
                        <div class="btn_cart">
                            <a href="#cart" class="set_active_scroll_header">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <div>GIỎ HÀNG</div>
                            </a>
                        </div>

                        <div class="btn_account">
                            <a href="#account" class="set_active_scroll_header">
                                <i class="fa-regular fa-right-to-bracket"></i>
                                <div>ĐĂNG NHẬP</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> `;


    window.addEventListener("scroll", function () {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const set_image_logo = document.getElementById("id_logo_header")
        const get_ctn_menu = document.getElementById("id_container_menu")

        const get_change_color_scroll = document.querySelectorAll(".set_active_scroll_header")
        console.log(get_change_color_scroll)

        if (scroll > 20) {
            get_ctn_menu.classList.add("active_scroll_menu")
            set_image_logo.setAttribute("src", "./logo/logo_black.png")
            get_change_color_scroll.forEach(function (indexEl) {
                indexEl.classList.add("active_scroll_header")
            })
        } else {
            get_ctn_menu.classList.remove("active_scroll_menu")
            set_image_logo.setAttribute("src", "./logo/logo_white.png")
            get_change_color_scroll.forEach(function (indexEl) {
                indexEl.classList.remove("active_scroll_header")
            })
        }
    })

    menu.insertAdjacentHTML("beforeend", template)
}



export default Header_menu;