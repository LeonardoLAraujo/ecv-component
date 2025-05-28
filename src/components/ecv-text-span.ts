import {LitElement, html, TemplateResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {TextStyle} from '../states/text-styles.js';

/**
 * Classe que representa um componente que insere um texto no fluxo inline para o layout. 
 * @export
 * @class ECVTextSpan
 * @type {ECVTextSpan}
 * @extends {LitElement}
 */
@customElement('ecv-text-span')
export class ECVTextSpan extends LitElement {

    /**
     * Objeto para estilizar o texto.
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
                    display: inline-block;
                    font-family: ${this.textStyle?.family};
                    font-size: ${this.textStyle?.size};
                    color: ${this.textStyle?.color};
                    margin: 0px;
                    overflow-wrap: anywhere;
                    letter-spacing: ${this.textStyle?.letterSpacing};
                    word-spacing: ${this.textStyle?.wordSpacing};
                    font-weight: ${this.textStyle?.weight};
                    line-height: ${this.textStyle?.lineHeight};
                    text-align: ${this.textStyle?.textAlign};
                    text-shadow: ${this.textStyle?.shadow};
                }

            </style>
            <span>
                <slot></slot>
            </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-text-span": ECVTextSpan
    }
}