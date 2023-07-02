class Shadows {
    element
    length
    step = 5000

    constructor(element) {
        this.element = element
        const shadows = getCSSProp(element, "--shadows").split(',')
        this.length = shadows.length
        shadows.forEach((value, index) => {
            shadows[index] = value.trim()
            this.addShadow(shadows[index], index)
        })

    }

    addShadow(color, index) {
        const x = window.outerWidth / 2
        const y = window.outerHeight / 2
        const step = this.step / this.length * index
        const css = "--shadows-position-" + index
        const interval = new HomeMadeSetInterval(index + 1)
        interval.initial(this.moveGradient.bind(this, css, x, y, index))
        this.moveGradient(css, x, y, step, index)
        addCSSValue(this.element, "background-image", "radial-gradient(circle farthest-corner at var(" + css + "), " + color + " 0%, transparent 100%)")
        // setInterval(this.moveGradient.bind(this, css, x, y, step), 1)
    }

    i = 0

    moveGradient(css, x, y, step, index) {
        let radios
        if (window.outerHeight > window.outerWidth) {
            radios = window.outerWidth / 2
        } else {
            radios = window.outerHeight / 2
        }
        // const random = Math.random() * .5 + .5
        const xc = x + radios * Math.cos(2 * Math.PI * (this.i + step) / this.step)
        const yc = y + radios * Math.sin(2 * Math.PI * (this.i + step) / this.step)
        setCSSVar(css, xc + "px " + yc + "px")
        this.i++

    }
}
