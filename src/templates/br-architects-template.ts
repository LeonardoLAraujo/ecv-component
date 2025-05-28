import { LitElement, html, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
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
import '../components/ecv-icon-button.js';
import '../components/ecv-hyperlink.js';
import { FlexRowJustifyContent } from "../components/ecv-flex-row.js";
import { MaterialColors } from "../utils/colors/material-colors.js";
import { Position } from "../components/ecv-positioned-box.js";
import { FontWeight } from "../enumerations/font-weight.js";

@customElement('br-architects-template')
export class BRArchitectsTemplate extends LitElement {


    @state()
    _applicationWidth: number = window.innerWidth;

    override connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    private _getWindowInnerWidth(): void {
        this._applicationWidth =  window.innerWidth;
    }

    private _topBar(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                boxShadow: "1px 1px 3px 4px gray",
                width: "100%",
                backgroundColor: "white"
            }}>
                <ecv-padding all="15px 30px">
                    <ecv-flex-row flexJustify=${FlexRowJustifyContent.BETWEEN} flexAlign="center">
                        <ecv-box-decoration .decoration=${{
                            width: "max-content"
                        }}>
                            <ecv-flex-row columnGap="15px">
                                <ecv-text .textStyle=${{
                                    weight: FontWeight.W800,
                                    spacing: "5px"
                                }}>BR</ecv-text>
                                <ecv-text .textStyle=${{
                                    letterSpacing: "5px"
                                }}>Architects</ecv-text>
                            </ecv-flex-row>
                        </ecv-box-decoration>
                        ${this._applicationWidth < 768 ? html`` : html`
                        <ecv-box-decoration>
                            <ecv-flex-row flexJustify=${FlexRowJustifyContent.END}>
                                <ecv-text-button .buttonStyle=${{
                                    backgroundColor: "transparent", shadow:"none",
                                }} .textStyle=${{
                                    size: "18px"
                                }}>Projects</ecv-text-button>
                                <ecv-text-button .buttonStyle=${{
                                    backgroundColor: "transparent",
                                    shadow: "none"
                                }} .textStyle=${{
                                    size: "18px"
                                }}>About</ecv-text-button>
                                <ecv-text-button .buttonStyle=${{
                                    backgroundColor: "transparent", shadow: "none"
                                }} .textStyle=${{
                                    size: "18px"
                                }}>Contact</ecv-text-button>
                            </ecv-flex-row>
                        </ecv-box-decoration>
                        `}
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _imageLogo(): TemplateResult {
        return html`
            <ecv-positioned-box>
                <ecv-image source="https://www.w3schools.com/w3images/architect.jpg"></ecv-image>
                <ecv-positioned-box position=${Position.ABSOLUTE} top="calc(50% - 33.5px)" left="calc(50% - 42px)">
                    <ecv-box-decoration .decoration=${{
                        backgroundColor: "#000000b8"
                    }}>
                        <ecv-flex-column>
                            <ecv-padding all="8px 16px">
                                <ecv-text .textStyle=${{
                                    size: "36px",
                                    weight: FontWeight.W700,
                                    color: MaterialColors.shade.white,
                                    letterSpacing: "5px"
                                }}>BR</ecv-text>
                            </ecv-padding>
                        </ecv-flex-column>
                    </ecv-box-decoration>
                </ecv-positioned-box>
            </ecv-positioned-box>
        `;
    }

    private _projectHouseBlock(title: string, picture: string): TemplateResult {
        return html`
            <ecv-margin top="0" left="0" right="0" bottom="15px">
                <ecv-positioned-box>
                    <ecv-image source=${picture}></ecv-image>
                    <ecv-positioned-box position="absolute" top="0">
                        <ecv-box-decoration .decoration=${{
                            backgroundColor: "black"
                        }}>
                            <ecv-padding all="10px 15px">
                                <ecv-text .textStyle=${{
                                    color: "white"
                                }}>${title}</ecv-text>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-positioned-box>
                </ecv-positioned-box>
            </ecv-margin>
        `;
    }

    private _projectsSession(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                width: "100%"
            }}>
                <ecv-padding all="50px 30px">
                    <ecv-flex-column>
                        <ecv-margin>
                            <ecv-text .textStyle=${{
                                size: "24px"
                            }}>Projects</ecv-text>
                        </ecv-margin>
                        <ecv-margin all="10px 0" style="width: 100%">
                            <ecv-divisor></ecv-divisor>
                        </ecv-margin>
                        ${this._applicationWidth < 768 ? html`
                        ${this._projectHouseBlock('Summer House', 'https://www.w3schools.com/w3images/house5.jpg')}
                        ${this._projectHouseBlock('Brick House', 'https://www.w3schools.com/w3images/house2.jpg')}
                        ${this._projectHouseBlock('Renovated','https://www.w3schools.com/w3images/house3.jpg')}
                        ${this._projectHouseBlock('Barn House', 'https://www.w3schools.com/w3images/house4.jpg')}
                        ${this._projectHouseBlock('Summer House', 'https://www.w3schools.com/w3images/house2.jpg')}
                        ${this._projectHouseBlock('Brick House', 'https://www.w3schools.com/w3images/house5.jpg')}
                        ${this._projectHouseBlock('Renovated','https://www.w3schools.com/w3images/house4.jpg')}
                        ${this._projectHouseBlock('Barn House','https://www.w3schools.com/w3images/house3.jpg')}
                        ` : html`
                            <ecv-flex-center>
                                <ecv-grid columns="calc(50% - 15px) calc(50% - 15px)" gap="15px">
                                    ${this._projectHouseBlock('Summer House', 'https://www.w3schools.com/w3images/house5.jpg')}
                                    ${this._projectHouseBlock('Brick House', 'https://www.w3schools.com/w3images/house2.jpg')}
                                    ${this._projectHouseBlock('Renovated','https://www.w3schools.com/w3images/house3.jpg')}
                                    ${this._projectHouseBlock('Barn House', 'https://www.w3schools.com/w3images/house4.jpg')}
                                    ${this._projectHouseBlock('Summer House', 'https://www.w3schools.com/w3images/house2.jpg')}
                                    ${this._projectHouseBlock('Brick House', 'https://www.w3schools.com/w3images/house5.jpg')}
                                    ${this._projectHouseBlock('Renovated','https://www.w3schools.com/w3images/house4.jpg')}
                                    ${this._projectHouseBlock('Barn House','https://www.w3schools.com/w3images/house3.jpg')}
                                </ecv-grid>
                            </ecv-flex-center>
                            
                        `}
                    </ecv-flex-column>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _aboutTeamBlock(name: string, picture: string, job: string, description: string): TemplateResult{
         return html`
            <ecv-flex-column>
                <ecv-image source=${picture} filterEffect="grayscale(75%)"></ecv-image>
                <ecv-margin>
                    <ecv-text .textStyle=${{
                        size: "24px"
                    }}>${name}</ecv-text>
                </ecv-margin>
                <ecv-margin>
                    <ecv-text .textStyle=${{
                        color: "gray"
                    }}>${job}</ecv-text>
                </ecv-margin>
                <ecv-margin>
                    <ecv-text>${description}</ecv-text>
                </ecv-margin>
                <ecv-flex-row>
                    <ecv-text-button .buttonStyle=${{
                        backgroundColor: "#f1f1f1",
                        shadow: "none"
                    }}>Contact</ecv-text-button>
                </ecv-flex-row>
                <ecv-margin all="20px 0"></ecv-margin>
            </ecv-flex-column>
         `;   
    }

    private _aboutSession(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                width: "100%"
            }}>
                <ecv-padding all="50px 30px">
                    <ecv-margin all="0 0 15px 0">
                        <ecv-text .textStyle=${{
                            size: "24px"
                        }}>About</ecv-text>
                    </ecv-margin>
                    <ecv-divisor></ecv-divisor>
                    <ecv-margin all="15px 0">
                        <ecv-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    
                        </ecv-text>
                    </ecv-margin>
                    ${this._applicationWidth < 768 ? html`
                        ${this._aboutTeamBlock('John Doe', 'https://www.w3schools.com/w3images/team2.jpg', 'CEO & Founder', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Jane Doe', 'https://www.w3schools.com/w3images/team1.jpg', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Mike Ross', 'https://www.w3schools.com/w3images/team3.jpg', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Dan Star', 'https://www.w3schools.com/w3images/team4.jpg', 'Architect','Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                    ` : html`
                        <ecv-grid columns="50% 50%" gap="15px">
                        ${this._aboutTeamBlock('John Doe', 'https://www.w3schools.com/w3images/team2.jpg', 'CEO & Founder', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Jane Doe', 'https://www.w3schools.com/w3images/team1.jpg', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Mike Ross', 'https://www.w3schools.com/w3images/team3.jpg', 'Architect', 'Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        ${this._aboutTeamBlock('Dan Star', 'https://www.w3schools.com/w3images/team4.jpg', 'Architect','Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.')}
                        </ecv-grid>
                    `}
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _contactInput(hint: string): TemplateResult {
        return html`
            <ecv-margin all="10px 0">
                <ecv-text-field hint=${hint} .textFieldStyle=${{
                    backgroundColor: MaterialColors.shade.white
                }} .decoration=${{
                    backgroundColor: MaterialColors.shade.white
                }}></ecv-text-field>
            </ecv-margin>
        `;
    }

    private _contactSession(): TemplateResult {

        return html`
            <ecv-box-decoration width="100%">
                <ecv-padding all="50px 30px">
                    <ecv-margin all="0 0 15px 0">
                        <ecv-text size="24px">Contact</ecv-text>
                    </ecv-margin>
                    <ecv-divisor></ecv-divisor>
                    <ecv-margin all="15px 0">
                        <ecv-text>
                        Lets get in touch and talk about your next project.
                        </ecv-text>
                    </ecv-margin>
                    ${this._contactInput('Name')}
                    ${this._contactInput('Email')}
                    ${this._contactInput('Subject')}
                    ${this._contactInput('Coment')}
                    <ecv-margin all="20px 0">
                        <ecv-box-decoration>
                            <ecv-text-button .buttonStyle=${{
                                borderRadius:"0",
                                shadow:"none",
                                backgroundColor: "black"
                            }} .textStyle=${{
                                color:"white"
                            }}>SEND MESSAGE</ecv-text-button>
                        </ecv-box-decoration>
                    </ecv-margin>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _footerSession(): TemplateResult {
        return html`
            <ecv-box-decoration width="100%">
                <ecv-padding all="50px 30px">
                    <ecv-image source="https://www.w3schools.com/w3images/map.jpg"></ecv-image>
                </ecv-padding>
            </ecv-box-decoration>
            <ecv-box-decoration width="100%" backgroundColor="black">
                <ecv-padding all="30px">
                    <ecv-flex-center>
                        <ecv-text color="white">Powered by w3.css</ecv-text>
                    </ecv-flex-center>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    override render(): TemplateResult {
        return html`
            <ecv-box-decoration backgroundColor="white">
                ${this._topBar()}
                ${this._imageLogo()}
                ${this._projectsSession()}
                ${this._aboutSession()}
                ${this._contactSession()}
                ${this._footerSession()}
            </ecv-box-decoration>
        `;
    }
}