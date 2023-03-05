function Header_menu() {
    const menu = document.getElementById("menu");

    const link_css = document.createElement("link")
    link_css.rel = "stylesheet"
    link_css.type = "text/css"
    link_css.href = "./styles/index.css"
    document.head.appendChild(link_css)

    const link_css_font_awesome = document.createElement("link")
    link_css_font_awesome.rel = "stylesheet"
    link_css_font_awesome.type = "text/css"
    link_css_font_awesome.href = "../Fontawesome_v6/css/all.css"
    document.head.appendChild(link_css_font_awesome)

    const template = `
        <div class="container_menu active_scroll_menu" id="id_container_menu">
            <div class="wrap_menu">
                <div class="line-row">
                    <div class="item-box-row hanle_menu">
                        <button class="btn_menu set_active_scroll_header active_scroll_header" id="handle-open_menu-left">
                            <i class="fa-light fa-list-ul"></i>
                            <div>
                                MENU
                            </div>
                        </button>

                        <button class="btn_search set_active_scroll_header active_scroll_header">
                            <i class="fa-light fa-magnifying-glass"></i>
                            <div>TÌM KIẾM</div>
                        </button>

                    </div>
                    <div class="item-box-row logo_introduce">
                        <a href="/" class="border-logo">
                            <img id="id_logo_header" src="./logo/logo_black.png" alt="logo">
                        </a>
                    </div>

                    <div class="item-box-row box-control">
                        <div class="btn_cart">
                            <a href="#cart" class="set_active_scroll_header active_scroll_header">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <div>GIỎ HÀNG</div>
                            </a>
                        </div>

                        <div class="btn_account">
                            <a href="#account" class="set_active_scroll_header active_scroll_header">
                                <i class="fa-regular fa-right-to-bracket"></i>
                                <div>ĐĂNG NHẬP</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div class="wrap_menu-left" id="wrap_menu_left">
            <div class="box_contask_menu">
                <h1>MENU</h1>
            </div>
        </div>
        
        
        `;

    menu.insertAdjacentHTML("beforeend", template);
    const set_image_logo = document.getElementById("id_logo_header");
    const get_ctn_menu = document.getElementById("id_container_menu");
    const get_change_color_scroll = document.querySelectorAll(".set_active_scroll_header");
    const get_location_pathName = window.location.pathname;

    const handle_open_menu_left = document.getElementById("handle-open_menu-left")
    const get_menu_left = document.getElementById("wrap_menu_left")

    const get_video_trans = document.getElementById("id_front_video_intro")

    handle_open_menu_left.addEventListener("click", function () {
        get_menu_left.classList.toggle("show_menu_left")

        document.body.classList.toggle("scroll_hidden_body")

        get_video_trans.classList.toggle("active_menu_trans_video")


        get_ctn_menu.classList.add("active_scroll_menu")
        set_image_logo.setAttribute("src", "./logo/logo_black.png")
        get_change_color_scroll.forEach(function (indexEl) {
            indexEl.classList.add("active_scroll_header")
        })
    })



    if (get_location_pathName === "/" || get_location_pathName === "/index.html") {
        get_ctn_menu.classList.remove("active_scroll_menu")
        set_image_logo.setAttribute("src", "./logo/logo_white.png")
        get_change_color_scroll.forEach(function (indexEl) {
            indexEl.classList.remove("active_scroll_header")
        })

        window.addEventListener("scroll", function () {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
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
    }
}

Header_menu();