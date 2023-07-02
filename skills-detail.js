class SkillsDetail {
    detail = document.querySelector(".skills-detail")
    isDetailShowing = false

    tr = document.querySelectorAll(".tr")

    constructor() {
        const closeButtons = document.querySelectorAll(".closeDetail svg")
        this.tr.forEach((value, index) => {
            value.addEventListener("click", this.makeDetailShow.bind(this, index))
        })
        closeButtons.forEach((value) => {
            value.addEventListener("click", this.makeDetailHide.bind(this))
        })
    }

    makeDetailShow(index) {
        this.detail.classList.add("show")
        this.isDetailShowing = true
        this.changeDetailContent(index)
    }

    changeDetailContent(index) {
        this.removeTrSelection()
        this.tr[index].classList.add("selected")

        document.querySelector(".detail-content.active").classList.remove("active")
        document.querySelectorAll(".detail-content")[index].classList.add("active")
        setCSSVar("--active", index, document.querySelector(".content-container"))
        this.setHeight(index)
    }

    setHeight(index) {
        const height = document.querySelectorAll(".detail-content")[index].clientHeight
        document.querySelector(".content-container").style.height = height + "px"
    }

    makeDetailHide() {
        this.removeTrSelection()

        this.detail.classList.remove("show")
        this.isDetailShowing = false
    }

    removeTrSelection () {
        const oldSelected = document.querySelector(".tr.selected")
        if (oldSelected !== null)
            oldSelected.classList.remove("selected")
    }
}