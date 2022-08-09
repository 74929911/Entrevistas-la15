const videoTres = document.getElementById("videoTres");
videoTres.addEventListener("click", (e) => {
    e.preventDefault()
    Swal.fire({
        title: '<strong>Video tres</strong>',
        // icon: 'info',
        html:
            '<video src="burger.mp4" autoplay height="400"></video>',
    })
})
