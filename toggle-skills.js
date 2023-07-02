class ToggleSkills {
    firstButton = document.querySelector("#first-button")
    secondButton = document.querySelector("#second-button")
    firstPageElements
    secondPageElements

    constructor() {
        this.initialSecondPage()
        this.openFirstPage()
        this.startAnimation()
        this.firstButton.addEventListener("click", this.openFirstPage.bind(this))
        this.secondButton.addEventListener("click", this.openSecondPage.bind(this))
    }


    startAnimation() {
        this.firstPageElements.forEach(value => {
            value.style.transform = "translateX(0)"
        })
    }

    initialSecondPage() {
        this.firstPageElements = document.querySelectorAll(".skills:nth-of-type(1) .tr")
        const firstPageElementsHeight = getCSSProp(this.firstPageElements[0], "height")
        this.secondPageElements = document.createElement("div")
        this.secondPageElements.classList.add("flex", "col", "skills", "justify-end","second")
        this.firstPageElements.forEach(value => {
            const element = document.createElement("div")
            element.classList.add("flex", "tr")
            element.innerHTML = "salam"
            element.style.height = firstPageElementsHeight
            this.secondPageElements.appendChild(element)
        })
        this.secondPageElements.style.width = "calc(50% - (var(--margin) * 1.5))"
        this.secondPageElements.style.position = "absolute"
        this.secondPageElements.style.bottom = "-100%"
        this.secondPageElements.style.right = "50%"
        document.querySelector("#main").appendChild(this.secondPageElements)
    }

    openFirstPage() {
        this.firstButton.classList.add("active")
        this.secondButton.classList.remove("active")

        this.secondPageElements.style.right = "50%"
        this.secondPageElements.style.opacity = "0"
        this.firstPageElements.forEach(value => {
            value.style.transform = "translateX(0)"
            value.style.opacity = "1"
        })
    }

    openSecondPage() {
        this.firstButton.classList.remove("active")
        this.secondButton.classList.add("active")

        this.secondPageElements.style.right = "10rem"
        this.secondPageElements.style.opacity = "1"
        this.firstPageElements.forEach(value => {
            value.style.transform = "translateX(calc(100% + 10rem))"
            value.style.opacity = "0"
        })
    }
}