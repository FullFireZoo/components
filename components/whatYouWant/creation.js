export function whatYouWant (element,className, html, selector) {
    const wyw = document.createElement(element)
    wyw.innerHTML = html
    // wyw.classList.add(className)
    // document.querySelector(selector).appendChild(wyw)
    return {

        element: wyw,
        display: function (selector){
            document.querySelector(selector).appendChild(wyw)
            return this
        },
        style: function (color){
            wyw.style.color = color
            return this
        },
        setClassName: function (...args) {
            // for(element of arguments) {
            //     console.log(element);
            //     wyw.classList.add(element)
            // }
            wyw.classList.add(...args)
            return this
        },
        someElement: function (...args) {
            for(element of arguments) {
            const test = document.createElement(element)
            wyw.appendChild(test) 
            }
            

            
            return this
        }
}}
