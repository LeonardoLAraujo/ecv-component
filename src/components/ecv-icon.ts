import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import { IconTypes } from '../enumerations/icon-types';
import { TextStyle } from '../states/text-styles';


/**
 * Representa um componente que possui um icone.
 *
 * @export
 * @class ECVIcon
 * @extends {LitElement}
 */
@customElement('ecv-icon')
export class ECVIcon extends LitElement {


/**
 * 
 *
 * @static
 * @type {CSSResult}
 */
static styles: CSSResult = css`

        :host{
            display: flex;
            justify-content: center;
            align-items: center;
        }

    `;
    
/**
 * Propriedade de controle interno do componente nao deve ser acessada e nem modificada.
 *
 * @private
 * @type {?(Element | null)}
 */
private _checkedDocument?:  Element | null;  

/**
 * Propriedade reativa interna que contem o endereco atual do material design icons. 
 * @property
 * @type {string}
 */
@state()
    materailSymbolsAddress: string = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

/**
 * Propriedade reativa que representa o symbolo do icone atual.
 * @property
 * @type {IconTypes}
 */
@property()
    icon: IconTypes = IconTypes.Add;

/**
 * Propriedade reativa que representa se o icone deve ser preenchido ou nao.
 * @property
 * @type {boolean}
 */
@property({type: Boolean})
    filled: boolean = false;

/**
 * Propriedade reativa que representa um objeto com configuracoes de customizacao do icone.
 * @property
 * @type {?TextStyle}
 */
@property({attribute: false})
    iconStyle?: TextStyle;

/**
 * Metodo que adiciona uma folha de estilo CSS que contem o endereco do Material Design Icons para o documento atual se ainda nao existir.
 * 
 * @private
 * @method
 */
private _addMaterialSymbolsAddress(): void {

        if(this._checkedDocument === null || undefined) {
            const link: HTMLLinkElement = document.createElement('link');
            link.href = `${this.materailSymbolsAddress}`;
            link.rel = "stylesheet";
            document.head.appendChild(link as HTMLElement);
        }
    }

/**
 * @inheritdoc
 * @method
 */
override connectedCallback(): void {
        super.connectedCallback();
        this._checkedDocument = document.querySelector(`[href="${this.materailSymbolsAddress}"]`);
        this._addMaterialSymbolsAddress();
    }


/**
 * 
 * @override
 * @method
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        
        return html `

            ${this.filled ? html`<style>
            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-weight: 'normal';
                font-style: normal;
                font-size: ${this.iconStyle?.size ?? '24px'};
                display: inline-block;
                line-height: 1;
                text-transform: none;
                letter-spacing: normal;
                word-wrap: normal;
                white-space: nowrap;
                direction: ltr;
                font-variation-settings:
                'FILL' 1,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
            }
            </style>` : html`
                <style>
                    .material-symbols-outlined {
                        font-family: 'Material Symbols Outlined';
                        font-weight: 'normal';
                        font-style: normal;
                        font-size: ${this.iconStyle?.size ?? '24px'};
                        display: inline-block;
                        line-height: 1;
                        text-transform: none;
                        letter-spacing: normal;
                        word-wrap: normal;
                        white-space: nowrap;
                        direction: ltr;
                    }
                </style>
            `}
            <ecv-text-span class="material-symbols-outlined" .textStyle=${this.iconStyle}>${this.icon}</ecv-text-span>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-icon": ECVIcon
    }
}