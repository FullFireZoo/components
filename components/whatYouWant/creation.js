export function whatYouWant (element,className, html, selector) {
    const wyw = document.createElement(element)
    wyw.innerHTML = html
    // wyw.classList.add(className)
    // document.querySelector(selector).appendChild(wyw)
    return {

        element: wyw,
        /* Ajout de l'élément au DOM. */
        display: function (selector){
            document.querySelector(selector).appendChild(wyw)
            return this
        },
        /* C'est une fonction qui permet de changer la couleur de l'élément. */
        style: function (color){
            wyw.style.color = color
            return this
        },
        /* C'est une fonction qui ajoute une classe à l'élément. */
        setClassName: function (...args) {
            // for(element of arguments) {
            //     console.log(element);
            //     wyw.classList.add(element)
            // }
            wyw.classList.add(...args)
            return this
        },
        /* C'est une fonction qui ajoute des éléments à l'élément. */
        someElement: function (...args) {
            for(element of arguments) {
            const test = document.createElement(element)
            wyw.appendChild(test) 
            }
            

            
            return this
        }
}}
