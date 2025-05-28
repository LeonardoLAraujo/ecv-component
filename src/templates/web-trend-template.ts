import { LitElement, html, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-text.js';
import '../states/button-state.js';
import '../components/ecv-icon.js';
import '../components/ecv-flex-box.js';
import '../components/ecv-textrarea.js';
import { IconTypes } from "../enumerations/icon-types.js";
import { MaterialColors } from "../utils/colors/material-colors.js";
import { AxisSizeRow, FlexRowJustifyContent } from "../components/ecv-flex-row.js";
import { FontWeight } from "../enumerations/font-weight.js";
import { FlexColumnAlignItems} from "../components/ecv-flex-column.js";
import { ButtonStyle } from "../components/ecv-text-button.js";
import { TextStyle } from "../states/text-styles.js";
import { Position } from "../components/ecv-positioned-box.js";
import { BoxDecorationStyle } from "../components/ecv-box-decoration.js";

@customElement('web-trend-template')
export class WebTrendTemplate extends LitElement {

    @state()
    _currentScreenWidth: number = window.innerWidth;

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', () => {
            this._currentScreenWidth = window.innerWidth;
        });
    }

    private _topMenu(): TemplateResult {

        const hiddenMenuTextStyle: TextStyle = {
            color: MaterialColors.grey[500],
            weight: FontWeight.W600,
            size: "18px"
        }

        const selectedHiddenMenuTextStyle: TextStyle = {
            color: MaterialColors.shade.white,
            weight: FontWeight.W600,
            size: "18px"
        }

        const defaultHiddenMenuContainerStyle : BoxDecorationStyle = {
            paddingAll: "20px",
            backgroundColor: MaterialColors.shade.white
        }

        const selectedHiddenMenuContainerStyles: BoxDecorationStyle = {
            paddingAll: "20px",
            backgroundColor: MaterialColors.orange[800]
        }

        return html`
            <ecv-flex-row flexJustify=${FlexRowJustifyContent.END} axisSize=${AxisSizeRow.MIN}>
                <ecv-box-decoration .decoration=${selectedHiddenMenuContainerStyles}>
                    <ecv-text .textStyle=${selectedHiddenMenuTextStyle}>Home</ecv-text>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${defaultHiddenMenuContainerStyle}>
                    <ecv-text .textStyle=${hiddenMenuTextStyle}>About Us</ecv-text>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${defaultHiddenMenuContainerStyle}>
                    <ecv-text .textStyle=${hiddenMenuTextStyle}>Services</ecv-text>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${defaultHiddenMenuContainerStyle}>
                    <ecv-text .textStyle=${hiddenMenuTextStyle}>Portfolio</ecv-text>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${defaultHiddenMenuContainerStyle}>
                    <ecv-text .textStyle=${hiddenMenuTextStyle}>Team</ecv-text>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${defaultHiddenMenuContainerStyle}>
                    <ecv-text .textStyle=${hiddenMenuTextStyle}>Contact Us</ecv-text>
                </ecv-box-decoration>
            </ecv-flex-row>
        `;
    }

    private _topBar(): TemplateResult {
        return html`
            <ecv-flex-row>
                <ecv-flex-box>
                    <ecv-box-decoration .decoration=${{
                        paddingAll: this._currentScreenWidth < 768 ? "5px" : "10px 15px 0",
                        backgroundColor: MaterialColors.shade.white,
                        borderTop: `2px solid ${MaterialColors.orange[800]}`,
                        height: this._currentScreenWidth < 768 ? "60px" : "auto"
                    }}>
                        <ecv-flex-column>
                            <ecv-flex-row flexJustify=${this._currentScreenWidth < 768 ? FlexRowJustifyContent.AROUND : FlexRowJustifyContent.START}>
                                <ecv-text .textStyle=${{
                                    size: "30px",
                                    letterSpacing: "3px",
                                    weight: FontWeight.W600,
                                    color: MaterialColors.grey[500]
                                }}><ecv-text-span .textStyle=${{
                                    color: MaterialColors.orange[800],
                                    weight: FontWeight.W600
                                }}>Web</ecv-text-span>Trends</ecv-text>
                                <ecv-box-decoration .decoration=${{
                                    visible: window.innerWidth < 768 ? true : false
                                }}>
                                    <ecv-icon-button icon=${IconTypes.Menu} .buttonStyle=${{
                                        backgroundColor: MaterialColors.orange[800],
                                        shadow: "none"
                                    }} .iconStyle=${{
                                        color: MaterialColors.shade.white
                                    }}></ecv-icon-button>
                                </ecv-box-decoration>
                                ${this._currentScreenWidth >= 992 ? html`<ecv-flex-box></ecv-flex-box>${this._topMenu()}` : html``}
                            </ecv-flex-row>
                        </ecv-flex-column>
                        ${this._currentScreenWidth >= 768 && this._currentScreenWidth < 992 ? html`
                        <ecv-flex-row flexJustify=${FlexRowJustifyContent.END}>
                            <ecv-box-decoration .decoration=${{
                                marginRight: "5vw"
                            }}>
                                ${this._topMenu()}
                            </ecv-box-decoration>
                        </ecv-flex-row>
                        `: html ``}
                    </ecv-box-decoration>
                </ecv-flex-box>
            </ecv-flex-row>
        `;
    }

    private _banner(): TemplateResult {

        const bannerURL: string = "https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/banner-bg.jpg";

        const linesImageURL: string = "https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/bg_line.png";

        return html`
        <ecv-flex-row flexJustify=${FlexRowJustifyContent.CENTER}>
            <ecv-positioned-box>
                <ecv-image source=${bannerURL}></ecv-image>
                <ecv-positioned-box position=${Position.ABSOLUTE} width="100%" height="-webkit-fill-available" top="0">
                    <ecv-box-decoration .decoration=${{
                        backgroundImage: linesImageURL,
                        width: "100%",
                        height: "100%"
                    }}></ecv-box-decoration>
                </ecv-positioned-box>
                <ecv-positioned-box position=${Position.ABSOLUTE} top=${this._currentScreenWidth < 768 ? "0" : "10px"} left="15vw">
                    <ecv-text .textStyle=${{
                        color: MaterialColors.shade.white,
                        size: this._currentScreenWidth < 768 ? "28px" : "54px",
                        weight: FontWeight.W600
                    }}>Revolution</ecv-text>
                </ecv-positioned-box>
                <ecv-positioned-box position=${Position.ABSOLUTE} top=${this._currentScreenWidth < 768 ? "50px" : "90px"} left="15vw">
                    <ecv-box-decoration .decoration=${{
                        width: this._currentScreenWidth < 768 ? "250px" : "400px",
                        height: this._currentScreenWidth < 768 ? "50px" : "130px"
                    }} style="overflow: hidden;">
                        <ecv-text .textStyle=${{
                            color: MaterialColors.grey[500],
                            size: this._currentScreenWidth < 768 ? "12px" : "30px",
                            weight: this._currentScreenWidth < 768 ?FontWeight.W600 : FontWeight.W300,
                            lineHeight: this._currentScreenWidth < 768 ? "15px" : "40px"
                        }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</ecv-text>
                    </ecv-box-decoration>
                </ecv-positioned-box>
            </ecv-positioned-box>
        </ecv-flex-row>
        `;
    }

    private _titleSession(): TemplateResult {
        return html`
            <ecv-flex-row flexJustify=${FlexRowJustifyContent.CENTER}>
                <ecv-padding all="30px 10px">
                    <ecv-margin top="10px" bottom="10px">
                        <ecv-text .textStyle=${{
                            size: "28px",
                            color: MaterialColors.deepOrange[500],
                            weight: FontWeight.W500,
                            lineHeight: "30px",
                        }}>
                        Lorem Ipsum is simply dummy text of the printing.
                        </ecv-text>
                    </ecv-margin>
                    <ecv-margin top="10px" bottom="10px">
                        <ecv-text .textStyle=${{
                            size: "14px",
                            lineHeight: "20px",
                            color: MaterialColors.grey[900]
                        }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word.
                        </ecv-text>
                    </ecv-margin>
                </ecv-padding>
            </ecv-flex-row>
        `;
    }


    private _aboutUsItemBlock(icon: IconTypes, title: string, text: string, filledIcon: boolean = false): TemplateResult {
        return html`
            <ecv-margin top="20px" bottom="20px">
                <ecv-flex-column>
                    <ecv-flex-row columnGap="20px">
                        <ecv-icon icon=${icon} ?filled=${filledIcon} .iconStyle=${{
                            color: MaterialColors.shade.white,
                            size: "30px"
                        }}></ecv-icon>
                        <ecv-text .textStyle=${{
                            weight: FontWeight.W600,
                            size: "24px"
                        }}>${title}</ecv-text>
                    </ecv-flex-row>
                    <ecv-margin top="10px">
                        <ecv-text .textStyle=${{
                            size: "14px",
                            color: MaterialColors.grey[900]
                        }}>${text}</ecv-text>
                    </ecv-margin>
                </ecv-flex-column>
            </ecv-margin>
        `;
    }

    private _aboutUSSession(): TemplateResult {

        const abouUsTitle: TemplateResult = html`
            <ecv-margin top="20px" bottom="20px">
                <ecv-text .textStyle=${{
                    textAlign: "center",
                    color: MaterialColors.shade.white,
                    size: "28px",
                    weight: FontWeight.W600
                }}>About Us</ecv-text>
            </ecv-margin>
        `;

        const aboutUsText: TemplateResult = html`
            <ecv-margin top="20px" bottom="20px">
                <ecv-text .textStyle=${{
                    textAlign: "center",
                    size: "14px",
                    color: MaterialColors.grey[900]
                }}>
                At lorem ipsum available, but the majority have suffered alteration humour or randomised
                </ecv-text>
            </ecv-margin>
        `;

        return html`
            <ecv-flex-row>
                <ecv-flex-box>
                    <ecv-box-decoration .decoration=${{
                        paddingAll: "25px 15px",
                        backgroundColor: MaterialColors.orange[800]
                    }}>
                        ${abouUsTitle}
                        ${aboutUsText}
                        ${this._aboutUsItemBlock(IconTypes.DesktopMac, "What we do?", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.")}
                        ${this._aboutUsItemBlock(IconTypes.Cloud, "Why choose us?", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.", true)}
                        ${this._aboutUsItemBlock(IconTypes.Home, "Where are we?", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit occaecat cupidatat non id est laborum.", true)}
                    </ecv-box-decoration>
                </ecv-flex-box>
            </ecv-flex-row>
        `;
    }

    private _servicesItemBlock(icon: IconTypes, title: string, text: string, filled: boolean = false): TemplateResult {
        return html`
            <ecv-margin top="10px" bottom="10px">
                <ecv-flex-row>
                    <ecv-icon icon=${icon} ?filled=${filled} .iconStyle=${{
                        size: "64px"
                    }}></ecv-icon>
                    <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                size: "18px",
                                weight: FontWeight.W600
                            }}>${title}</ecv-text>
                        </ecv-margin>
                        <ecv-text .textStyle=${{
                            size: "14px",
                            color: MaterialColors.grey[500]
                        }}>${text}</ecv-text>
                    </ecv-flex-column>
                </ecv-flex-row>
            </ecv-margin>
        `;
    }

    private _servicesSession(): TemplateResult {
        
        const servicesTitle: TemplateResult = html`
            <ecv-margin top="10px" bottom="10px">
                <ecv-text .textStyle=${{
                    color: MaterialColors.orange[800],
                    size: "24px",
                    weight: FontWeight.W600,
                    textAlign: "center"
                }}>
                    Services
                </ecv-text>
            </ecv-margin>
        `;

        const servicesinfo: TemplateResult = html`
            <ecv-margin top="10px" bottom="10px">
                <ecv-text .textStyle=${{
                    textAlign: "center",
                    size: "14px"
                }}>
                At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.
                </ecv-text>
            </ecv-margin>
        `;
        
        return html`
            <ecv-padding all="30px 10px">
                ${servicesTitle}
                ${servicesinfo}
                ${this._servicesItemBlock(IconTypes.Manufacturing,"Lorem ipsum dolor sit amet","Nullam ac rhoncus sapien, non gravida purus. Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies.", true)}
                ${this._servicesItemBlock(IconTypes.Target,"Lorem ipsum dolor sit amet","Nullam ac rhoncus sapien, non gravida purus. Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies.", true)}
                ${this._servicesItemBlock(IconTypes.DesktopMac,"Lorem ipsum dolor sit amet","Nullam ac rhoncus sapien, non gravida purus. Aliquam adipiscing eros non elit imperdiet congue. Integer ultricies.")}
            </ecv-padding>
            
        `;
    }

    private _portfolioSession(): TemplateResult {

        const selectedButtonStyle: ButtonStyle = {
            backgroundColor: MaterialColors.orange[800],
            borderAll: "none",
            shadow: "none",
            borderRadius: "none"
        }

        const buttonStyle: ButtonStyle = {
            backgroundColor: MaterialColors.shade.white,
            borderAll: `1px solid ${MaterialColors.orange[800]}`,
            borderRadius: "none",
            shadow: "none"
        }

        return html`
            <ecv-margin top="20px" bottom="20px">
                <ecv-padding all="10px">
                    <ecv-flex-column>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                color: MaterialColors.orange[800],
                                size: "24px",
                                weight: FontWeight.W600
                            }}>Portfolio</ecv-text>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                textAlign: "center"
                            }}>
                            At lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-flex-row  flexJustify=${FlexRowJustifyContent.AROUND}>
                            <ecv-box-decoration .decoration=${{
                                paddingAll: "50px 10px"
                            }}>
                                <ecv-text-button .textStyle=${{
                                    color: MaterialColors.shade.white
                                }} .buttonStyle=${selectedButtonStyle}>All</ecv-text-button>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-text-button .buttonStyle=${buttonStyle} .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>Web Design</ecv-text-button>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-text-button .buttonStyle=${buttonStyle} .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>Photography</ecv-text-button>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-text-button .buttonStyle=${buttonStyle} .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>Print</ecv-text-button>
                            </ecv-box-decoration>
                        </ecv-flex-row>
                    </ecv-flex-column>
                </ecv-padding>
            </ecv-margin>
        `;
    }

    private _ourTeamBlock(photo: string, name: string, role: string, description: string): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                borderTop: `3px solid ${MaterialColors.orange[800]}`,
                backgroundColor: MaterialColors.orange[800],
            }}>
                <ecv-image source=${photo}></ecv-image>
                <ecv-box-decoration .decoration=${{
                    width: "100%"
                }}>
                    <ecv-flex-column rowGap="5px" flexAlign=${FlexColumnAlignItems.START}>
                        <ecv-padding left="10px" right="10px">
                            <ecv-text .textStyle=${{
                                size: "24px",
                                weight: FontWeight.W600
                            }}>${name}</ecv-text>
                        </ecv-padding>
                        <ecv-padding left="10px" right="10px">
                            <ecv-text .textStyle=${{
                                color: MaterialColors.shade.white,
                                weight: FontWeight.W600,
                                size: "14px"
                            }}>${role}</ecv-text>
                        </ecv-padding>
                        <ecv-padding left="10px" right="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                weight: FontWeight.W400,
                                size: "14px"
                            }}>${description}</ecv-text>
                        </ecv-padding>
                    </ecv-flex-column>
                </ecv-box-decoration>
            </ecv-box-decoration>
        `;
    }

    private _ourTeamSession(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                paddingAll: "15px",
                marginAll: "30px 0"
            }}>
                <ecv-flex-column>
                    <ecv-margin all="10px 0">
                        <ecv-text .textStyle=${{
                            color: MaterialColors.orange[800],
                            size: "24px",
                            weight: FontWeight.W600
                        }}>Our Team</ecv-text>
                    </ecv-margin>
                    <ecv-margin all="20px 0">
                        <ecv-text .textStyle=${{
                            color: MaterialColors.grey[500],
                            textAlign: "center",
                            size: "14px"
                        }}>
                        At variations of passages of Lorem Ipsum available, but the majority have suffered alteration..
                        </ecv-text>
                    </ecv-margin>
                    <ecv-grid columns="auto auto" columnGap="30px" rowGap="20px">
                        ${this._ourTeamBlock("https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/photo-1.jpg","John Doe","CEO","Ut wisi enim ad minimpit lobortis nisl ut aliquip ex ea commodo consequat.")}
                        ${this._ourTeamBlock("https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/photo-2.jpg","Larry Doe","Art Director","Ut wisi enim ad minimpit lobortis nisl ut aliquip ex ea commodo consequat.")}
                        ${this._ourTeamBlock("https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/photo-3.jpg","Ranith Kays","Manager","Ut wisi enim ad minimpit lobortis nisl ut aliquip ex ea commodo consequat.")}
                        ${this._ourTeamBlock("https://templateswebsite.dawidolko.pl/webtrends-free-bootstrap-responsive-web-template/images/photo-4.jpg","Joan Ray","Creative","Ut wisi enim ad minimpit lobortis nisl ut aliquip ex ea commodo consequat.")}
                    </ecv-grid>
                </ecv-flex-column>
            </ecv-box-decoration>
        `;
    }

    private _googleMaps(): TemplateResult {
        return html`
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1944302.5352489671!2d77.4535942421874!3d17.863656040793934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1398658474236" width="100%" height="400" frameborder="0" style="border:0"></iframe>
        `;
    }

    private _contactUsSession(): TemplateResult {

        const addressTitleStyle: TextStyle = {
            weight: FontWeight.W600,
            size: "18px"
        }

        const addressTextStyle: TextStyle = {
            lineHeight: "20px",
            size: "14px"
        }

        return html`
            <ecv-box-decoration .decoration=${{
                paddingAll: "10px",
                marginAll: "30px 0"
            }}>
                <ecv-flex-column>
                    <ecv-margin top="10px" bottom="10px">
                        <ecv-text .textStyle=${{
                            color: MaterialColors.orange[800],
                            size: "24px",
                            weight: FontWeight.W600
                        }}>Contact Us</ecv-text>
                    </ecv-margin>
                    <ecv-margin top="10px" bottom="30px">
                        <ecv-text .textStyle=${{
                            color: MaterialColors.grey[500],
                            textAlign: "center"
                        }}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </ecv-text>
                    </ecv-margin>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            width: "100%"
                        }}>
                            ${this._googleMaps()}
                        </ecv-box-decoration>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-padding left="20px" right="20px">
                            <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                <ecv-margin top="40px" bottom="10px">
                                    <ecv-text .textStyle=${addressTitleStyle}>Address:</ecv-text>
                                </ecv-margin>
                                <ecv-margin>
                                    <ecv-text .textStyle=${addressTextStyle}>WebThemez Company</ecv-text>
                                </ecv-margin>
                                <ecv-margin>
                                    <ecv-text .textStyle=${addressTextStyle}>134 Stilla. Tae., 414515</ecv-text>
                                </ecv-margin>
                                <ecv-margin>
                                    <ecv-text .textStyle=${addressTextStyle}>Leorislon, SA 02434-34534 USA</ecv-text>
                                </ecv-margin>
                            </ecv-flex-column>
                        </ecv-padding>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-padding left="20px" right="20px">
                            <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                <ecv-margin top="20px" bottom="10px">
                                    <ecv-text .textStyle=${addressTitleStyle}>Phone:</ecv-text>
                                </ecv-margin>
                                <ecv-margin>
                                    <ecv-text .textStyle=${addressTextStyle}>12345-49589-2</ecv-text>
                                </ecv-margin>
                            </ecv-flex-column>
                        </ecv-padding>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-flex-box>
                            <ecv-padding left="20px" right="20px">
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                    <ecv-margin top="10px" bottom="5px">
                                        <ecv-text .textStyle=${{
                                            weight: FontWeight.W600,
                                            size: "14px"
                                        }}>Name</ecv-text>
                                    </ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        width: "100%"
                                    }}>
                                        <ecv-text-field .textFieldStyle=${{
                                            backgroundColor: MaterialColors.shade.white,
                                            borderAll: `1px solid ${MaterialColors.grey[500]}`
                                        }} hint="Enter Name"></ecv-text-field>
                                    </ecv-box-decoration>
                                </ecv-flex-column>
                            </ecv-padding>
                        </ecv-flex-box>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-flex-box>
                            <ecv-padding left="20px" right="20px">
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                    <ecv-margin top="10px" bottom="5px">
                                        <ecv-text .textStyle=${{
                                            weight: FontWeight.W600,
                                            size: "14px"
                                        }}>Email</ecv-text>
                                    </ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        width: "100%"
                                    }}>
                                        <ecv-text-field .textFieldStyle=${{
                                            backgroundColor: MaterialColors.shade.white,
                                            borderAll: `1px solid ${MaterialColors.grey[500]}`
                                        }} hint="Enter Email"></ecv-text-field>
                                    </ecv-box-decoration>
                                </ecv-flex-column>
                            </ecv-padding>
                        </ecv-flex-box>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-flex-box>
                            <ecv-padding left="20px" right="20px">
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                    <ecv-margin top="10px" bottom="5px">
                                        <ecv-text .textStyle=${{
                                                weight: FontWeight.W600,
                                                size: "14px"
                                            }}>Phone</ecv-text>
                                    </ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        width: "100%"
                                    }}>
                                        <ecv-text-field .textFieldStyle=${{
                                            backgroundColor: MaterialColors.shade.white,
                                            borderAll: `1px solid ${MaterialColors.grey[500]}`
                                        }} hint="Enter email phone"></ecv-text-field>
                                    </ecv-box-decoration>
                                </ecv-flex-column>
                            </ecv-padding>
                        </ecv-flex-box>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-flex-box>
                            <ecv-box-decoration .decoration=${{
                                paddingLeft:"20px",
                                paddingRight: "20px"
                            }}>
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                    <ecv-margin bottom="5px">
                                        <ecv-text .textStyle=${{
                                            weight: FontWeight.W600,
                                            size: "14px"
                                        }}>Comments</ecv-text>
                                    </ecv-margin>
                                    <ecv-textarea hint="Enter your message..." .textAreaStyle=${{
                                        borderAll: `1px solid ${MaterialColors.grey[500]}`,
                                        width: "100%",
                                        height: "100px"
                                    }}></ecv-textarea>
                                </ecv-flex-column>
                            </ecv-box-decoration>
                        </ecv-flex-box>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            paddingAll: "0 20px",
                            marginTop: "10px"
                        }}>
                            <ecv-text-button .buttonStyle=${{
                                backgroundColor: MaterialColors.orange[800],
                                border: "none",
                                shadow: "none",
                                borderRadius: "none"
                            }} .textStyle=${{
                                color: MaterialColors.shade.white,
                                size: "18px"
                            }}>Submit</ecv-text-button>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                </ecv-flex-column>
            </ecv-box-decoration>
        `;
    }

    private _footerSession(): TemplateResult {

        const miniButtonStyle: ButtonStyle = {
            backgroundColor: MaterialColors.orange[800],
            borderAll: "none",
            shadow: "none",
            paddingAll: "0px"
        }

        const normalTextStyle: TextStyle = {
            color: MaterialColors.grey[500],
            size: "18px"
        }

        return html`
            <ecv-flex-column>
                <ecv-flex-box>
                    <ecv-box-decoration .decoration=${{
                        backgroundColor: "#242424",
                        paddingAll: "30px 10px"
                    }}>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                color: MaterialColors.orange[800],
                                weight: FontWeight.W600
                            }}>Web Themez</ecv-text>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${normalTextStyle}>
                            Lorem ipsum dolor amet, consectetur adipiscing elit. Aenean 
            leo lectus sollicitudin convallis eget libero. Aliquam laoreet 
            tellus ut libero semper, egestas velit malesuada. Sed non 
            risus eget dolor amet vestibulum ullamcorper. Integer feugiat 
            molestie.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-margin top="20px" bottom="10px">
                            <ecv-flex-row columnGap="10px">
                                <ecv-box-decoration>
                                    <ecv-icon-button icon=${IconTypes.Store} .buttonStyle=${miniButtonStyle} .iconStyle=${{
                                        size: "20px"
                                    }}></ecv-icon-button>
                                </ecv-box-decoration>
                                <ecv-box-decoration>
                                    <ecv-icon-button icon=${IconTypes.Store} .buttonStyle=${miniButtonStyle} .iconStyle=${{
                                        size: "20px"
                                    }}></ecv-icon-button>
                                </ecv-box-decoration>
                                <ecv-box-decoration>
                                    <ecv-icon-button icon=${IconTypes.Store} .buttonStyle=${miniButtonStyle} .iconStyle=${{
                                        size: "20px"
                                    }}></ecv-icon-button>
                                </ecv-box-decoration>
                                <ecv-box-decoration>
                                    <ecv-icon-button icon=${IconTypes.Store} .buttonStyle=${miniButtonStyle} .iconStyle=${{
                                        size: "20px"
                                    }}></ecv-icon-button>
                                </ecv-box-decoration>
                            </ecv-flex-row>
                        </ecv-margin>
                        <ecv-margin>
                            <ecv-text .textStyle=${normalTextStyle}>Latest Tweets</ecv-text>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${normalTextStyle}>
                                <ecv-text-span .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>@John Doe</ecv-text-span>
                                Lorem ipsum dolor amet, consectetur adipiscing elit. Aenean leo lectus sollicitudin eget libero.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-text .textStyle=${normalTextStyle}>
                            2 minutos ago
                        </ecv-text>
                        <ecv-margin bottom="10px">
                            <ecv-text .textStyle=${normalTextStyle}>
                                <ecv-text-span .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>@John Doe</ecv-text-span>
                                Lorem ipsum dolor amet, consectetur adipiscing elit. Aenean leo lectus sollicitudin eget libero.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                color: MaterialColors.grey[500],
                                weight: FontWeight.W600
                            }}>Contact Info</ecv-text>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${normalTextStyle}>
                            Lorem ipsum dolor amet, consectetur adipiscing ipsum dolor.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-margin>
                            <ecv-flex-row columnGap="10px">
                                <ecv-icon icon=${IconTypes.Call} .iconStyle=${normalTextStyle} ?filled=${true}></ecv-icon>
                                <ecv-text .textStyle=${normalTextStyle}>1-123-345-6789</ecv-text>
                            </ecv-flex-row>
                        </ecv-margin>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-flex-row columnGap="10px">
                                <ecv-icon icon=${IconTypes.Mail} .iconStyle=${{
                                    color: MaterialColors.orange[800]
                                }}></ecv-icon>
                                <ecv-text .textStyle=${{
                                    color: MaterialColors.orange[800]
                                }}>contact@webthemez.com</ecv-text>
                            </ecv-flex-row>
                        </ecv-margin>
                    </ecv-box-decoration>
                    <ecv-box-decoration .decoration=${{
                        paddingAll: "20px 10px",
                        backgroundColor: MaterialColors.shade.black
                    }}>
                        <ecv-flex-row>
                            <ecv-text .textStyle=${normalTextStyle}>
                            Copyright 2014 All Rights Reserved
                            </ecv-text>
                        </ecv-flex-row>
                        <ecv-flex-row flexJustify=${FlexRowJustifyContent.END}>
                            by <ecv-text-span .textStyle=${{
                                color: MaterialColors.orange[800]
                            }}>WebThemez.com</ecv-text-span>
                        </ecv-flex-row>
                    </ecv-box-decoration>
                </ecv-flex-box>
            </ecv-flex-column>
        `;
    }

    render(): TemplateResult {
        return html`
            <style>
                :host{
                    display: block;
                }
            </style>
            <ecv-flex-column>
                ${this._topBar()}
                ${this._banner()}
                ${this._titleSession()}
                ${this._aboutUSSession()}
                ${this._servicesSession()}
                ${this._portfolioSession()}
                ${this._ourTeamSession()}
                ${this._contactUsSession()}
                ${this._footerSession()}
            </ecv-flex-column>
        `;
    }
}