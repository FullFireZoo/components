/**
 * Créer un élément d'en-tête avec le nom de classe donné
 * @param className - Le nom de la classe à ajouter à l'en-tête.
 * @returns Un élément d'en-tête avec le nom de classe de l'argument.
 */
export function headers (className) {
    const header = document.createElement('header')
    header.classList.add(className)
    return header
}

