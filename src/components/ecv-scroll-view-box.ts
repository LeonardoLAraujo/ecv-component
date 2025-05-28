import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Uma div com scroll já instanciado.
 * @export
 * @class ECVScrollViewBox
 * @type {ECVScrollViewBox}
 * @extends {LitElement}
 */
@customElement('ecv-scroll-view-box')
export class ECVScrollViewBox extends LitElement {

    /**
     * width - Largura da div.
     * @property
     * @type {string}
     */
    @property()
    width: string = 'auto';

    /**
     * height - Altura da div.
     * @property
     * @type {string}
     */
    @property()
    height: string = 'auto';
    
    /**
     * overflow - Scroll da div. 
     * @property
     * @type {string}
     */
    @property()
    overflow: string = 'auto';

    /**
     * overflowX - Scroll horizontal da div. 
     * @property
     * @type {string}
     */
    @property()
    overflowX: string = 'visible';

    /**
    * overflowX - Scroll vertical da div. 
    * @property
    * @type {string}
    */
    @property()
    overflowY: string = 'visible';

    /**
     * behavior - Comportamento do Scroll da div. 
     * @property
     * @type {string}
     */
    @property()
    behavior: string = 'auto';

    /**
     * @method
     * @override
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {
        return html`
            ${this.overflowX !== 'visible' || this.overflowY !== 'visible' ? html`
            <style>
                :host{
                    display: block;
                    width: ${this.width};
                    height: ${this.height};
                    overflow-x: ${this.overflowX};
                    overflow-y: ${this.overflowY};
                    scroll-behavior: ${this.behavior};
                }
            </style>
            ` : html`
            <style>
                :host{
                    display: block;
                    width: ${this.width};
                    height: ${this.height};
                    overflow: ${this.overflow};
                    scroll-behavior: ${this.behavior};
                }
            </style>
            `}
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-scroll-view-box": ECVScrollViewBox
    }
}