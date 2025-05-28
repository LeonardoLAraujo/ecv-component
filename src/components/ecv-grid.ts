import { LitElement, html, css, TemplateResult, CSSResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa um componente que possibilita a criacao de layouts posicionando seus componentes filhos em um grid especifico.
 *
 * @export
 * @class ECVGrid
 * @extends {LitElement}
 */
@customElement('ecv-grid')
export class ECVGrid extends LitElement {

/**
 * 
 *
 * @static
 * @type {CSSResult}
 */
static styles: CSSResult = css`

    `;

/**
 * Propriedade reativa que especifica o espacamento entre colunas do grid.
 * @property
 * @type {string}
 */
@property({type: String})
    columnGap: string = 'normal';

/**
 * Propriedade reativa que especifica o espacamento entre linhas do grid.
 * @property
 * @type {string}
 */
@property({type: String})
    rowGap: string = 'normal';

/**
 * Propriedade reativa que especifica ambos espacamentos entre coluna e linha do grid.
 * @property
 * @type {string}
 */
@property({type: String})
    gap: string = 'normal';

/**
 * Propriedade reativa que especifica as colunas do grid.
 * @property
 * @type {string}
 */
@property({type: String})
    columns: string = 'none';

/**
 * Propriedade reativa que especifica as linhas do grid.
 * @property
 * @type {string}
 */
@property({type: String})
    rows: string = 'none';

/**
 * @inheritdoc
 * @override
 * @method
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        return html`
        ${this.gap !== 'normal' ? html`<style>
            :host{
                display: grid;
                grid-template-columns: ${this.columns};
                grid-template-rows: ${this.rows};
                gap: ${this.gap};
           }
        </style>` : html`<style>
           :host{
                display: grid;
                grid-template-columns: ${this.columns};
                grid-template-rows: ${this.rows};
                column-gap: ${this.columnGap};
                row-gap: ${this.rowGap};
           }
        </style>`}
        <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-grid": ECVGrid
    }
}