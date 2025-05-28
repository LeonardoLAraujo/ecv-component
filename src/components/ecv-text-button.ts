import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HoverState } from "../states/button-state.js";
import { TextStyle } from "../states/text-styles.js";
import { Cursor } from '../enumerations/cursor-types.js';
import { MaterialColors } from "../utils/colors/material-colors.js";

/**
 * @export
 * @type {ButtonStyle}
 */
export type ButtonStyle = {
    /**
     * backgroundColor - Cor de fundo do botão.
     * @type {string | undefined}
     */
    backgroundColor?: string,
    /**
     * shadow - Shadow do botão.
     * @type {string | undefined}
     */
    shadow?: string,
    /**
     * cursor - Cursor do botão passado pelo ENUM Cursor.
     * @type {Cursor}
     */
    cursor?: Cursor,
    /**
     * borderAll - Border do botão.
     * @type {string | undefined}
     */
    borderAll?: string,
    /**
     * paddingAll - Padding do botão.
     * @type {string | undefined}
     */
    paddingAll?: string,
    /**
     * backgroundColor - Cor de fundo do botão.
     * @type {string | undefined}
     */
    borderRadius?: string,
}

/**
 * Classe renderiza um botão com texto.
 * @export
 * @class ECVTextButton
 * @type {ECVTextButton}
 * @extends {LitElement}
 */
@customElement('ecv-text-button')
export class ECVTextButton extends LitElement {

    /**
     * onPressed - método click do botão.
     * @property
     * @type {VoidFunction}
     */
    @property({attribute: false})
    onPressed: VoidFunction = () : void => {};

    /**
     * Objeto para estilizar o hover do botão.
     * @property
     * @type {?HoverState}
     */
    @property({attribute: false})
    hoverState?: HoverState;

    /**
     * Objeto para estilizar o botão.
     * @property
     * @type {?ButtonStyle}
     */
    @property({attribute: false})
    buttonStyle?: ButtonStyle;

    /**
     * Objeto para estilizar o texto do botão. 
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    textStyle?: TextStyle;

    /**
     * @method
     * @override
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {
        return html`
            <style>

                :host{
                    display: block;
                    flex: 1;
                    user-select: none;
                }

                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: ${this.buttonStyle?.cursor ?? 'pointer'};
                    border: ${this.buttonStyle?.borderAll ?? `1px solid ${MaterialColors.grey[600]}`};
                    background-color: ${this.buttonStyle?.backgroundColor ?? `${MaterialColors.grey[100]}`};
                    padding: ${this.buttonStyle?.paddingAll ?? '10px'};
                    border-radius: ${this.buttonStyle?.borderRadius ?? '5px'};
                    box-shadow: ${this.buttonStyle?.shadow ?? 'none'};
                    width: 100%;
                    min-width: max-content;
                }

                button:hover{
                    filter: ${this.hoverState?.brightness};
                    color: ${this.hoverState?.color};
                    background-color: ${this.hoverState?.backgroundColor ?? `${MaterialColors.grey[200]}`};
                    box-shadow: ${this.hoverState?.shadow};
                    cursor: ${this.hoverState?.cursor};
                }

                button:active{
                    background-color: ${this.buttonStyle?.backgroundColor ?? `${MaterialColors.grey[100]}`};
                }
            </style>
            
            <button @click=${this.onPressed}>
                <ecv-text .textStyle=${this.textStyle}><slot></slot></ecv-text>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap{
        "ecv-text-button": ECVTextButton
    }
}