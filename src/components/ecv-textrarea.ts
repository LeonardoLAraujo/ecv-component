import {LitElement, TemplateResult, html} from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {TextStyle} from '../states/text-styles.js';
import {AxisSizeRow, FlexRowAlignItems} from "./ecv-flex-row";
import {AxisSizeColumn, FlexColumnAlignItems} from "./ecv-flex-column";
import {BoxDecorationStyle} from "./ecv-box-decoration";

/**
 * Enum PositionLabelRow é o posicionamento da label com o 
 *  textarea linha horizontalmente.
 * @export
 * @type {PositionLabelRow}
 */
export enum PositionLabelRow {
    LEFT,
    RIGHT,
    LEFT_END,
    LEFT_START,
    RIGHT_END,
    RIGHT_START,
}

/**
 * Enum PositionLabelColumn é o posicionamento da label com o 
 * textarea columa horizontalmente.
 * @export
 * @type {PositionLabelColumn} 
 */
export enum PositionLabelColumn{
    TOP,
    END,
    TOP_START,
    TOP_END,
    END_START,
    END_END,
}

/**
 * Classe que renderiza o textarea.
 * @export
 * @class ECVTextArea
 * @type {ECVTextArea}
 * @extends {LitElement}
 */
@customElement("ecv-textarea")
export class ECVTextArea extends LitElement{

    /**
     * Quantidade de linhas do textarea.
     * @property
     * @type {string}
     */
    @property({type: String})
    rows: string    = "2";

    /**
     * Quantidade de colunas do textarea.
     * @property
     * @type {string}
     */
    @property({type: String})
    columns: string = "2";

    /**
     * Placeholder do textarea.
     * @property
     * @type {string}
     */
    @property({type: String})
    hint: string    = "Placeholder";

    /**
     * gap - Espaçamento entre o textarea e o label.
     * @property
     * @type {string}
     */
    @property()
    gap: string     = "";

    /**
     * Declarar o texto do label.
     * @property
     * @type {?string}
     */
    @property()
    label?: string;

    /**
     * Ativar a expanção do textarea.
     * @property
     * @type {boolean}
     */
    @property({type: Boolean})
    resizeble: boolean = false;

    /**
     * Passa o posicionamento da label na linha.
     * @property
     * @type {?PositionLabelRow}
     */
    @property({type: Number})
    positionLabelRow?: PositionLabelRow;

    /**
     * Passa o posicionamento da label na coluna. 
     * @property
     * @type {?PositionLabelColumn}
     */
    @property({type: Number})
    positionLabelColumn?: PositionLabelColumn;

    /**
     * Objeto para estilizar o textArea. 
     * @property
     * @type {?BoxDecorationStyle}
     */
    @property({attribute: false})
    textAreaStyle?: BoxDecorationStyle;

    /**
     * Objeto para estilizar o Placeholder. 
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    hintSyle?: TextStyle;

    /**
     * Objeto para estilizar o Label. 
     * @property
     * @type {?TextStyle}
     */
    @property({attribute: false})
    labelStyle?: TextStyle;

    /**
    * Objeto para estilizar o texto do textarea. 
    * @property
    * @type {?TextStyle}
    */
    @property({attribute: false})
    textStyle?: TextStyle;
    
    /**
     * Função change do textarea. 
     * @property
     * @type {?Function}
     */
    @property({attribute: false})
    onChanged?: Function;
    
    /**
     * Renderizar a posição atual do label. 
     * @property
     * @type {?TemplateResult}
     */
    @state()
    _currentTextAreaBlock?: TemplateResult;

    /**
     * @constructor
     */
    constructor(){
        super();
    }

