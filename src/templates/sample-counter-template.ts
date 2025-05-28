import { LitElement, html, TemplateResult, CSSResult, css } from "lit";
import { customElement, state} from "lit/decorators.js";
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-text.js';
import '../components/ecv-flex-center.js';
import '../components/ecv-image.js';
import { MaterialColors } from "../utils/colors/material-colors.js";
import { FlexRowJustifyContent } from "../components/ecv-flex-row.js";

@customElement('sample-counter-template')
export class SampleCounterTemplate extends LitElement {

    static styles: CSSResult = css`
    
        :host{
            display: block;
            width: 100vw;
            height: 100vh;
        }
    `;

    @state()
    _counter: number = 0;

    private _incrementNumber(): void {
        this._counter++;
    }

    private _topBar(): TemplateResult {
        return html`
        <ecv-flex-box>
            <ecv-box-decoration .decoration=${{
                backgroundColor: `${MaterialColors.deepPurple.A100}`,
                height: "74px"
            }}>
                <ecv-flex-row flexJustify=${FlexRowJustifyContent.CENTER}>
                    <ecv-text .textStyle=${{
                        size: "30px",
                    }}>Counter Demo Page</ecv-text>
                </ecv-flex-row>
            </ecv-box-decoration>
        </ecv-flex-box>
    `;
    }

    private _counterText(): TemplateResult {
        return html`
            <ecv-flex-center>
                <ecv-text>You have pushed the button this many times:</ecv-text>
                    <ecv-text .textStyle=${{
                        size: "22px"
                }}>${this._counter}</ecv-text>
            </ecv-flex-center>
        `;
    }

    private _floatingButton(): TemplateResult {
        return html`
            <ecv-positioned-box position="fixed" bottom="22px" right="34px">
                <ecv-icon-button icon="add" .buttonStyle=${{
                    backgroundColor: `${MaterialColors.deepPurple[100]}`,
                    borderRadius: '50%'
                }} .onPressed=${() => this._incrementNumber()}></ecv-icon-button>
            </ecv-positioned-box>
        `;
    }

    override render(): TemplateResult {
        return html`
            <ecv-flex-column>
                <ecv-flex-row>
                    ${this._topBar()}
                </ecv-flex-row>
                ${this._counterText()}
            </ecv-flex-column>
            ${this._floatingButton()}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap{
        "sample-counter-template": SampleCounterTemplate
    }
}