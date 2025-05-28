import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Position - Enum definindo a posição da div.
 * @export
 * @enum {string}
 */
export enum Position {
    RELATIVE    = "relative",
    ABSOLUTE    = "absolute",
    STATIC      = "static",
    FIXED       = "fixed",
    STICKY      = "sticky",
}

/**
 * Classe renderiza uma div onde pode ser passado posicionamentos diferentes, como absolute, relative, fixed e etc.
 * @export
 * @class ECVPositionedBox
 * @type {ECVPositionedBox}
 * @extends {LitElement}
 */
@customElement('ecv-positioned-box')
export class ECVPositionedBox extends LitElement {

    /**
     * position - posicionar a div. 
     * @property
     * @type {Position}
     */
    @property()
    position: Position = Position.RELATIVE;

    /**
     * Movimentação a esquerda da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    left: string = 'auto';

    /**
     * Movimentação a direita da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    right: string = 'auto';

    /**
     * Movimentação do topo da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    top: string = 'auto';

    /**
     * Movimentação a baixo da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    bottom: string = 'auto';

    /**
     * Sobrepozição da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    zIndex: string = 'auto';

    /**
     * Largura da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    width: string = 'fit-content';

    /**
     * Altura da div. 
     * @property
     * @type {string}
     */
    @property({type: String})
    height: string = 'fit-content';

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
                    position: ${this.position};
                    left: ${this.left};
                    right: ${this.right};
                    top: ${this.top};
                    bottom: ${this.bottom};
                    z-index: ${this.zIndex};
                    width: ${this.width};
                    height: ${this.height};
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-positioned-box": ECVPositionedBox
    }
}