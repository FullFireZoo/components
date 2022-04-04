import {button} from "../button/button.js"
import {headers} from "../header/header.js"
import {titre} from "../titre/h.js"


/**
 * Étant donné un sélecteur, un texte et un nom de classe, ajoutez un bouton au DOM
 * @param selector - Le sélecteur CSS de l'élément où vous souhaitez ajouter le bouton.
 * @param text - Le texte qui sera affiché sur le bouton.
 * @param className - Le nom de classe du bouton.
 */
export function addElementButton(selector, text, className) {
    const btn = button (text, className)
    document.querySelector(selector).appendChild(btn)
    }

/**
 * Étant donné un sélecteur et un nom de classe, ajoutez un élément d'en-tête au DOM
 * @param selector - Le sélecteur CSS de l'élément auquel vous souhaitez ajouter l'en-tête.
 * @param className - Le nom de classe de l'élément auquel vous souhaitez ajouter un en-tête.
 */
export function addElementHeader(selector, className) {
    const header = headers(className)
    document.querySelector(selector).appendChild(header)
    }

/**
 * Il ajoute un titre à la page.
 * @param selector - Le sélecteur CSS de l'élément auquel vous souhaitez ajouter le titre.
 * @param text - Texte à afficher dans le titre.
 * @param className - Le nom de classe de l'élément auquel vous voulez ajouter le titre.
 * @param num - Le numéro de l'élément auquel vous voulez ajouter le titre.
 */
export function addElementTitle(selector, text, className, num) {
    const  h = titre(text, className, num)
    document.querySelector(selector).appendChild(h)
    }