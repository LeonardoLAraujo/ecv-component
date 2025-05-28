import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TextStyle } from "../states/text-styles";

/**
 * Representa um componente que contem um hyperlink para um especifico endereco na web.
 *
 * @export
 * @class ECVHyperLink
 * @extends {LitElement}
 */
@customElement('ecv-hyperlink')
export class ECVHyperLink extends LitElement {

/**
 * Propriedade reativa que representa o endereço para onde a navegacao sera feita.
 * @property
 * @type {string}
 */
@property()
    link: string = '';

/**
 * Propriedade reativa que representa o estado de visitado do hyperlink.
 * @property
 * @type {string}
 */
@property({attribute: false})
    visitedState?: TextStyle;

/**
 * Propriedade reativa que representa o estado de clicado do hyperlink.
 * @property
 * @type {string}
 */
@property({attribute: false})
    clickedState?: TextStyle;

/**
 * Propriedade reativa que representa o estado de hover do hyperlink.
 * @property
 * @type {string}
 */
@property({attribute: false})
    hoverState?: TextStyle;

/**
 * Propriedade reativa que representa se o hyperlink possuira um traco abaixo do mesmo.
 * @property
 * @type {boolean}
 */
@property({type: Boolean})
    hasUnderline: boolean = true;

/**
 * Propriedade reativa que representa se o hyper link devera abrir o endereco externamente.
 * @property
 * @type {string}
 */
@property()
    openOutside: string = 'false';

/**
 * Propriedade reativa que representa o tamanho da fonte do hyperlink.
 * @property
 * @type {string}
 */
@property()
    size: string = "16px";

/**
 * @inheritdoc
 * @override
 * @method
 * @returns {TemplateResult}
 */
override render(): TemplateResult {
        return html`
            <style>
                :host{
                    display: inline-block;
                }

                a{
                    text-decoration: ${this.hasUnderline ? 'underline' : 'none'};
                    font-size: ${this.size};
                }

                a:visited{
                    color: ${this.visitedState?.color};
                    font-size: ${this.visitedState?.size};
                    font-weight: ${this.visitedState?.weight};
                    font-family: ${this.visitedState?.family};
                    letter-spacing: ${this.visitedState?.letterSpacing};
                    line-height: ${this.visitedState?.lineHeight};
                    text-align: ${this.visitedState?.textAlign};
                    font-style: ${this.visitedState?.fontStyle};
                    text-indent: ${this.visitedState?.textIdent};
                    text-shadow: ${this.visitedState?.shadow};
                    text-transform: ${this.visitedState?.textTransform};
                }

                a:active{
                    color: ${this.clickedState?.color};
                    font-size: ${this.clickedState?.size};
                    font-weight: ${this.clickedState?.weight};
                    font-family: ${this.clickedState?.family};
                    letter-spacing: ${this.clickedState?.letterSpacing};
                    line-height: ${this.clickedState?.lineHeight};
                    text-align: ${this.clickedState?.textAlign};
                    font-style: ${this.clickedState?.fontStyle};
                    text-indent: ${this.clickedState?.textIdent};
                    text-shadow: ${this.clickedState?.shadow};
                    text-transform: ${this.clickedState?.textTransform};
                }

                a:hover{
                    color: ${this.hoverState?.color};
                    font-size: ${this.hoverState?.size};
                    font-weight: ${this.hoverState?.weight};
                    font-family: ${this.hoverState?.family};
                    letter-spacing: ${this.hoverState?.letterSpacing};
                    line-height: ${this.hoverState?.lineHeight};
                    text-align: ${this.hoverState?.textAlign};
                    font-style: ${this.hoverState?.fontStyle};
                    text-indent: ${this.hoverState?.textIdent};
                    text-shadow: ${this.hoverState?.shadow};
                    text-transform: ${this.hoverState?.textTransform};
                }

            </style>
            <a href=${this.link} target=${this.openOutside === 'true' ? '_blank': '_self'} ><slot></slot></a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-hyperlink": ECVHyperLink
    }
}