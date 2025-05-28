import { LitElement, html, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-box.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-text.js';
import '../states/button-state.js';
import '../components/ecv-icon.js';
import '../components/ecv-grid.js';
import '../components/ecv-icon.js';
import '../components/ecv-icon-button.js';
import '../components/ecv-positioned-box.js';
import '../components/ecv-switch.js';
import '../components/ecv-hyperlink.js';
import { BoxDecorationStyle } from "../components/ecv-box-decoration.js";
import { MaterialColors } from "../utils/colors/material-colors.js";
import { ImageDecoration } from "../components/ecv-image.js";
import { Position } from "../components/ecv-positioned-box.js";
import "../components/ecv-checkbox.js";
import "../components/ecv-textrarea.js";
import { InputFieldSize } from "../enumerations/input-field-size.js";
import { TextStyle } from "../states/text-styles.js";
import { FontWeight } from "../enumerations/font-weight.js";
import "../components/ecv-scroll-view-box.js";
import "../components/ecv-text-field.js";
import { ButtonStyle } from "../components/ecv-text-button.js";
import "../components/ecv-switch.js";
import { ECVSwitch } from "../components/ecv-switch.js";
import { HoverState } from "../states/button-state.js";
import { IconTypes } from "../enumerations/icon-types.js";
//import { FlexColumnJustifyContent } from "../components/ecv-flex-column.js";

@customElement('building-complex-layouts')
export class BuildingComplexLayouts extends LitElement {

    private _myLayoutWidget(): TemplateResult {

        return html`
        <style>
            :host{
                display: block;
                width: 100vw;
                height: 100vh;
            }
        </style>
        <ecv-grid columns="100px 100px 100px" rows="100px 100px 100px" gap="10px">
            <ecv-text>A</ecv-text>
            <ecv-text>B</ecv-text>
            <ecv-text>C</ecv-text>
        </ecv-grid>
        `;
    }

    teste(){

        const CONTAINER: BoxDecorationStyle = {
            width: "180px",
            height: "180px",
            marginAll: "60px",
            backgroundColor: MaterialColors.blue[500],
            boxShadow: "6px 9px 54px -15px rgba(0,0,0,0.56)",
        }

        const MEU_TEXTAREA: BoxDecorationStyle = {
            width: "400px",
            marginBottom: "40px",
        }

        const PLACEHOLDER: TextStyle = {
            size: "25px",
            fontStyle: "italic",
            color: MaterialColors.blue[500],
        }


        return html`
            <ecv-positioned-box>
                <ecv-box-decoration .decoration=${{backgroundColor: "black", width: "300px", height: "300px", marginAll: "60px"}}>
                    <ecv-positioned-box position=${Position.ABSOLUTE} left="180px" bottom="60px">
                        <ecv-box-decoration .decoration=${CONTAINER}></ecv-box-decoration>
                    </ecv-positioned-box>
                </ecv-box-decoration>
            </ecv-positioned-box>

            <ecv-margin all="25px">
                <ecv-checkbox label="Menu primeiro CheckBox"  .size=${InputFieldSize.BIG}></ecv-checkbox>
            </ecv-margin>

            <ecv-textarea rows="10" columns="16" hint="Placeholder" .textAreaStyle=${MEU_TEXTAREA} .hintSyle=${PLACEHOLDER}></ecv-textarea>

            <ecv-scroll-view-box width="200px" height="200px">
                <ecv-box-decoration .decoration=${{height: "450px", backgroundColor: "#2196F3", marginBottom: "20px"}}></ecv-box-decoration>
            </ecv-scroll-view-box>

            <ecv-margin bottom="20rem"></ecv-margin>

            <ecv-box-decoration .decoration=${{width: "200px"}}>
                <ecv-text-field hint="Placeholder" .hintSyle=${PLACEHOLDER}></ecv-text-field>
            </ecv-box-decoration>


            <ecv-margin all="50px">
                <ecv-switch .onChecked=${(event: ECVSwitch) => {this.estadoSwitch(event)}}></ecv-switch>
            </ecv-margin>
        `;
    }

    estadoSwitch(event: ECVSwitch){
        console.log(event.checked);
    }

    testeImg(): TemplateResult {
        const ESTILIZANDO_IMAGEM: ImageDecoration = {
            width: "600px",
            height: "400px",
            borderAllRadius: "20px",
            filterEffect: "grayscale(50%)",
          }

        return html`
            <ecv-image source="https://www.publicdomainpictures.net/pictures/240000/nahled/lake-landscape-1512925858ote.jpg" .imageDecoration=${ESTILIZANDO_IMAGEM}></ecv-image>
        `;
    }

    testeButton(): TemplateResult {
        
        const ESTILIZANDO_BOTAO: ButtonStyle = {
            backgroundColor: `${MaterialColors.blue[500]}`,
            paddingAll: "10px",
        }
        
        const ESTILIZANDO_HOVER: HoverState = {
            backgroundColor: `${MaterialColors.orange[500]}`,
            color: `${MaterialColors.grey[900]}`,
        }

        const ESTILIZANDO_TEXTO: TextStyle = {
            color: `${MaterialColors.grey[100]}`,
            weight: FontWeight.W600,
        }
       
        return html`
        
            <ecv-flex-column>
                <ecv-box-decoration .decoration=${{width: "100px"}}>
                    <ecv-text-button .hoverState=${ESTILIZANDO_HOVER} .textStyle=${ESTILIZANDO_TEXTO} .buttonStyle=${ESTILIZANDO_BOTAO}>Click Me!</ecv-text-button>
                </ecv-box-decoration>
            </ecv-flex-column>
        
        `;
    }

    testeReverse(): TemplateResult {
        return html`
            <ecv-flex-row ?reversedirection=${true}>
                <ecv-text>LE</ecv-text>
                <ecv-text>LD</ecv-text>
            </ecv-flex-row>
        `;

    }

    buttonReverse(): TemplateResult {

        const ESTILIZANDO_BOTAO: ButtonStyle = {
            backgroundColor: `${MaterialColors.blue[500]}`,
            paddingAll: "10px",
        }
        
        const ESTILIZANDO_TEXTO: TextStyle = {
            color: `${MaterialColors.grey[100]}`,
            weight: FontWeight.W600,
        }
       
        return html`
            <ecv-flex-column>
                <ecv-box-decoration .decoration=${{width: "100px"}}>
                    <ecv-text-button-icon .icon=${IconTypes.ArrowBackIoS} .textStyle=${ESTILIZANDO_TEXTO} .buttonStyle=${ESTILIZANDO_BOTAO} ?reversePosition=${true}>Inverso</ecv-text-button-icon>
                </ecv-box-decoration>
            </ecv-flex-column>
        `;
    }


    render(): TemplateResult {
        return html`
            ${this._myLayoutWidget()}
            ${this.teste()}
            ${this.testeButton()}
            ${this.buttonReverse()}
        `;
    }
}