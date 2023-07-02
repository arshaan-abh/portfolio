class Ripple {

    constructor() {
        const ripples = document.querySelectorAll(".ripple");
        ripples.forEach((ripple) => new InitialRipple(ripple), this);
    }


}

class InitialRipple {

    cursorPosition = {x: 0, y: 0}

    intervalVar = []
    intervalVar2 = []

    speed = 10
    fastSpeed = 1

    constructor(element) {
        window.addEventListener("mousemove", (event) => {
            this.cursorPosition.x = event.clientX;
            this.cursorPosition.y = event.clientY;
        });


        let click = 0
        let mousedown = false
        element.addEventListener("mousedown", () => {
            mousedown = true
            click++

            let x = this.cursorPosition.x - element.getBoundingClientRect().left + "px";
            let y = this.cursorPosition.y - element.getBoundingClientRect().top + "px";
            element.style.setProperty("--ripple-position" + click, x + " " + y);
            element.style.setProperty("--ripple-color-alpha-now" + click, ".1");
            element.style.setProperty("--ripple-size" + click, "0%");
            addCSSValue(element, "background-image", "radial-gradient(circle farthest-corner at var(--ripple-position" + click + "), rgb(var(--ripple-color-rgb), var(--ripple-color-alpha-now" + click + ")) var(--ripple-size" + click + "), transparent calc(var(--ripple-size" + click + ") + var(--ripple-shadow-size)))")

            this.intervalVar[click - 1] = new HomeMadeSetInterval(this.speed)
            this.intervalVar[click - 1].initial(this.interval.bind(this, element, click))


        })


        window.addEventListener("mouseup", () => {
            if (mousedown) {
                this.intervalVar[click - 1].changeTimeout(this.fastSpeed)
                this.intervalVar2[click - 1] = new HomeMadeSetInterval(this.fastSpeed)
                this.intervalVar2[click - 1].initial(this.endRipple.bind(this, element, click))
            }
            mousedown = false
        })
    }

    i = []


    interval(element, click) {
        if (this.i[click - 1] === undefined) this.i[click - 1] = 0
        element.style.setProperty("--ripple-size" + (click), this.i[click - 1] + "%");
        // element.style.setProperty("--ripple-color-alpha-now" + (click), (.1 - (this.i[click - 1] / (this.speed * 100))).toString());
        if (this.i[click - 1] < 100) {
            this.i[click - 1]++
        }
        // else {
        //     element.style.removeProperty("--ripple-size" + (click))
        //     element.style.removeProperty("--ripple-color-alpha-now" + (click))
        //     element.style.removeProperty("--ripple-position" + click)
        //     this.intervalVar[click - 1].clear()
        //     removeCSSValue(element, "background-image", "radial-gradient(circle farthest-corner at var(--ripple-position" + click + "), rgb(var(--ripple-color-rgb), var(--ripple-color-alpha-now" + click + ")) var(--ripple-size" + click + "), transparent calc(var(--ripple-size" + click + ") + var(--ripple-shadow-size)))")
        // }
    }

    i2 = []

    endRipple(element, click) {

        if (this.i2[click - 1] === undefined) this.i2[click - 1] = 0
        element.style.setProperty("--ripple-color-alpha-now" + (click), (.1 - (this.i2[click - 1] / (this.speed * 100))).toString());
        if (this.i2[click - 1] < 100) {
            this.i2[click - 1]++
        } else {
            element.style.removeProperty("--ripple-size" + (click))
            element.style.removeProperty("--ripple-color-alpha-now" + (click))
            element.style.removeProperty("--ripple-position" + click)
            this.intervalVar[click - 1].clear()
            removeCSSValue(element, "background-image", "radial-gradient(circle farthest-corner at var(--ripple-position" + click + "), rgb(var(--ripple-color-rgb), var(--ripple-color-alpha-now" + click + ")) var(--ripple-size" + click + "), transparent calc(var(--ripple-size" + click + ") + var(--ripple-shadow-size)))")
            this.intervalVar2[click - 1].clear()
        }

    }

}



