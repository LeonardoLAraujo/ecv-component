import { LitElement, html,TemplateResult} from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * Representa os tipos possiveis de posicionamento justificado dos seus componentes filhos no eixo vertical. 
 *
 * @export
 * @enum {number}
 */
export enum FlexColumnJustifyContent{
    START   = "flex-start",
    CENTER  = "center",
    BETWEEN = "space-between",
    AROUND  = "space-around",
    EVENLY  = "space-evenly",
    END     = "flex-end",
}

/**
 * Representa os tipos possiveis de posicionamento alinhado dos seus componentes filhos no eixo horizontal.
 *
 * @export
 * @enum {number}
 */
export enum FlexColumnAlignItems{
    STRETCH = "stretch",
    CENTER  = "center",
    START   = "start",
    END     = "end",
}

/**
 * Representa os tipos possiveis de tamanho do eixo principal (vertical) do componente atual.
 *
 * @export
 * @enum {number}
 */
export enum AxisSizeColumn{
    MAX = "max",
    MIN = "min",
}

/**
 * Representa um componente que posiciona os filhos no eixo vertical e horizontal em forma de coluna um item embaixo do outro para a criacao de layouts.  
 *
 * @export
 * @class ECVFlexColumn
 * @extends {LitElement}
 */
@customElement('ecv-flex-column')
export class ECVFlexColumn extends LitElement {

/**
 * Propriedade reativa que especifica o tipo de posicionamento dos componentes filhos no eixo principal (vertical) do componente atual.
 * @property
 * @type {FlexColumnJustifyContent}
 */
@property()
    flexJustify: FlexColumnJustifyContent = FlexColumnJustifyContent.START;

/**
 *Propriedade reativa que especifica o tipo de posicionamento dos componentes filhos no eixo seucundario (horizontal) do componente atual. 
 * @property
 * @type {FlexColumnAlignItems}
 */
@property()
    flexAlign: FlexColumnAlignItems = FlexColumnAlignItems.CENTER;

/**
 * Propriedade reativa que especifica o espaco vertical entre cada componente filho. 
 * @property
 * @type {string}
 */
@property()
    rowGap: string = 'normal';

/**
 * Propriedade reativa que especifica o espaco horizontal entre cada componente filho.
 * @property
 * @type {string}
 */
@property()
    columnGap: string = 'normal';

/**
 * Propriedade reativa que especifica ambos espacos vertical e horizontal entre cada componente filho.
 * @property
 * @type {string}
 */
@property()
    gap: string = 'normal';

/**
 * Propriedade reativa que ajusta o posicionamento automatico dos componentes filho caso seja necessario.
 * @property
 * @type {string}
 */
@property()
    wrap: string = 'nowrap';

/**
 * Propriedade reativa que especifica o tamanho total do eixo principal (vertical) do componente para o posicionamento dos componentes filhos.
 * @property
 * @type {AxisSizeColumn}
 */
@property()
    axisSize: AxisSizeColumn = AxisSizeColumn.MAX;

/**
 * Propriedade reativa que especifica se o posicionamento dos componentes filhos devem ser invertidos ou nao.
 * @property
 * @type {boolean}
 */
@property({type: Boolean})
    reverseDirection: boolean = false;

/**
 * Propriedade de controle interno do componente nao deve ser acessada ou modificada.
 *
 * @private
 * @type {string}
 */
private _width: string = 'auto';

/**
 * @override
 * @method
 */
connectedCallback(): void {
        super.connectedCallback();
        if(this.parentElement?.tagName === 'ECV-BOX-DECORATION' || this.parentElement?.tagName === 'ECV-FLEX-BOX'){
            this._width = '100%';
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
            ${this.gap !== 'normal' ? html`
                <style>
                    :host{
                        display: flex;
                        height: ${this.axisSize === 'max' ? '100%' : 'fit-content'};
                        width: ${this._width};
                        gap: ${this.gap};
                        flex-wrap: ${this.wrap};
                        justify-content: ${this.flexJustify};
                        align-items: ${this.flexAlign};
                        flex-direction: ${this.reverseDirection ? 'column-reverse' : 'column'};
                    }
                </style>
            ` : html`
            <style>
                :host{
                    display: flex;
                    height: ${this.axisSize === 'max' ? '100%' : 'fit-content'};
                    width: ${this._width};
                    row-gap: ${this.rowGap};
                    column-gap: ${this.columnGap};
                    flex-wrap: ${this.wrap};
                    justify-content: ${this.flexJustify};
                    align-items: ${this.flexAlign};
                    flex-direction: ${this.reverseDirection ? 'column-reverse' : 'column'};
                }
            </style>`}
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-flex-column": ECVFlexColumn
    }
}