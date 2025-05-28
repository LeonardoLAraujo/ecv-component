import { LitElement, html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MaterialColors } from "../utils/colors/material-colors";
import { InputFieldSize } from "../enumerations/input-field-size";

/**
 * Classe renderiza um switch.
 * @export
 * @class ECVSwitch
 * @type {ECVSwitch}
 * @extends {LitElement}
 */
@customElement('ecv-switch')
export class ECVSwitch extends LitElement {

    /**
     * Passando true o Switch já estará checked desdo ínicio. 
     * @property
     * @type {boolean}
     */
    @property({type: Boolean})
    checked: boolean = false;

    /**
     * checkedColor - Cor do Switch quando estivar com checked.
     * @property
     * @type {?string}
     */
    @property()
    checkedColor?: string = MaterialColors.blue[500];

    /**
     * uncheckedColor - Cor do Switch quando não estivar com checked. 
     * @property
     * @type {?string}
     */
    @property()
    uncheckedColor?: string = MaterialColors.grey[500];

    /**
     * sliderColor - Cor do Switch. 
     * @property
     * @type {?string}
     */
    @property()
    sliderColor?: string = MaterialColors.shade.white;

    /**
    * Função change do Switch.
    * @property
    * @type {Function}
    */
    @property({attribute: false})
    onChecked?: Function = () => {};

    /**
     * Tamanho do switch passado pelo ENUM. 
     * @property
     * @type {?InputFieldSize}
     */
    @property({attribute: false})
    size?: InputFieldSize = InputFieldSize.NORMAL;

    /**
     * @method
     * @override
     * @returns {TemplateResult}
     */
    override render(): TemplateResult {

        let formatedWidth: string;
        let formatedHeight: string;
        let sliderSize: number;
        let sliderPosition: number;
        let sliderLeftTranslate: number;

        switch(this.size){
            case InputFieldSize.LITTLE:
                formatedWidth = '40px';
                formatedHeight = '24px';
                sliderSize = 18;
                sliderPosition = 2;
                sliderLeftTranslate = 18;
            break;
            case InputFieldSize.BIG:
                formatedWidth = '70px';
                formatedHeight = '44px';
                sliderSize = 36;
                sliderPosition = 4;
                sliderLeftTranslate = 25;
            break;
            default:
                formatedWidth = '60px';
                formatedHeight = '34px';
                sliderSize = 26;
                sliderPosition = 4;
                sliderLeftTranslate = 26;
        }

        return html`
            <style>
                
                :host{
                    display: block;
                }

                .switch{
                    position: relative;
                    display: inline-block;
                    width: ${formatedWidth};
                    height: ${formatedHeight};
                }

                .switch input{
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider{
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: ${this.uncheckedColor};
                    -webkit-transition: .4s;
                    transition: .4s;
                }

                .slider::before {
                    position: absolute;
                    content: "";
                    height: ${sliderSize}px;
                    width:  ${sliderSize}px;
                    left: ${sliderPosition}px;
                    bottom: 4px;
                    background-color: ${this.sliderColor};
                    -webkit-transition: .4s;
                    transition: .4s;
                }

                input:checked + .slider{
                    background-color: ${this.checkedColor};
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px ${this.checkedColor};
                }

                input:checked + .slider:before{
                    -webkit-transform: translateX(${sliderLeftTranslate}px);
                    -ms-transform: translateX(${sliderLeftTranslate}px);
                    transform: translateX(${sliderLeftTranslate}px);
                }

                /* Rounded sliders*/
                .slider.round{
                    border-radius: 34px;
                }

                .slider.round:before{
                    border-radius: 50%;
                }

            </style>
            <label class="switch">
                <input type="checkbox" ?checked=${this.checked} @change=${() => {
                    this.checked = !this.checked;
                    const selfInstance: ECVSwitch | undefined = this;
                    this.onChecked!(selfInstance);
                }}>
                <span class="slider round"></span>
            </label>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        "ecv-switch": ECVSwitch
    }
}