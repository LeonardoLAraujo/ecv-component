import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HoverState } from "../states/button-state.js";
import { ButtonStyle } from './ecv-text-button.js';
import { MaterialColors } from "../utils/colors/material-colors.js";
import { IconTypes } from '../enumerations/icon-types.js';
import { TextStyle } from '../states/text-styles';
import './ecv-icon.js';
import './ecv-box-decoration.js';
import './ecv-flex-center.js';

/**
 * Representa um componente botao que possui icone.
 *
 * @export
 * @class ECVIconButton
 * @extends {LitElement}
 */
@customElement('ecv-icon-button')
export class ECVIconButton extends LitElement {

/**
 * Propriedade reativa que representa o symbolo do icone atual.
 * @property
 * @type {IconTypes}
 */
@property({attribute: false})
    icon: IconTypes = IconTypes.Favorite;

/**
 * Propriedade reativa que representa o metodo designado pelo desenvolvedor que dispara um evento de click no botao.
 * @property
 * @type {Function | undefined}
 **/
@property({attribute: false})
    onPressed?: Function = () => {};

/**
 * Propriedade reativa que representa a customizacao do estado de hover atual do botao. 
 * @property
 * @type {?HoverState}
 */
@property({attribute: false})
    hoverState?: HoverState;

/**
 * Propriedade reativa que representa a customizacao atual do botao.
 * @property
 * @type {?ButtonStyle}
 */
@property({attribute: false})
    buttonStyle?: ButtonStyle;

/**
 * Propriedade reativa que representa a customizacao do icone atual do botao.
 * @property
 * @type {?TextStyle}
 */
@property({attribute: false})
    iconStyle?: TextStyle;

/**
 * @inheritdoc
 * @override
 * @method
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
                    box-shadow: ${this.buttonStyle?.shadow ?? `none`};
                    width: 100%;
                    min-width: max-content;
                }

                button:hover{
                    filter: ${this.hoverState?.brightness};
                    color: ${this.hoverState?.color};
                    background-color: ${this.hoverState?.backgroundColor ?? `${MaterialColors.grey[300]}`};
                    box-shadow: ${this.hoverState?.shadow};
                    cursor: ${this.hoverState?.cursor};
                }

                button:active{
                    background-color: ${this.buttonStyle?.backgroundColor ?? `${MaterialColors.grey[100]}`};
                }
            </style>
            
            <button @click=${this.onPressed}>
                <ecv-icon icon=${this.icon} .iconStyle=${this.iconStyle}></ecv-icon>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-icon-button": ECVIconButton
    }
}