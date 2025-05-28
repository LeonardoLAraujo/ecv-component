import {LitElement, html, TemplateResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {FlexRowAlignItems, FlexRowJustifyContent} from './ecv-flex-row';
import {HoverState} from '../states/button-state';
import {TextStyle} from '../states/text-styles';
import {ButtonStyle} from './ecv-text-button';
import { IconTypes } from '../enumerations/icon-types';
import './ecv-icon';

/**
 * Classe renderiza um botão com texto e icone.
 * @export
 * @class ECVTextButtonIcon
 * @type {ECVTextButtonIcon}
 * @extends {LitElement}
 */
@customElement('ecv-text-button-icon')
export class ECVTextButtonIcon extends LitElement {

    /**
     * onPressed - método click do botão.
     * @property
     * @type {VoidFunction}
     */
    @property({attribute: false})
    onPressed: VoidFunction = () : void => {};

    /**
     * icon - Declarar o icone utilizando o ENUM IconTypes.
     * @property
     * @type {IconTypes}
     */
    @property({attribute: false})
    icon: IconTypes = IconTypes.Add;

     /**
     * Faz a inversão de posição entre ícone e texto
     * @property
     * @type {Boolean}
     */
     @property({type: Boolean})
     reversePosition: boolean = false;

    /**
     * Objeto para estilizar o botão.
     * @property
     * @type {?ButtonStyle}
     */
    @property({attribute: false})
    buttonStyle?: ButtonStyle;

    /**
     * Objeto para estilizar o texto do Botão.
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    textStyle?: TextStyle;
    
    /**
     * Objeto para estilizar o Hover do botão.
     * @property
     * @type {?HoverState}
     */
    @property({attribute: false})
    hoverState?: HoverState;

    /**
     * Objeto para estilizar o icon. 
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    iconStyle?: TextStyle;

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
                    width: 100%;
                }
            </style>

            <ecv-text-button .textStyle=${this.textStyle} .buttonStyle=${this.buttonStyle} .hoverState=${this.hoverState} .onPressed=${this.onPressed}>
                <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="5px" flexJustify=${FlexRowJustifyContent.CENTER} ?reverseDirection=${this.reversePosition}>
                    <ecv-icon icon=${this.icon} .iconStyle=${this.iconStyle}></ecv-icon>
                    <slot></slot>
                </ecv-flex-row>
            </ecv-text-button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap{
        "ecv-text-button-icon": ECVTextButtonIcon
    }
}