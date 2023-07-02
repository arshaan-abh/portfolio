class MouseEffect {

    constructor(element) {
        const ratio = getCSSProp(element, "--ratio")
        document.body.addEventListener('mousemove', (e) => {
            const x = e.pageX / window.outerWidth * ratio
            const y = e.pageY / window.outerHeight * ratio
            element.style.transform = "translate(" + (x - ratio / 2) + "px, " + (y - ratio / 2) + "px)"
        })
    }}
