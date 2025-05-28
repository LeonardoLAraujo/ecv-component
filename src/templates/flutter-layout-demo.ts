import { LitElement, html, TemplateResult, CSSResult, css } from "lit";
import { customElement } from "lit/decorators.js";
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-text.js';
import '../components/ecv-flex-center.js';
import '../components/ecv-image.js';
import { MaterialColors } from "../utils/colors/material-colors.js";
import { BoxDecorationStyle } from "../components/ecv-box-decoration.js";
import { TextStyle } from "../states/text-styles.js";
import { FlexRowAlignItems, FlexRowJustifyContent } from "../components/ecv-flex-row.js";
import { AxisSizeColumn, FlexColumnAlignItems, FlexColumnJustifyContent } from "../components/ecv-flex-column.js";
import { IconTypes } from "../enumerations/icon-types.js";
import { FontWeight } from "../enumerations/font-weight.js";

@customElement('flutter-layout-demo')
export class FlutterLayoutDemo extends LitElement {

    static styles: CSSResult = css`

        :host{
            display: block;
            height: 100vh;
            width: 100vw;
        }
    `;

    private _imageURL: string = 'https://images.unsplash.com/photo-1471115853179-bb1d604434e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    private _topBar(): TemplateResult {

        const decoration: BoxDecorationStyle = {
            height: "78px",
            boxShadow: `1px 1px 6px 1px ${MaterialColors.grey[500]}`
        }

        const titleStyle: TextStyle = {
            size: "22px",
            weight: FontWeight.Bold
        }

        return html`
            <ecv-positioned-box width="100%">
                <ecv-flex-row>
                    <ecv-flex-box>
                        <ecv-box-decoration .decoration=${decoration}>
                            <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.CENTER}>
                                <ecv-text .textStyle=${titleStyle}>Build Flutter Layout</ecv-text>
                            </ecv-flex-row>
                        </ecv-box-decoration>
                    </ecv-flex-box>
                </ecv-flex-row>
            </ecv-positioned-box>
        `;
    }

    private _image(): TemplateResult {
        return html`
            <ecv-image source=${this._imageURL}></ecv-image>
        `;
    }

    private _titleSession(name: string, location: string): TemplateResult {
        return html`
            <ecv-padding all="32px">
                <ecv-flex-row flexJustify=${FlexRowJustifyContent.CENTER} flexAlign=${FlexRowAlignItems.START} columnGap="10px">
                    <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                        <ecv-padding all="0 0 8px 0">
                            <ecv-text .textStyle=${{weight: FontWeight.Bold}}>${name}</ecv-text>
                        </ecv-padding>
                        <ecv-text .textStyle=${{ color: `${MaterialColors.grey[500]}`}}>${location}</ecv-text>
                    </ecv-flex-column>
                    <ecv-icon icon=${IconTypes.Star} ?filled=${true} .iconStyle=${{
                        color: `${MaterialColors.red[500]}`,
                    }}></ecv-icon>
                    <ecv-text>41</ecv-text>
                </ecv-flex-row>
            </ecv-padding>
        `;
    }

    private _buttonSession(): TemplateResult {

        const color: string = MaterialColors.blue[500];

        return html`
            <ecv-flex-row flexJustify=${FlexRowJustifyContent.EVENLY}>
                ${this._buttonWithText(color, IconTypes.Favorite, "CALL")}
                ${this._buttonWithText(color, IconTypes.Search, "ROUTE")}
                ${this._buttonWithText(color, IconTypes.Home, "SHARE")}
            </ecv-flex-row>
        `;
    }

    private _buttonWithText(color: string, icon: IconTypes, label: string): TemplateResult {
        return html`
            <ecv-flex-column axisSize=${AxisSizeColumn.MIN} flexJustify=${FlexColumnJustifyContent.CENTER}>
                <ecv-icon icon=${icon} .iconStyle=${{
                    color: `${color}`,
                    weight: FontWeight.W500
                }}></ecv-icon>
                <ecv-padding all="8px 0 0 0">
                    <ecv-text .textStyle=${{size: "12px", weight: FontWeight.W400, color: `${color}`}}>${label}</ecv-text>
                </ecv-padding>
            </ecv-flex-column>
        `;
    }

    private _textSession(description: string): TemplateResult {
        return html`
            <ecv-padding all="32px">
                <ecv-text>
                    ${description}
                </ecv-text>
            </ecv-padding>
        `;
    }

    private _layout(): TemplateResult {
        return html`
            ${this._topBar()}
            ${this._image()}
            ${this._titleSession("Oeschinen Lake Campground","Kandersteg, Switzerland")}
            ${this._buttonSession()}
            ${this._textSession("Lake Oeschinen lies at the foot of the Blüemlisalp in the Bernese Alps. Situated 1,578 meters above sea level, it is one of the larger Alpine Lakes. A gondola ride from Kandersteg, followed by a half-hour walk through pastures           and pine forest, leads you to the lake, which warms to 20 degrees Celsius in the summer. Activities enjoyed here include rowing, and riding the summer toboggan run.")}
        `;
    }

    override render(): TemplateResult {

        return html`
            ${this._layout()}
        `;
    }
}