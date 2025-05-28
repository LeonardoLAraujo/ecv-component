import { LitElement, TemplateResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa um componente flexivel que ocupa todo o espaco disponivel tanto no eixo horizontal quanto o eixo vertical.
 *
 * @export
 * @class ECVFlexBox
 * @extends {LitElement}
 */
@customElement('ecv-flex-box')
export class ECVFlexBox extends LitElement {

/**
 * Propriedade reativa que manipula de como será o nivel flexibilidade do componente. 
 * @property
 * @type {string | undefined}
 */
@property({type: String})
    flex?: string = '1';

/**
 * 
 * @override
 * @method
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        return html`
            <style>
                :host{
                    display: block;
                    flex: ${this.flex};
                    width: ${this.parentElement?.tagName === 'ECV-FLEX-COLUMN' ? 'auto' : '100%'};
                    height: ${this.parentElement?.tagName === 'ECV-FLEX-COLUMN' ? '100%' : 'auto'};
                }
            </style>
           <slot></slot> 
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-flex-box": ECVFlexBox
    }
}