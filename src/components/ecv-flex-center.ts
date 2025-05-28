import {LitElement, html, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * Representa um componente que centraliza o conteudo do mesmo em ambos os eixos horizontal e vertical em todo espaço disponivel.
 *
 * @export
 * @class ECVFlexCenter
 * @extends {LitElement}
 */
@customElement('ecv-flex-center')
export class ECVFlexCenter extends LitElement {

/**
 * Propriedade de controle interno do componente nao deve ser acessada ou modificada.
 *
 * @private
 * @type {string}
 */
private _flexDirection: string = 'row';

/**
 * Propriedade reativa que especifica ambos espacos vertical e horizontal entre cada componente filho.
 * @property
 * @type {strng}
 */
@property()
    gap: string = "";

/**
 * @override
 * @method
 */
connectedCallbac(): void {
    super.connectedCallback();
    if(this.parentElement?.tagName === 'ECV-FLEX-COLUMN'){
        this._flexDirection = 'column';
    }
}

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
                display: flex;                flex-direction: ${this._flexDirection};
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                gap: ${this.gap}
            }
            </style>
            <slot></slot>
        `;
 }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-flex-center": ECVFlexCenter
    }
}