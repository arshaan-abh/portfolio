class Animations {
    constructor() {
        new SkillsAnimation()
    }
}

class SkillsAnimation {
    player = document.querySelector('#mans-skills');

    constructor() {
        this.player.addEventListener("ready", this.animationLoaded.bind(this))
    }

    animationLoaded() {
        this.checkScroll()
        window.addEventListener("scroll", this.checkScroll.bind(this))

    }

    checkScroll() {
        if (window.scrollY >= window.innerHeight / 2 && window.scrollY < window.innerHeight * 1.5) {
            this.initialAnimation()
        } else
            this.closeAnimation()
    }

    closeAnimation() {
        this.player.pause()
    }


    animationStartedForTheFirstTime = true
    initialAnimation() {
        this.player.play();
        if(this.animationStartedForTheFirstTime) {
            new ToggleSkills()
            this.animationStartedForTheFirstTime = false
        }
        // this.player.addEventListener("frame", evt => {
        //     if (Math.round(evt.detail.frame) === 50) {
        //         this.player.setDirection(1)
        //     }
        //     if (Math.round(evt.detail.frame) === 199) {
        //         this.player.setDirection(-1)
        //     }
        // })

    }


}