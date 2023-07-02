class Navigation {
    constructor() {
        const buttons = document.querySelectorAll(".card .button")
        buttons.forEach(button => button.addEventListener("click", this.nextSlide.bind(this)))
        const backButtons = document.querySelectorAll(".card .backButton")
        backButtons.forEach(backButton => backButton.addEventListener("click", this.prevSlide.bind(this)))
        const dots = document.querySelectorAll(".dot")
        dots.forEach((dot, index, d) => dot.addEventListener("click", this.slideTo.bind(this, index)))
        this.setHeight()

    }

    index = 0

    nextSlide() {
        if (this.index !== 2) {
            this.index++
            document.querySelector("#header").style.setProperty("--index", this.index.toString());

        }
        this.setHeight()
    }

    setHeight() {
        const thisContent = document.querySelectorAll(".content")[this.index]
        const thisImage = document.querySelectorAll(".card-img")[this.index]
        const cardBorder = document.querySelector(".card-border")
        if (thisContent.clientHeight >= thisImage.clientHeight + 128)
            cardBorder.style.height = thisContent.clientHeight + "px"
        else
            cardBorder.style.height = thisImage.clientHeight + 128 + "px"
    }

    prevSlide() {
        if (this.index !== 0) {
            this.index--
            document.querySelector("#header").style.setProperty("--index", this.index.toString());

        }
        this.setHeight()
    }


    slideTo(index) {
        this.index = index
        document.querySelector("#header").style.setProperty("--index", this.index.toString());
        this.setHeight()
    }

}
