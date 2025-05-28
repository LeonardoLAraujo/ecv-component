import { LitElement, html, css, CSSResult, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Classe renderiza uma div onde o padding é passado dentro dele e 
 * envolve os filhos dentro dele.
 * @export
 * @class ECVPadding
 * @type {ECVPadding}
 * @extends {LitElement}
 */
@customElement('ecv-padding')
export class ECVPadding extends LitElement {

    /**
     * CSS do componente.
     * @static
     * @override
     * @type {CSSResult}
     */
    static override styles: CSSResult = css`
        :host{
            display: block;
        }
    `;

    /**
     * Passa padding para todos os lados. 
     * @property
     * @type {?string}
     */
    @property()
    all?: string;

    /**
     * Passa padding para o topo. 
     * @property
     * @type {?string}
     */
    @property()
    top?: string = '0px';

    /**
     * Passa o padding para a direita. 
     * @property
     * @type {?string}
     */
    @property()
    right?: string = '0px';

    /**
     * Passa o padding para a esquerda. 
     * @property
     * @type {?string}
     */
    @property()
    left?: string = '0px';

    /**
     * Passa o padding para baixo. 
     * @property
     * @type {?string}
     */
    @property()
    bottom?: string = '0px';

    /**
     * @override
     * @method
    * @returns {TemplateResult}
    */
    override render(): TemplateResult {
        const paddingExpression = this.all !== undefined ? `padding: ${this.all}` : `padding-left: ${this.left};padding-right: ${this.right}; padding-top: ${this.top}; padding-bottom: ${this.bottom}`;
        return html`
            <style>
                :host{
                    ${paddingExpression};
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-padding": ECVPadding
    }
}