import {LitElement, html, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-divisor.js';
import '../components/ecv-text.js';
import '../components/ecv-icon.js';
import '../components/ecv-image.js';
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-center.js';
import '../components/ecv-circle-box.js';
import '../components/ecv-grid.js';
import '../components/ecv-positioned-box.js';
import '../components/ecv-flex-box.js';
import '../components/ecv-scroll-view-box.js';
import '../components/ecv-text-field.js';
import '../components/ecv-text-button.js';
import '../components/ecv-text-button-icon.js';
import '../components/ecv-text-span.js';
import { FlexRowJustifyContent } from '../components/ecv-flex-row.js';
import { IconTypes } from '../enumerations/icon-types.js';
import { FontWeight } from '../enumerations/font-weight.js';

@customElement('using-ecv-components')
export default class UsingECVComponents extends LitElement {

    @state()
    _applicationWdith: number = window.innerWidth;

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    private _getWindowInnerWidth(): void {
        this._applicationWdith = window.innerWidth;
    }

    private _apresentation(): TemplateResult {
        return html`
            <ecv-padding all=${this._applicationWdith < 768 ? '0' : '0 40px'}>
                <ecv-text .textStyle=${{
                    size: "34px",
                    weight: FontWeight.W600,
                    textAlign: "center"
                }}>ECV Componentes</ecv-text>
                <ecv-margin top="20px" bottom="20px">
                    <ecv-text>
                        Lorem Ipsum is simply <ecv-text-span .textStyle=${{
                            color:"red", weight: FontWeight.W700
                        }}>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: "yellow"
                            }}>
                                <ecv-padding all="5px">
                                dummy text
                                </ecv-padding>
                            </ecv-box-decoration>
                        </ecv-text-span>  of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </ecv-text>
                </ecv-margin>
                <ecv-margin top="20px" bottom="20px">
                    <ecv-text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </ecv-text>
                </ecv-margin>
            </ecv-padding>
            ${this._applicationWdith > 964 ? html`<ecv-padding top="30px" left="40px" right="40px">
                <ecv-image source="https://picsum.photos/id/37/2000/1333"></ecv-image>
            </ecv-padding>` : html`<ecv-image source="https://picsum.photos/id/37/2000/1333"></ecv-image>`}
        `;
    }

    private _mainContent(): TemplateResult {
        return html`
            ${this._applicationWdith >= 768 ? html`
                <ecv-padding left="40px" right="40px">
                    <ecv-flex-row columnGap="20px">
                        <ecv-flex-column>
                            <ecv-text .textStyle=${{
                                size: "28px",
                                weight: FontWeight.W600
                            }}>Princípios</ecv-text>
                                <ecv-text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </ecv-text>
                        </ecv-flex-column>
                        <ecv-flex-column>
                            <ecv-text .textStyle=${{
                                size: "28px",
                                weight: FontWeight.W600
                            }}>Recursos</ecv-text>
                            <ecv-text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </ecv-text>
                        </ecv-flex-column>
                        <ecv-flex-column>
                            <ecv-text .textStyle=${{
                                size: "28px",
                                weight: FontWeight.W600
                            }}>Implementação</ecv-text>
                            <ecv-text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </ecv-text>
                        </ecv-flex-column>
                    </ecv-flex-row>
                </ecv-padding>` : html`<ecv-flex-column>
                    <ecv-text .textStyle=${{
                        size: "22px",
                        weight: FontWeight.W600
                    }}>Princípios</ecv-text>
                    <ecv-margin top="20px" bottom="20px">
                        <ecv-text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </ecv-text>
                    </ecv-margin>
                    
                    <ecv-text .textStyle=${{
                        size: "22px",
                        weight: FontWeight.W600
                    }}>Recursos</ecv-text>
                    <ecv-margin top="20px" bottom="20px">
                        <ecv-text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </ecv-text>
                    </ecv-margin>
                    
                    <ecv-text .textStyle=${{
                        size: "22px",
                        weight: FontWeight.W600
                    }}>Implementação</ecv-text>
                    <ecv-margin>
                        <ecv-text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </ecv-text>
                    </ecv-margin>
                    <ecv-divisor></ecv-divisor>
                </ecv-flex-column>
            `}
        `;
    }

    override render(): TemplateResult {
        return html`
            <ecv-flex-column style="width: 100%;">
                <ecv-flex-row flexAlign=${FlexRowJustifyContent.CENTER}>
                    <ecv-padding all="5px">
                        <ecv-icon icon=${IconTypes.Menu} .iconStyle=${{
                            weight: FontWeight.W600
                        }}></ecv-icon>
                    </ecv-padding>
                </ecv-flex-row>
                <ecv-padding all="10px">
                    ${this._apresentation()}
                </ecv-padding>
                <ecv-padding all="10px">
                    ${this._mainContent()}
                </ecv-padding>
            </ecv-flex-column>
        `;
    }
}
