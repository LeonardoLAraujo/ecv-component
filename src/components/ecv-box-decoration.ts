import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * BoxDecorationStyle representa um objeto com propriedades 
 * para estilizacao do container principal (host) do componente.
 */
export type BoxDecorationStyle = {
    /**
     * Propriedade da largura do container atual.
     * @property
     * @type {string|undefined}
     */
    width?:  string,
    /**
     * Propriedade da altura do container atual.
     * @property
     * @type {string|undefined}
     */
    height?: string,
    /**
     * Propriedade de sombra do container atual.
     * @property
     * @type {string|undefined}
     */
    boxShadow?: string,
    /**
     * Propriedade de todos os lados da borda do container atual.
     * @property
     * @type {string|undefined}
     */
    borderAll?: string,
    /**
     * Propriedade borda topo do container atual.
     * @property
     * @type {string|undefined}
     */
    borderTop?: string,
    /**
     * Propriedade borda do lado direito do container atual.
     * @property
     * @type {string|undefined}
     */
    borderRight?: string,
    /**
     * Propriedade borda bottom do container atual.
     * @property
     * @type {string|undefined}
     */
    borderBottom?: string,
    /**
     * Propriedade borda lado esquerdo do container atual.
     * @property
     * @type {string | undefined}
     */
    borderLeft?: string,
    /**
     * Propriedade todos os lados do raio do container atual.
     * @property
     * @type {string | undefined}
     */
    borderAllRadius?: string,
    /**
     * Propriedade raio topo direito do container atual.
     * @property
     * @type {string | undefined}
     */
    borderTopRightRadius?: string,
    /**
     * Propriedade raio topo esquerdo do container atual.
     * @property
     * @type {string | undefined}
     */
    borderTopLeftRadius?: string,
    /**
     * Propriedade raio rodape direito do container atual.
     * @property
     * @type {string | undefined}
     */
    borderBottomRightRadius?: string,
    /**
     * Propriedade raio rodape esquerdo do container atual.
     * @property
     * @type {string | undefined}
     */
    borderBottomLeftRadius?: string,
    /**
     * Propriedade cor de fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundColor?: string,
    /**
     * Propriedade gradiente cor de fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundGradientColor?: string,
    /**
     * Propriedade imagem de fundo do container atual.
     * @porperty
     * @type {string | undefined}
     */
    backgroundImage?: string,
    /**
     * Propriedade tipo de ajuste do tamanho da imagem do fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundSize?: string,
    /**
     * Propriedade tipo de repeticao da imagem do fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundRepeat?: string,
    /**
     * Propriedade nivel de opacidade do container atual.
     * @property
     * @type {string | undefined}
     */
    opacity?: string,
    /**
     * Propriedade tipo de visibilidade do container atual.
     * @property
     * @type {string | undefined}
     */
    visibility?: string,
    /**
     * Propriedade estado de visibilidade do container atual.
     * @property
     * @type {string | undefined}
     */
    visible?: boolean,
    /**
     * Propriedade posicionamento da imagem do fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundPosition?: string,
    /**
     * Propriedade tipo de encaixe da imagem do fundo do container atual.
     * @property
     * @type {string | undefined}
     */
    backgroundAttachment?: string,
    /**
     * Propriedade todos os lados da margin do container atual.
     * @property
     * @type {string | undefined}
     */
    marginAll?: string,
    /**
     * Propriedade margin lado esquerdo do container atual.
     * @property
     * @type {string | undefined}
     */
    marginLeft?: string,
    /**
     * Propriedade margin lado direito do container atual.
     * @property
     * @type {string | undefined}
     */
    marginRight?: string,
    /**
     * Propriedade margin topo do container atual.
     * @property
     * @type {string |undefined}
     */
    marginTop?: string,
    /**
     * Propriedade margin rodape dp container atual.
     * @property
     * @type {string | undefined}
     */
    marginBottom?: string,
    /**
     * Propriedade altura maxima do container atual.
     * @property
     * @type {string | undefined}
     */
    maxHeight?: string,
    /**
     * Propriedade largura maxima do container atual.
     * @property
     * @type {string | undefined}
     */
    maxWidth?: string,
    /**
     * Propriedade altura minima do container atual.
     * @property
     * @type {string | undefined}
     */
    minHeight?: string,
    /**
     * Propriedade largura minima do container atual.
     * @property
     * @type {string | undefined}
     */
    minWidth?: string,
    /**
     * Propriedade todos os lados padding do container atual.
     * @property
     * @type {string | undefined}
     */
    paddingAll?: string,
    /**
     * Propriedade padding lado esquerdo do container atual.
     * @property
     * @type {string | undefined}
     */
    paddingLeft?: string,
    /**
     * Propriedade padding lado direito do container atual.
     * @property
     * @type {string | undefined}
     */
    paddingRight?: string,
    /**
     * Propriedade padding rodape do container atual.
     * @property
     * @type {string | undefined}
     */
    paddingBottom?: string,
    /**
     * Propriedade pading topo do container atual.
     * @property
     * @type {string | undefined}
     */
    paddingTop?: string,
}

/**
 * ECVBoxDecoration representa um container, utilizado para agrupar componentes, que pode ser customizado.
 * @public
 * @class ECVBoxDecoration
 * @extends {LitElement}
 */
