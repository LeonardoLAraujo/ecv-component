import {Cursor} from '../enumerations/cursor-types';

/**
 * Objeto para estilizar o botão no estado Hover
 * @object
 * @export
 * @type {HoverState}
 */
export type HoverState = {
    /**
     * Cor do botão ao passar o mouse no botão
     * @type {string | undefined}
     */
    color?: string,
    /**
     * Cor de fundo do botão ao passar o mouse no botão
     * @type {string | undefined}
     */
    backgroundColor?: string,
    /**
     * brilho do botão ao passar o mouse no botão
     * @type {string | undefined}
     */
    brightness?: string,
    /**
     * Sombra do botão ao passar o mouse no botão
     * @type {string | undefined}
     */
    shadow?: string,
    /**
     * cursor do botão ao passar o mouse no botão
     * @type {string | undefined}
     */
    cursor?: Cursor,
}