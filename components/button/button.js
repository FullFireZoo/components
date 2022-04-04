
/**
 * Créer un élément de bouton avec le texte et le nom de classe donnés
 * @param text - Le texte qui sera affiché sur le bouton.
 * @param className - Le nom de classe du bouton.
 * @returns Un élément de bouton.
 */
export function button(text, className) {
    const button = document.createElement('button')
    button.innerHTML = text
    button.classList.add(className)
    return button
}