@customElement('ecv-box-decoration')
export class ECVBoxDecoration extends LitElement {

/**
 * Propriedade reativa que permite customizacao do container.
 *@property
 * @type {?BoxDecorationStyle}
 */
@property({attribute: false})
decoration?: BoxDecorationStyle;

/**
 * @inheritdoc
 * @override
 * @method
 * @template {void} - Metodo chamado quando o component e conectado ao DOM.
 */
connectedCallback(): void {
        super.connectedCallback();
    }

/**
 * @inheritdoc
 * @override
 * @method
 * @returns {TemplateResult}
 */
render(): TemplateResult {
        return html`
            <style>
                :host{
                    display:                    ${this.decoration?.visible === undefined ? "block" : this.decoration?.visible ? 'block' : 'none'};
                    border-top:                 ${this.decoration?.borderTop === undefined ? "0" : this.decoration?.borderTop };
                    border-right:               ${this.decoration?.borderRight === undefined ? "0" : this.decoration?.borderRight};
                    border-bottom:              ${this.decoration?.borderBottom === undefined ? "0" : this.decoration?.borderBottom};
                    border-left:                ${this.decoration?.borderLeft  === undefined ? "0" : this.decoration?.borderLeft};
                    border:                     ${this.decoration?.borderAll === undefined ? "" : this.decoration?.borderAll};
                    border-top-right-radius:    ${this.decoration?.borderAllRadius === undefined ? this.decoration?.borderTopRightRadius === undefined ? "0" : this.decoration?.borderTopRightRadius : "0"};
                    border-top-left-radius:     ${this.decoration?.borderAllRadius === undefined ? this.decoration?.borderTopLeftRadius === undefined ? "0" : this.decoration?.borderTopLeftRadius : "0"};
                    border-bottom-right-radius: ${this.decoration?.borderAllRadius === undefined ? this.decoration?.borderBottomRightRadius === undefined ? "0" : this.decoration?.borderBottomRightRadius : "0"};
                    border-bottom-left-radius:  ${this.decoration?.borderAllRadius === undefined ? this.decoration?.borderBottomLeftRadius === undefined ? "0" : this.decoration?.borderBottomLeftRadius : "0"};
                    border-radius:              ${this.decoration?.borderAllRadius === undefined ? "0" : this.decoration?.borderAllRadius};
                    background-color:           ${this.decoration?.backgroundColor === undefined ? "none" : this.decoration?.backgroundColor};
                    box-shadow:                 ${this.decoration?.boxShadow === undefined ? "none" : this.decoration?.boxShadow};
                    width: ${this.decoration?.width === undefined  && this.parentElement?.tagName === 'ECV-FLEX-BOX' ? "-webkit-fill-available" : this.decoration?.width === undefined ? 'auto' : this.decoration?.width};
                    height: ${this.decoration?.height === undefined && this.parentElement?.tagName === 'ECV-FLEX-BOX' ? "-webkit-fill-available" : this.decoration?.height === undefined ? 'auto' : this.decoration.height};
                    background-image: ${this.decoration?.backgroundImage === undefined ? this.decoration?.backgroundGradientColor : this.decoration?.backgroundImage !== 'none' && this.decoration?.backgroundGradientColor === undefined ?  `url(${this.decoration?.backgroundImage})` : this.decoration?.backgroundGradientColor};
                    background-size:            ${this.decoration?.backgroundSize === undefined ? "" : this.decoration?.backgroundSize !== 'none' ? 'cover' : 'initial'};
                    background-repeat:          ${this.decoration?.backgroundRepeat === undefined ? "" : this.decoration?.backgroundRepeat !== 'none' ? 'no-repeat' : 'initial'};
                    background-position:        ${this.decoration?.backgroundPosition === undefined ? "relative" : this.decoration?.backgroundPosition};
                    opacity:                    ${this.decoration?.opacity  === undefined ? "1" : this.decoration?.opacity};
                    visibility:                 ${this.decoration?.visibility === undefined ? "visible" : this.decoration?.visibility};
                    background-attachment:      ${this.decoration?.backgroundAttachment === undefined ? "scroll" : this.decoration?.backgroundAttachment};
                    margin-left:                ${this.decoration?.marginLeft   === undefined ? "0" : this.decoration?.marginLeft};
                    margin-right:               ${this.decoration?.marginRight === undefined ? "0" : this.decoration?.marginRight};
                    margin-top:                 ${this.decoration?.marginTop === undefined ? "0" : this.decoration?.marginTop};
                    margin-bottom:              ${this.decoration?.marginBottom === undefined ? "0" : this.decoration?.marginBottom};
                    margin:                     ${this.decoration?.marginAll === undefined ? "none" : this.decoration?.marginAll};
                    max-height:                 ${this.decoration?.maxHeight === undefined ? "none" : this.decoration?.maxHeight}; 
                    max-width:                  ${this.decoration?.maxWidth === undefined ? "none" : this.decoration?.maxWidth}; 
                    min-height:                 ${this.decoration?.minHeight === undefined ? "0" : this.decoration?.minHeight}; 
                    min-width:                  ${this.decoration?.minWidth === undefined ? "0" : this.decoration?.minWidth}; 
                    padding-left:               ${this.decoration?.paddingLeft === undefined ? "0" : this.decoration?.paddingLeft};
                    padding-right:              ${this.decoration?.paddingRight === undefined ? "0" : this.decoration?.paddingRight};
                    padding-bottom:             ${this.decoration?.paddingBottom === undefined ? "0" : this.decoration?.paddingBottom};
                    padding-top:                ${this.decoration?.paddingTop === undefined ? "0" : this.decoration?.paddingTop};
                    padding:                    ${this.decoration?.paddingAll === undefined ? "none" : this.decoration?.paddingAll};
                }
            </style>
            <slot></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-box-decoration": ECVBoxDecoration
    }
}