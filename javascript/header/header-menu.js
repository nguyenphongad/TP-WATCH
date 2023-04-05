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
                                <div class="number_list-cart">0</div>
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
                <div class="box__flex-menu">
                    <div class="wrap__line--option">
                        <a href="/">TRANG CHỦ</a>
                        <a href="#">GIỚI THIỆU</a>
                        <a href="#">THANH TOÁN</a>
                        <a href="#">LIÊN HỆ</a>
                        <a href="#">TIN TỨC</a>
                    </div>
                </div>
                <div class="box__flex-menu show__collection-product">
                    <div class="heading__text--product">SẢN PHẨM</div>
                    <div class="wrap__box__overflow">
                        <a href="#">ĐỒNG HỒ LOBINNI</a>
                        <a href="#">ĐỒNG HỒ I&W CARNIVAL</a>
                        <a href="#">ĐỒNG HỒ CARNIVAL</a>
                        <a href="#">ĐỒNG HỒ TEINTOP</a>
                        <a href="#">ĐỒNG HỒ BORMAN</a>
                        <a href="#">ĐỒNG HỒ AOUKE</a>
                        <a href="#">ĐỒNG HỒ MINI FOCUS</a>
                        <a href="#">ĐỒNG HỒ NAM</a>
                        <a href="#">ĐỒNG HỒ NỮ</a>
                        <a href="#">ĐỒNG HỒ ĐÔI</a>
                        <a href="#">ĐỒNG HỒ DÂY DA</a>
                        <a href="#">ĐỒNG HỒ DÂY THÉP</a>
                        <a href="#">ĐỒNG HỒ DÂY CƠ</a>
                        <a href="#">ĐỒNG HỒ DÂY PIN</a>
                        <a href="#">ĐỒNG HỒ DÂY HỒ</a>
                    </div>
                </div>
            </div>
            <div class="line__handle__close--menu">
                <button id="id_btn_handle_close_menu">
                    <i class="fa-light fa-chevron-up"></i>
                </button>
            </div>
        </div>
        
        <div class="wrap__animation_logo-trans-y remove__hide-wrap_ans_logo-trans" id="id_wrapper__ans_logo-trans-y">
            <img src="./logo/logo_white.png" alt="logo_white">
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

    const get_wrapper_an_trans_y = document.getElementById("id_wrapper__ans_logo-trans-y")

    const get_btn_handle_close_menu = document.getElementById("id_btn_handle_close_menu")

    get_btn_handle_close_menu.addEventListener("click", function () {
        get_menu_left.classList.remove("show_menu_left")

        document.body.classList.remove("scroll_hidden_body")

        get_video_trans.classList.remove("active_menu_trans_video")
    })

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

        document.body.classList.add("scroll_hidden_body");
        get_wrapper_an_trans_y.classList.remove("remove__hide-wrap_ans_logo-trans");
        set_image_logo.classList.add("visibility-hidden");
        document.body.style.paddingRight = "4px";

        setTimeout(() => {
            document.body.classList.remove("scroll_hidden_body");
            document.body.style.paddingRight = "0px";
            set_image_logo.classList.remove("visibility-hidden")
            get_wrapper_an_trans_y.classList.add("remove__hide-wrap_ans_logo-trans");
        }, 
        // 3150)
        0)


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