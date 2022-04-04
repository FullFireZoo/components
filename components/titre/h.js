/**
 * Créez un nouvel élément HTML de type h1, définissez son innerHTML sur le texte donné et ajoutez-lui
 * le className donné
 * @param text - Le texte à afficher dans l'élément h1.
 * @param className - Le nom de classe de l'élément que vous souhaitez créer.
 * @param num - Le numéro de la rubrique.
 * @returns Un élément h1 avec le texte et className.
 */
export function titre(text, className, num) {
    const h1 = document.createElement(`h${num}`)
    h1.innerHTML = text
    h1.classList.add(className)
    return h1
}