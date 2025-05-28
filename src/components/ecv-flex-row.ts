import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa os tipos possiveis de posicionamento justificado dos seus componentes filhos no eixo horizontal.
 *
 * @export
 * @enum {number}
 */
export enum FlexRowJustifyContent{
    START   = "flex-start",
    CENTER  = "center",
    BETWEEN = "space-between",
    AROUND  = "space-around",
    EVENLY  = "space-evenly",
    END     = "flex-end",
}

/**
 * Representa os tipos possiveis de posicionamento alinhado dos seus componentes filhos no eixo vertical.
 *
 * @export
 * @enum {number}
 */
export enum FlexRowAlignItems{
    STRETCH = "stretch",
    CENTER  = "center",
    START   = "start",
    END     = "end",
}

/**
 * Representa os tipos possiveis de tamanho do eixo principal (horizontal) do componente atual.
 *
 * @export
 * @enum {number}
 */
export enum AxisSizeRow{
    MAX = "max",
    MIN = "min",
}

/**
 * Representa um componente que posiciona os filhos no eixo vertical e horizontal em forma de linha um item ao lado do outro para a criacao de layouts.
 *
 * @export
 * @class ECVFlexRow
 * @extends {LitElement}
 */
@customElement('ecv-flex-row')
export class ECVFlexRow extends LitElement {

/**
 * Propriedade reativa que especifica o tipo de posicionamento dos componentes filhos no eixo principal (horizontal) do componente atual.
 *
 * @type {FlexRowJustifyContent}
 */
@property()
    flexJustify: FlexRowJustifyContent = FlexRowJustifyContent.START;

/**
 * Propriedade reativa que especifica o tipo de posicionamento dos componentes filhos no eixo seucundario (vertical) do componente atual.
 *
 * @type {FlexRowAlignItems}
 */
@property()
    flexAlign: FlexRowAlignItems = FlexRowAlignItems.CENTER;

/**
 * Propriedade reativa que especifica o espaco vertical entre cada componente filho.
 *
 * @type {string}
 */
@property()
    rowGap: string = 'normal';

/**
 * Propriedade reativa que especifica o espaco horizontal entre cada componente filho.
 *
 * @type {string}
 */
@property()
    columnGap: string = 'normal';

/**
 * Propriedade reativa que especifica ambos espacos vertical e horizontal entre cada componente filho.
 *
 * @type {string}
 */
@property()
    gap: string = 'normal';

/**
 * Propriedade reativa que ajusta o posicionamento automatico dos componentes filho caso seja necessario.
 *
 * @type {string}
 */
@property()
    wrap: string = 'nowrap';

/**
 * Propriedade reativa que especifica o tamanho total do eixo principal (horizontal) do componente para o posicionamento dos componentes filhos.
 *
 * @type {AxisSizeRow}
 */
@property()
    axisSize: AxisSizeRow = AxisSizeRow.MAX;

/**
 * Propriedade reativa que especifica se o posicionamento dos componentes filhos devem ser invertidos ou nao.
 *
 * @type {boolean}
 */
@property({type: Boolean})
    reverseDirection: Boolean = false;

/**
 * Propriedade de controle interno do componente nao deve ser acessada ou modificada.
 *
 * @private
 * @type {string}
 */
private _height: string = 'auto';

/**
 * @override
 * @method
 */
connectedCallback(): void {
        super.connectedCallback();
        if(this.parentElement?.tagName === 'ECV-BOX-DECORATION' || this.parentElement?.tagName === 'ECV-FLEX-BOX'){
            this._height = '-webkit-fill-available';
        }
    }

/**
 * 
 *
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        return html`
            ${this.gap !== 'normal' ? html`
                <style>
                    :host{
                        display: flex;
                        width: ${this.axisSize === 'max' ? '100%' : 'fit-content'};
                        height: ${this._height};
                        gap: ${this.gap};
                        flex-wrap: ${this.wrap};
                        justify-content: ${this.flexJustify};
                        align-items: ${this.flexAlign};
                        flex-direction: ${this.reverseDirection ? 'row-reverse' : 'row'};
                    }
                </style>
            ` : html`
            <style>
                :host{
                    display: flex;
                    width: ${this.axisSize === 'max' ? '100%' : 'fit-content'};
                    height: ${this._height};
                    row-gap: ${this.rowGap};
                    flex-wrap: ${this.wrap};
                    column-gap: ${this.columnGap};
                    justify-content: ${this.flexJustify};
                    align-items: ${this.flexAlign};
                    flex-direction: ${this.reverseDirection ? 'row-reverse' : 'row'};
                }
            </style>`}
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-flex-row": ECVFlexRow
    }
}