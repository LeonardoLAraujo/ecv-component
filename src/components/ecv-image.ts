import {LitElement, html, css, CSSResult, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * Representa um objeto de configuracoes de customizacao de estilo do  componente imagem.
 *
 * @export
 */
export type ImageDecoration = {

    /**
     * Propriedade todos os lados da borda da imagem.
     * @property
     * @type {string | undefined}
     */
    borderAll?:       string,
    /**
     * Propriedade raio da borda da imagem todos os lados.
     * @property
     * @type {string | undefined} 
     */
    borderAllRadius?: string,
    /**
     * Propriedade efeito de filtro.
     * @property
     * @type {string | undefined}
     */
    filterEffect?:    string,
    /**
     * Propriedade altura da imagem do componente.
     * @property
     * @type {string | undefined}
     */
    height?:          string,
    /**
     * Propriedade altura maxima da imagem do componente.
     * @property
     * @type {string | undefined}
     */
    maxHeight?:       string,
    /**
     * Propriedade largura maxima da imagem do componente.
     * @property
     * @type {string | undefined}
     */
    maxWidth?:        string,
    /**
     * Propriedade nivel de opacidade da imagem do componente.
     * @property
     * @type {string | undefined} 
     */
    opacity?:         string,
    /**
     * Propriedade nivel de sombra da borda da imagem do componente.
     * @property
     * @type {string | undefined}
     */
    shadow?:          string,
    /**
     * Propriedade largura do componente.
     * @property
     * @type {string | undefined}
     */
    width?:           string,

}

/**
 * Representa um componente de imagem com configuracoes de customizacao.
 *
 * @export
 * @class ECVImage
 * @extends {LitElement}
 */
@customElement('ecv-image')
export class ECVImage extends LitElement {

/**
 * 
 *
 * @static
 * @type {CSSResult}
 */
static styles: CSSResult = css`

        :host{
            display: flex;
        }

    `;

/**
 * Propriedade reativa que representa o endereco do arquivo de imagem do componente.
 * @property
 * @type {string}
 */
@property()
    source: string = '';

/**
 * Propriedade reativa que representa a descricao da imagem do componente.
 * @property
 * @type {string}
 */
@property()
    description: string = '';

/**
 * Propriedade reativa que representa um objeto de customizacao de estilo da imagem do componente.
 * @property
 * @type {?ImageDecoration}
 */
@property({attribute: false})
    imageDecoration?: ImageDecoration;

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
                    height: ${this.imageDecoration?.height};
                    width: ${this.imageDecoration?.width};
                }

                img{
                    width: 100%;
                    height: auto;
                    max-width: ${this.imageDecoration?.maxWidth};
                    max-height: ${this.imageDecoration?.maxHeight};
                    filter: ${this.imageDecoration?.filterEffect};
                    border: ${this.imageDecoration?.borderAll};
                    border-radius: ${this.imageDecoration?.borderAllRadius};
                    opacity: ${this.imageDecoration?.opacity};
                    box-shadow: ${this.imageDecoration?.opacity};
                    object-fit: contain;
                }

            </style>
            <img src=${this.source} alt=${this.description}>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-image": ECVImage
    }
}