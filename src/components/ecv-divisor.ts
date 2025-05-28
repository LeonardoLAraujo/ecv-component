import { LitElement, html, css, CSSResult, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa um componente usado para criar uma separacao entre componentes   usado na criacao de layouts.
 *
 * @export
 * @class ECVDivisor
 * @extends {LitElement}
 */
@customElement('ecv-divisor')
export class ECVDivisor extends LitElement {

/**
 * 
 *
 * @static
 * @type {CSSResult}
 */
static styles: CSSResult = css`

        :host{
            display: block;
        }

        hr{
            border: none;
            border-bottom: 1px solid #e9e5e5;
            margin: 0.5rem 0;
            width: inherit;
        }
    `;

/**
 * Propriedade reativa que especifica a largura do divisor.
 * 
 * @property
 * @type {string | undefined}
 */
@property()
width?: string = '100%';


/**
 * @override
 * @method
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        return html`
            <style>
                :host{
                    width: ${this.width}
                }
            </style>
            <hr>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-divisor": ECVDivisor
    }
}