
const get_video_intro = document.getElementById("id_front_video_intro")
get_video_intro.play();
get_video_intro.muted = true;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const handle_toggle_muted_video = document.getElementById("toggle_muted_video")

handle_toggle_muted_video.addEventListener("click", function () {
    const icon_volume_muted = document.getElementById("icon_muted")

    if (get_video_intro.muted) {
        get_video_intro.muted = false
        icon_volume_muted.classList.add("fa-volume")
        icon_volume_muted.classList.remove("fa-volume-slash")
    } else {
        get_video_intro.muted = true
        icon_volume_muted.classList.add("fa-volume-slash")
        icon_volume_muted.classList.remove("fa-volume")
    }
})

