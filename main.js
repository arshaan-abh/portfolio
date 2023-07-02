function main() {

    const hoverEffect = new HoverEffect()

    const mouseEffects = document.querySelectorAll(".mouse-effect")

    mouseEffects.forEach((mouseEffect, index) => mouseEffects[index] = new MouseEffect(mouseEffect))

    const navigation = new Navigation();

    const shadows = document.querySelectorAll(".shadows")

    shadows.forEach((shadow, index) => shadows[index] = new Shadows(shadow))

    new Ripple()

    // new ToggleSkills()

    new Animations()

    new SkillsDetail()
}