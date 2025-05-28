import {LitElement, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {TextStyle} from '../states/text-styles.js';

/**
 * Classe renderiza texto.
 * @export
 * @class ECVText
 * @type {ECVText}
 * @extends {LitElement}
 */
@customElement('ecv-text')
export class ECVText extends LitElement {

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
                    display: block;
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
                    text-transform: ${this.textStyle?.textTransform};
                    text-shadow: ${this.textStyle?.shadow};
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ecv-text': ECVText;
    }
}