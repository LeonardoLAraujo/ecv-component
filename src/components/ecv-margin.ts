import { LitElement, html, css, CSSResult, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Classe renderiza uma div onde a margin é passado fora dele e 
 * envolve os filhos dentro dele.
 * @export
 * @class ECVMargin
 * @type {ECVMargin}
 * @extends {LitElement}
 */
@customElement('ecv-margin')
export class ECVMargin extends LitElement {

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
     * Passa margin para todos os lados.
     * @property
     * @type {?string}
     */
    @property()
    all?: string;

    /**
     * Passa margin para o topo da div.
     * @property
     * @type {?string}
     */
    @property()
    top?: string = '0px';

    /**
     * Passa a margin para a direita. 
     * @property
     * @type {?string}
     */
    @property()
    right?: string = '0px';

    /**
     * Passa a margin para a esquerda. 
     * @property
     * @type {?string}
     */
    @property()
    left?: string = '0px';

    /**
    * Passa a margin para baixo. 
    * @property
    * @type {?string}
    */
    @property()
    bottom?: string = '0px';
    

    /**
     * @method
     * @override
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {
        const marginExpression = this.all !== undefined ? `margin: ${this.all}` : `margin-left: ${this.left};margin-right: ${this.right}; margin-top: ${this.top}; margin-bottom: ${this.bottom}`;
        return html`
            <style>
                :host{
                    ${marginExpression};
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-margin": ECVMargin
    }
}