    /**
     * @override
     * @method
     * @returns {TemplateResult}
     */
    override render(): TemplateResult{
        return html`
            <style>
                    :host{
                        width: ${this.textAreaStyle?.width ?? 'fit-content'};
                        height: ${this.textAreaStyle?.height ?? 'fit-content'};
                    }
                    
                    textarea{
                        display:                    ${this.textAreaStyle?.visible === undefined ? "block" : this.textAreaStyle?.visible ? 'block' : 'none'};
                        border-top:                 ${this.textAreaStyle?.borderTop === undefined ? "0" : this.textAreaStyle?.borderTop };
                        border-right:               ${this.textAreaStyle?.borderRight === undefined ? "0" : this.textAreaStyle?.borderRight};
                        border-bottom:              ${this.textAreaStyle?.borderBottom === undefined ? "0" : this.textAreaStyle?.borderBottom};
                        border-left:                ${this.textAreaStyle?.borderLeft  === undefined ? "0" : this.textAreaStyle?.borderLeft};
                        border:                     ${this.textAreaStyle?.borderAll === undefined ? "1px solid #000" : this.textAreaStyle?.borderAll};
                        border-top-right-radius:    ${this.textAreaStyle?.borderTopRightRadius === undefined ? "0" : this.textAreaStyle?.borderTopRightRadius};
                        border-top-left-radius:     ${this.textAreaStyle?.borderTopLeftRadius === undefined ? "0" : this.textAreaStyle?.borderTopLeftRadius};
                        border-bottom-right-radius: ${this.textAreaStyle?.borderBottomRightRadius === undefined ? "0" : this.textAreaStyle?.borderBottomRightRadius};
                        border-bottom-left-radius:  ${this.textAreaStyle?.borderBottomLeftRadius === undefined ? "0" : this.textAreaStyle?.borderBottomLeftRadius};
                        background-color:           ${this.textAreaStyle?.backgroundColor === undefined ? "none" : this.textAreaStyle?.backgroundColor};
                        box-shadow:                 ${this.textAreaStyle?.boxShadow === undefined ? "none" : this.textAreaStyle?.boxShadow};
                        width:                      -webkit-fill-available;
                        height:                     -webkit-fill-available;
                        background-position:        ${this.textAreaStyle?.backgroundPosition === undefined ? "relative" : this.textAreaStyle?.backgroundPosition};
                        opacity:                    ${this.textAreaStyle?.opacity  === undefined ? "1" : this.textAreaStyle?.opacity};
                        visibility:                 ${this.textAreaStyle?.visibility=== undefined ? "visible" : this.textAreaStyle?.visibility};
                        background-attachment:      ${this.textAreaStyle?.backgroundAttachment === undefined ? "scroll" : this.textAreaStyle?.backgroundAttachment};
                        margin-left:                ${this.textAreaStyle?.marginLeft   === undefined ? "0" : this.textAreaStyle?.marginLeft};
                        margin-right:               ${this.textAreaStyle?.marginRight === undefined ? "0" : this.textAreaStyle?.marginRight};
                        margin-top:                 ${this.textAreaStyle?.marginTop === undefined ? "0" : this.textAreaStyle?.marginTop};
                        margin-bottom:              ${this.textAreaStyle?.marginBottom === undefined ? "0" : this.textAreaStyle?.marginBottom};
                        margin:                     ${this.textAreaStyle?.marginAll === undefined ? "none" : this.textAreaStyle?.marginAll};
                        padding-left:               ${this.textAreaStyle?.paddingLeft === undefined ? "0" : this.textAreaStyle?.paddingLeft};
                        padding-right:              ${this.textAreaStyle?.paddingRight === undefined ? "0" : this.textAreaStyle?.paddingRight};
                        padding-bottom:             ${this.textAreaStyle?.paddingBottom === undefined ? "0" : this.textAreaStyle?.paddingBottom};
                        padding-top:                ${this.textAreaStyle?.paddingTop === undefined ? "0" : this.textAreaStyle?.paddingTop};
                        padding:                    ${this.textAreaStyle?.paddingAll === undefined ? "none" : this.textAreaStyle?.paddingAll};

                        font-size:                  ${this.textStyle?.size};
                        font-weight:                ${this.textStyle?.weight};
                        color:                      ${this.textStyle?.color};
                        font-weight:                ${this.textStyle?.weight};
                        font-family:                ${this.textStyle?.family};
                        text-shadow:                ${this.textStyle?.shadow};
                        letter-spacing:             ${this.textStyle?.letterSpacing};
                        word-spacing:               ${this.textStyle?.wordSpacing};
                        line-height:                ${this.textStyle?.lineHeight};
                        text-align:                 ${this.textStyle?.textAlign};
                        text-transform:             ${this.textStyle?.textTransform};
                        box-shadow:                 ${this.textStyle?.shadow};
                        text-indent:                ${this.textStyle?.textIdent};
                        font-style:                 ${this.textStyle?.fontStyle};
                        resize:                     ${this.resizeble === false ? "none" : "auto"};
                    }

                    textarea::placeholder{
                        font-size:          ${this.hintSyle?.size};
                        font-weight:        ${this.hintSyle?.weight};
                        color:              ${this.hintSyle?.color};
                        font-weight:        ${this.hintSyle?.weight};
                        font-family:        ${this.hintSyle?.family};
                        text-shadow:        ${this.hintSyle?.shadow};
                        letter-spacing:     ${this.hintSyle?.letterSpacing};
                        text-align:         ${this.hintSyle?.textAlign};
                        text-transform:     ${this.hintSyle?.textTransform};
                        text-indent:        ${this.hintSyle?.textIdent};
                        font-style:         ${this.hintSyle?.fontStyle};
                    }

                    label{
                        width:              inherit;
                        font-size:          ${this.labelStyle?.size};
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

            ${this.label !== undefined &&  this.positionLabelRow       === undefined &&  this.positionLabelColumn === undefined ? html`${this._rowTextAreaBlock()}` 
            : this.label !== undefined &&  this.positionLabelColumn    === undefined ? html`${this._positionLabelRow()}` 
            : this.label !== undefined &&  this.positionLabelRow       === undefined ? html`${this._positionLabelColumn()}` 
            : html`<ecv-box-decoration .decoration=${{width: this.textAreaStyle?.width, height: this.textAreaStyle?.height }}>
                        <textarea rows=${Number(this.rows)} cols=${(Number(this.columns))} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                    </ecv-box-decoration>`}`;
    }

