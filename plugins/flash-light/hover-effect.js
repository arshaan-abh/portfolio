class HoverEffect {


    constructor() {

        document.body.addEventListener('mousemove', (e) => {

            setCSSVar('--gradient-position', e.pageX + "px " + e.pageY + "px");
        });

    }

    hasParent(element, parent) {
        let currentParent = element
        while (currentParent !== null) {
            currentParent = currentParent.parentNode
            if (currentParent === parent) {
                return true;
            }
        }
        return false
    }
}

