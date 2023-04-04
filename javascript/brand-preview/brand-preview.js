
var wrapbrand = $("<div>").addClass("wrap__brand--pView")
for(var i = 1;i <=6 ;i++){
    var itemBoxBrandPview = $("<div>").addClass("item__box_br-view");
    var imageBoxBrand = $("<img>").attr({
        src : "./image/brand/image_brand_"+i+".png",
        alt : "img_brand_"+i
    })

    itemBoxBrandPview.append(imageBoxBrand)
    wrapbrand.append(itemBoxBrandPview)
}

$(".box__brand--pView").append(wrapbrand)