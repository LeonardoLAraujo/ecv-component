import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import {TextStyle} from '../states/text-styles.js';
import { InputFieldSize } from "../enumerations/input-field-size";

/**
 * Representa um objeto que possibilita a customizacao do estilo visual do componente.
 * @export
 */
export type CheckboxStyle = {
    /**
     * backgroundColor - Cor de fundo do checkbox.
     *  @type {string | undefined}
     */
    backgroundColor?: string,
    /**
     * backgroundColorHover - Cor de fundo com o mouse em cima do checkbox.
     *  @type {string | undefined}
     */
    backgroundColorHover?: string,
     /**
     * backgroundColorChecked - Cor de fundo do checkbox com checked.
     *  @type {string | undefined}
     */
    backgroundColorChecked?: string,
     /**
     * colorChecked -  Cor da seta do checkbox com checked.
     *  @type {string | undefined}
     */
    colorChecked?: string,
}

/**
 * O componente é um input do tipo checkbox.
 * @export
 * @class ECVCheckBox
 * @extends {LitElement}
 */
@customElement('ecv-checkbox')
export class ECVCheckBox extends LitElement {

    /**
     * Propriedade para inserir o texto no label.
     * @property
     * @type {string}
     */
    @property()
    label: string = '';

    /**
     * Deixar o checkbox com checked.
     * @property
     * @type {boolean}
     */
    @property({type: Boolean})
    checked: boolean = false;

    /**
     * Objeto que estiliza o checkbox.
     * @property
     * @type {?CheckboxStyle}
     */
    @property({attribute: false}) 
    checkBoxStyle?: CheckboxStyle; 

    /**
     * Objeto que estiliza o label.
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    labelStyle?: TextStyle;   

    /**
     * Função change do checkbox.
     * @property
     * @type {?Function}
     */
    @property({attribute: false})
    onChanged?: Function;

    /**
     * Tamanho do checkbox passado pelo ENUM.
     * @property
     * @type {?InputFieldSize} 
     */
    @property({attribute: false})
    size?: InputFieldSize = InputFieldSize.NORMAL;

    /**
     * @constructor
     */
    constructor(){
        super();
    }

    /**
     * @method
     * @override
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {
        
        let formatedWidth: string;
        let formatedHeight: string;
        let sliderSize: number;
        let sliderSizeWidth: number;
        let sliderSizeHeight: number;
        let sliderSizeIconLeft: number;
        let sliderSizeIconTop: number;
        let sliderLeftTranslate: number;

        switch(this.size){
            case InputFieldSize.LITTLE:
                formatedWidth           = '27px';
                formatedHeight          = '27px';
                sliderSize              = 20;
                sliderLeftTranslate     = 7;
                sliderSizeIconLeft      = 8;
                sliderSizeWidth         = 6;
                sliderSizeHeight        = 16;
                sliderSizeIconTop       = 1;
            break;
            case InputFieldSize.BIG:
                formatedWidth           = '35px';
                formatedHeight          = '35px';
                sliderSize              = 36;
                sliderSizeIconLeft      = 9;
                sliderSizeWidth         = 12;
                sliderSizeHeight        = 22;
                sliderSizeIconTop       = 1;
                sliderLeftTranslate     = 6;
            break;
            default:
                formatedWidth           = '30px';
                formatedHeight          = '30px';
                sliderSize              = 23;
                sliderSizeIconLeft      = 9;
                sliderSizeIconTop       = 2;
                sliderSizeWidth         = 8;
                sliderSizeHeight        = 18;
                sliderLeftTranslate     = 7;
        }

        return html`
            <style>
                .container {
                    position: relative;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    display: flex;
                    align-items: center;
                }

                .container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                .checkmark {
                    position: relative;
                    top: 0;
                    left: 0;
                    margin-right: ${sliderLeftTranslate!}px;
                    height: ${formatedHeight};
                    width: ${formatedWidth};
                    background-color: ${this.checkBoxStyle?.backgroundColor === undefined ? "#eee" : this.checkBoxStyle?.backgroundColor} ;
                }

                .container:hover input ~ .checkmark {
                    background-color: ${this.checkBoxStyle?.backgroundColorHover === undefined ? "#ccc" : this.checkBoxStyle?.backgroundColorHover};
                }

                .container input:checked ~ .checkmark {
                    background-color:  ${this.checkBoxStyle?.backgroundColorChecked === undefined ? "#2196F3" : this.checkBoxStyle?.backgroundColorChecked};
                }

                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }

                .container input:checked ~ .checkmark:after {
                    display: block;
                }

                .container .checkmark:after {
                    left:   ${sliderSizeIconLeft!}px;
                    top:    ${sliderSizeIconTop!}px;
                    width:  ${sliderSizeWidth!}px;
                    height: ${sliderSizeHeight!}px;
                    border: ${this.checkBoxStyle?.colorChecked === undefined ? "solid white" : `solid ${this.checkBoxStyle?.colorChecked}`} ;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

                label{
                    width:              inherit;
                    font-size:          ${sliderSize!}px;
                    font-weight:        ${this.labelStyle?.weight};
                    color:              ${this.labelStyle?.color};
                    font-weight:        ${this.labelStyle?.weight};
                    font-family:        ${this.labelStyle?.family};
                    text-shadow:        ${this.labelStyle?.shadow};
                    letter-spacing:     ${this.labelStyle?.letterSpacing};
                    word-spacing:       ${this.labelStyle?.wordSpacing};
                    line-height:        ${this.labelStyle?.lineHeight};
                    text-align:         ${this.labelStyle?.textAlign};
                    text-transform:     ${this.labelStyle?.textTransform};
                    box-shadow:         ${this.labelStyle?.shadow};
                    text-indent:        ${this.labelStyle?.textIdent};
                    font-style:         ${this.labelStyle?.fontStyle};
                    white-space:        nowrap;
                }
            </style>
            
            <label class="container">
                <input type="checkbox" type="checkbox" ?checked=${this.checked} @change=${this.onChanged}>
                <span class="checkmark"></span>
                ${this.label}
            </label>
            
        `;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        "ecv-checkbox" : ECVCheckBox;
    }
}