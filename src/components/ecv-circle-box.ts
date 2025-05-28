import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa um container circular customizavel usado na criacao de layouts.
 * @export
 * @class ECVCircleBox
 * @extends {LitElement}
 */
@customElement('ecv-circle-box')
export class ECVCircleBox extends LitElement {

/**
 * Propriedade tamanho do raio do container.
 * @property
 * @type {string | undefined}
 */
@property({type: String})
    size?: string = '48px';

/**
 * Propriedade fundo da imagem do container.
 * @property
 * @type {string | undefined}
 */
@property({type: String})
    backgroundImage?: string = 'none';

/**
 * Propriedade cor de fundo do container.
 * @property
 * @type {string | undefined}
 */
@property({type: String})
    color?: string = 'transparent';

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
                    width: ${this.size};
                    height: ${this.size};
                    border-radius: 50%;
                    background-color: ${this.color};
                    background-image: ${this.backgroundImage !== 'none' ? `url(${this.backgroundImage})` : 'none'};
                    background-size: ${this.backgroundImage !== 'none' ? 'cover' : 'auto'};
                    background-repeat: no-repeat;
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-circle-box": ECVCircleBox
    }
}