    /**
    * Método para renderizar de acordo com o posicionamento da Label na Linha.
     * @private
     * @param {boolean} [reverse=false]
     * @param {FlexRowAlignItems} [align=FlexRowAlignItems.START]
     * @param {AxisSizeRow} [axis=AxisSizeRow.MAX]
     * @returns {TemplateResult}
     */
    private _rowTextAreaBlock(reverse: boolean = false, align: FlexRowAlignItems = FlexRowAlignItems.START, axis: AxisSizeRow = AxisSizeRow.MAX): TemplateResult {
        return html`<ecv-box-decoration .decoration=${{width: this.textAreaStyle?.width, height: this.textAreaStyle?.height }}>
                        <ecv-flex-row gap=${this.gap} ?reverseDirection=${reverse} flexAlign=${align} axisSize=${axis}>
                            <label for="ecv-text-field">${this.label}</label>
                            <textarea rows=${Number(this.rows)} cols=${(Number(this.columns))} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                        </ecv-flex-row>
                    </ecv-box-decoration>`;
    }

    /**
     * Método para renderizar de acordo com o posicionamento da Label na coluna.
     * @private
     * @param {boolean} [reverse=false]
     * @param {FlexColumnAlignItems} [align=FlexColumnAlignItems.START]
     * @param {AxisSizeColumn} [axis=AxisSizeColumn.MAX]
     * @returns {TemplateResult}
     */
    private _columnTextAreaBlock(reverse: boolean = false, align: FlexColumnAlignItems = FlexColumnAlignItems.START, axis: AxisSizeColumn = AxisSizeColumn.MAX): TemplateResult {
        return html`<ecv-box-decoration .decoration=${{width: this.textAreaStyle?.width, height: this.textAreaStyle?.height }}>
                        <ecv-flex-column gap=${this.gap} ?reverseDirection=${reverse} flexAlign=${align} axisSize=${axis}>
                            <label for="ecv-text-field">${this.label}</label>
                            <textarea rows=${Number(this.rows)} cols=${(Number(this.columns))} placeholder=${this.hint} @change=${this.onChanged}></textarea>
                        </ecv-flex-column>
                    </ecv-box-decoration>`;
    }

    /**
     * Metodo para posicionar a Label no textarea na Linha.
     * @private
     * @returns {TemplateResult}
     */
    private _positionLabelRow(){
        switch(this.positionLabelRow){
            case PositionLabelRow.RIGHT:
                this._currentTextAreaBlock = this._rowTextAreaBlock(true);
                break;
            case PositionLabelRow.LEFT_END:
                this._currentTextAreaBlock = this._rowTextAreaBlock(false, FlexRowAlignItems.END);
                break;
            case PositionLabelRow.LEFT_START:
                this._currentTextAreaBlock = this._rowTextAreaBlock(false, FlexRowAlignItems.START);
                break;
            case PositionLabelRow.RIGHT_END:
                this._currentTextAreaBlock = this._rowTextAreaBlock(true, FlexRowAlignItems.END);
                    break;
            case PositionLabelRow.RIGHT_START:
                this._currentTextAreaBlock = this._rowTextAreaBlock(true, FlexRowAlignItems.START);
                    break;
            default:
                this._currentTextAreaBlock = this._rowTextAreaBlock();
                    break;
        }

        return this._currentTextAreaBlock;
    }

    /**
     * Metodo para posicionar a Label no textarea na coluna.
     * @method
     * @returns {TemplateResult}
     */
    private _positionLabelColumn(){
        switch(this.positionLabelColumn){
            case PositionLabelColumn.END:
                this._currentTextAreaBlock = this._columnTextAreaBlock(true);
                break;
            case PositionLabelColumn.TOP_START:
                this._currentTextAreaBlock = this._columnTextAreaBlock(false, FlexColumnAlignItems.START);
                break;
            case PositionLabelColumn.TOP_END:
                this._currentTextAreaBlock = this._columnTextAreaBlock(false, FlexColumnAlignItems.END);
                break;
            case PositionLabelColumn.END_START:
                this._currentTextAreaBlock = this._columnTextAreaBlock(true, FlexColumnAlignItems.START);
                break;
            case PositionLabelColumn.END_END:
                this._currentTextAreaBlock = this._columnTextAreaBlock(true, FlexColumnAlignItems.END);
                break;
            default:
                this._currentTextAreaBlock = this._columnTextAreaBlock(false, FlexColumnAlignItems.CENTER, AxisSizeColumn.MIN);
                break;    
        }

        return this._currentTextAreaBlock;
    }
}

declare global{
    interface HTMLElementTagNameMap{
        "ecv-textarea" : ECVTextArea;
    }
}