function setCSSVar(property, value, element) {

    if (!element)
        element = document.documentElement

    element.style.setProperty(property, value);

}

function getCSSProp(element, property) {
    return getComputedStyle(element).getPropertyValue(property);
}


function addCSSValue(element, attribute, value) {
    const css = element.style[attribute]
    if (css === "") {
        element.style[attribute] = value
    } else {
        element.style[attribute] += "   ,   " + value
    }
}


function removeCSSValue(element, attribute, value) {
    const css = element.style[attribute]
    let final = []
    let removed = 0
    const howManyShouldBeRemoved = 1


    css.split("   ,   ").forEach((v) => {
        if (v !== value && removed >= howManyShouldBeRemoved) {
            final.push(v)
        } else {
            removed++
        }
    })

    element.style[attribute] = final.join("   ,   ")
}

// function removeCSSValue(element, attribute, value) {
//     let removed = 0
//     const howManyShouldBeRemoved = 1
//     const css = element.style[attribute]
//     let cssArray = []
//     let i = 0;
//     css.split(',').forEach((v) => {
//         const trimmedV = v.trim()
//         if (removed < howManyShouldBeRemoved)
//             if (trimmedV !== value && trimmedV !== "") {
//                 cssArray[i] = trimmedV
//                 i++
//
//             } else {
//                 removed++
//             }
//         else if (trimmedV !== "") {
//             cssArray[i] = trimmedV
//             i++
//         }
//     })
//     element.style[attribute] = cssArray.toString()
// }


class HomeMadeSetInterval {
    timeout

    enable = true

    cancel = null

    constructor(timeout) {
        this.timeout = timeout
    }

    initial(handler) {
        if(this.enable) {
            handler()
            this.requestTimeout(this.initial.bind(this, handler), this.timeout, fn => (this.cancel = fn));
        }        // if (this.enable) {
        //     handler()
        //     requestAnimationFrame(this.initial(handler));
        //     // setTimeout(this.initial.bind(this, handler, this.timeout), this.timeout)
        // }
    }

    clear() {
        // this.cancel();
        // cancelAnimationFrame(this.id);
        this.enable = false
    }

    changeTimeout(newTimeout) {
        this.timeout = newTimeout
    }



    noop = () => {
    };

    browserSupportsRaf =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        (window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) || // Firefox 5 ships without cancel support
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    requestTimeoutNoRaf = (fn, delay, registerCancel) => {
        const timeoutId = setTimeout(fn, delay);
        registerCancel(() => clearTimeout(timeoutId));
    }

    requestTimeoutRaf = (fn, delay, registerCancel) => {
        const start = new Date().getTime();

        const loop = () => {
            const delta = new Date().getTime() - start;

            if (delta >= delay) {
                fn();
                registerCancel(this.noop);
                return;
            }

            const raf = requestAnimationFrame(loop);
            registerCancel(() => cancelAnimationFrame(raf));
        };

        const raf = requestAnimationFrame(loop);
        registerCancel(() => cancelAnimationFrame(raf));
    };

    requestTimeout = this.browserSupportsRaf ? this.requestTimeoutRaf : this.requestTimeoutNoRaf;

}
