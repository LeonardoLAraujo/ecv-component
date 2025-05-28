import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import {TextStyle} from '../states/text-styles.js';
import {MaterialColors} from '../utils/colors/material-colors.js';
import './ecv-flex-row.js';
import './ecv-box-decoration.js';
import './ecv-flex-box.js';

/**
 * @export
 * @Object
 * @type {TextFieldStyle}
 */
export type TextFieldStyle = {
    /**
     * backgroundColor - Cor de fundo do input.
     * @type {string | undefined}
     */
    backgroundColor?: string,
    /**
     * textFieldColor - Cor do texto do input.
     * @type {string | undefined}
     */
    textFieldColor?: string,
    /**
     * textFieldSize - Tamanho do texto do input.
     * @type {string | undefined}
     */
    textFieldSize?: string,
    /**
     * borderAll - Borda do input.
     * @type {string | undefined}
     */
    borderAll?: string,
    /**
     * borderAllRadius - Borda redonda do input.
     * @type {string | undefined}
     */
    borderAllRadius?: string,
    /**
     * shadow - Sombra do input.
     * @type {string | undefined}
     */
    shadow?: string,
}

/**
 * Classe renderiza o input.
 * @export
 * @class ECVTextField
 * @type {ECVTextField}
 * @extends {LitElement}
 */
@customElement('ecv-text-field')
export class ECVTextField extends LitElement {

    /**
     * Passar o Placeholder do input.
     * @property
     * @type {string}
     */
    @property()
    hint: string ='';

    /**
     * Passar o texto do label.
     * @property
     * @type {string}
     */
    @property()
    label: string = '';

    /**
     * Objeto para estilizar o input.  
     * @property
     * @type {?TextFieldStyle}
     */
    @property({attribute: false}) 
    textFieldStyle?: TextFieldStyle; 

    /**
     * Objeto para estilizar a Label.
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    labelStyle?: TextStyle; 

    /**
     * Objeto para estilizar o Placeholder. 
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    hintSyle?: TextStyle;


    /**
     * @override
     * @method
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {
        return html`
            <style>
                :host{
                    display: block;
                }

                label{
                    width: inherit;
                    font-size: ${this.labelStyle?.size};
                    font-weight: ${this.labelStyle?.weight};
                    color: ${this.labelStyle?.color};
                    font-weight: ${this.labelStyle?.weight};
                    font-family: ${this.labelStyle?.family};
                    text-shadow: ${this.labelStyle?.shadow};
                    white-space: nowrap;
                }

                input{
                    width: 100%;
                    border: ${this.textFieldStyle?.borderAll ?? `1px solid ${MaterialColors.grey[900]}`};
                    padding: 10px;
                    background-color: ${this.textFieldStyle?.backgroundColor ?? `${MaterialColors.grey[200]}`};
                    box-shadow: ${this.textFieldStyle?.shadow};
                    border-radius: ${this.textFieldStyle?.borderAllRadius};
                    font-size: ${this.textFieldStyle?.textFieldSize};
                    color: ${this.textFieldStyle?.textFieldColor};
                    display: inline-block;
                }

                input::placeholder{
                    font-size:          ${this.hintSyle?.size};
                    font-weight:        ${this.hintSyle?.weight};
                    color:              ${this.hintSyle?.color};
                    font-weight:        ${this.hintSyle?.weight};
                    font-family:        ${this.hintSyle?.family};
                    text-shadow:        ${this.hintSyle?.shadow};
                    letter-spacing:     ${this.hintSyle?.letterSpacing};
                    text-align:         ${this.hintSyle?.textAlign};
                    text-transform:     ${this.hintSyle?.textTransform};
                    text-indent:        ${this.hintSyle?.textIdent};
                    font-style:         ${this.hintSyle?.fontStyle};
                }

                input:focus,
                input:active,
                input:focus-visible{
                    outline: none;
                }

            </style>
           
            <ecv-flex-row columnGap=${this.label !== '' ? "10px" : '0'}>
                <label for="ecv-text-field">${this.label}</label>
                <input type="text" placeholder=${this.hint} name="ecv-text-field">
            </ecv-flex-row>
            
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap{
        "ecv-text-field": ECVTextField
    }
}