
export function button(text, className) {
    const button = document.createElement('button')
    button.innerHTML = text
    button.classList.add(className)
    return button
}