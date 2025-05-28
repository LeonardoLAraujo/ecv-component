import { LitElement, html, TemplateResult } from "lit";
import { customElement, query, state} from "lit/decorators.js";
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-text.js';
import '../states/button-state.js';
import '../components/ecv-icon.js';
import { asyncReplace } from "lit/directives/async-replace.js";
import { MaterialColors } from "../utils/colors/material-colors.js";
import { BoxDecorationStyle } from "../components/ecv-box-decoration.js";
import { ButtonStyle } from "../components/ecv-text-button.js";
import { TextStyle } from "../states/text-styles.js";
import { FlexRowAlignItems, FlexRowJustifyContent } from "../components/ecv-flex-row.js";
import { FlexColumnAlignItems, FlexColumnJustifyContent } from "../components/ecv-flex-column.js";
import { FontWeight } from "../enumerations/font-weight.js";
import { IconTypes } from "../enumerations/icon-types.js";
import { Position } from "../components/ecv-positioned-box.js";

@customElement('touch-hospital-template')
export class TouchHospitalTemplate extends LitElement {


    private _mainThemeColor: string = '#0ACCCE';
    private _mainThemeDarkColor: string = '#025B5D';
    private _carouselImages: string[] = [
        'https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/slides/1.jpg',
        'https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/slides/2.jpg'
    ];

    @state()
    _applicationWindowWidth: number = window.innerWidth;

    @query('ecv-image[carousel]')
    _carouselImage!: HTMLImageElement;

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', () => {
            this._applicationWindowWidth = window.innerWidth;
        });
    }

    private _topBar(): TemplateResult {

        const decoration: BoxDecorationStyle = {
            height: "78px",
            backgroundColor: `${MaterialColors.shade.white}`
        }

        const customButtonStyle: ButtonStyle = {
            backgroundColor: "transparent",
            shadow: "none",
            borderAll: "none"
        }

        const customButtonTextStyle: TextStyle = {
            color: `${this._mainThemeColor}`
        }

        const logoDecoration: BoxDecorationStyle = {
            backgroundColor: this._mainThemeColor,
            paddingAll: "10px 15px"
        }

        return html`
            <ecv-positioned-box zIndex="2" width="100%">
                <ecv-flex-row>
                    <ecv-flex-box>
                        <ecv-box-decoration .decoration=${decoration}>
                                <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.END}>
                                    ${this._applicationWindowWidth < 768 ? html`
                                    
                                    <ecv-padding right="20px" left="20px">
                                        <ecv-box-decoration>
                                            <ecv-icon-button icon=${IconTypes.Menu} .buttonStyle=${{
                                                backgroundColor:MaterialColors.orange[500]
                                            }} .iconStyle=${{
                                                color: MaterialColors.shade.white
                                            }}></ecv-icon-button>
                                        </ecv-box-decoration>
                                    </ecv-padding>
                                    ` : html`
                                        <ecv-flex-box></ecv-flex-box>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>HOME</ecv-text-button>
                                        </ecv-margin>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>ABOUT US</ecv-text-button>
                                        </ecv-margin>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>SERVICES</ecv-text-button>
                                        </ecv-margin>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>PORTFOLIO</ecv-text-button>
                                        </ecv-margin>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>PRICING</ecv-text-button>
                                        </ecv-margin>
                                        <ecv-margin>
                                            <ecv-text-button .buttonStyle=${customButtonStyle} .textStyle=${customButtonTextStyle}>CONTACT</ecv-text-button>
                                        </ecv-margin>
                                    `}
                                </ecv-flex-row>
                        </ecv-box-decoration>
                    </ecv-flex-box>
                </ecv-flex-row>
                <ecv-positioned-box position=${Position.ABSOLUTE} top="0" left="5px">
                    <ecv-box-decoration .decoration=${logoDecoration}>
                        <ecv-image source="https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/logo.png"></ecv-image>
                    </ecv-box-decoration>
                </ecv-positioned-box>
            </ecv-positioned-box>
        `;
    }

    private async *_carousel(images: string[] = []): any {

        const carouselTimer: number = 4000;
        const delayFade: number = 3000;

        let _currentImagesIndex: number = 0;

        const infoDecoration: BoxDecorationStyle = {
            width: "100%",
            height: "100%",
            backgroundColor: `${this._mainThemeColor}`,
            opacity: "0.7"
        }

        const infoTitleStyle: TextStyle = {
            size: "36px",
            color: "white",
            weight: FontWeight.W700,
            letterSpacing: "5px"
        }

        const infoTextStyle: TextStyle = {
            size: "22px",
            color: "white"
        }

        while(_currentImagesIndex <= images.length){
            yield html`
                <style>

                    .fade{
                        animation-name: fade;
                        animation-duration: 1.5s;
                    }

                    @keyframes fade{
                        from {opacity: .4}
                        to {opacity: 1}
                    }
                </style>
                <ecv-positioned-box>
                    <ecv-image carousel class="fade" source=${images[_currentImagesIndex]}></ecv-image>
                    ${this._applicationWindowWidth < 768 ? html`` : html`
                        <ecv-positioned-box position=${Position.ABSOLUTE} top="0" right="0" style="width:50%; height: 100%;">
                            <ecv-box-decoration .decoration=${infoDecoration}>
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.CENTER} flexJustify=${FlexColumnJustifyContent.CENTER}>
                                    <ecv-text .textStyle=${infoTitleStyle}>BEST EQUIPMENT</ecv-text>
                                    <ecv-text .textStyle=${infoTextStyle}>
                                    Doloribus omnis minus temporibus perferendis ipsa
                                    </ecv-text>
                                </ecv-flex-column>
                            </ecv-box-decoration>
                        </ecv-positioned-box>
                    `}
                </ecv-positioned-box>
            `;

            _currentImagesIndex ++;
            setTimeout(() => {
                this._carouselImage.classList.add('fade');
            }, carouselTimer);
            
            setTimeout(() => {
                this._carouselImage.classList.remove('fade');
            }, delayFade);

            if(_currentImagesIndex >= images.length){
                _currentImagesIndex = 0;
            }

            await new Promise<string>((resolve) => setTimeout(() => {
                resolve('');
            }, carouselTimer));
        }

        
    }

    private _careDetailBlock(icon: IconTypes, title: string, text:string): TemplateResult {

        const careTitleStyle: TextStyle = {
            weight: FontWeight.W600,
            size: "20px",
            color: "#333"
        }

        const careTextStyle: TextStyle = {
            size: "14px",
            color: "#656565"
        }

        return html`
            <ecv-margin all="25px 0">
                <ecv-flex-row columnGap="20px" flexAlign="center">
                    <ecv-icon icon=${icon} .iconStyle=${{
                        size: "64px"
                    }}></ecv-icon>
                    <ecv-flex-column rowGap="10px">
                        <ecv-text .textStyle=${careTitleStyle}>${title}</ecv-text>
                        <ecv-text .textStyle=${careTextStyle}>${text}</ecv-text>
                    </ecv-flex-column>
                </ecv-flex-row>
            </ecv-margin>
        `;
    }

    private _careSession(): TemplateResult {

        const subtitleStyle: TextStyle = {
            textAlign: "center",
            size: "36px",
            weight: FontWeight.W700,
            color: "#333"
        }

        const normalTextStyle: TextStyle = {
            textAlign: "center",
            family: "'Open sans', Arial, sans-serif",
            color: "#656565",
            lineHeight: "1.6em",
            size: "14px"
        }

        return html`
            <ecv-margin all="40px 0 0">
                <ecv-padding all="20px">
                    <ecv-text .textStyle=${subtitleStyle}>We Care you</ecv-text>
                    <ecv-text .textStyle=${normalTextStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus.
                    </ecv-text>
                    ${this._applicationWindowWidth < 768 ? html`
                    ${this._careDetailBlock(IconTypes.BabyChangingStation, 'Child Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ${this._careDetailBlock(IconTypes.Genetics, 'Woman Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ${this._careDetailBlock(IconTypes.HomeHealth, 'Family','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ${this._careDetailBlock(IconTypes.Stethoscope, 'Heart','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ${this._careDetailBlock(IconTypes.Mystery, 'Eye Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ${this._careDetailBlock(IconTypes.Oncology, 'Testing','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                    ` : html`
                        <ecv-grid columns="50% 50%">
                        ${this._careDetailBlock(IconTypes.BabyChangingStation, 'Child Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        ${this._careDetailBlock(IconTypes.Genetics, 'Woman Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        ${this._careDetailBlock(IconTypes.HomeHealth, 'Family','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        ${this._careDetailBlock(IconTypes.Stethoscope, 'Heart','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        ${this._careDetailBlock(IconTypes.Mystery, 'Eye Care','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        ${this._careDetailBlock(IconTypes.Oncology, 'Testing','Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater')}
                        </ecv-grid>
                    `}
                </ecv-padding>
            </ecv-margin>
        `;
    }

    private _welcomeTopicBlock(topic: string): TemplateResult {
        return html`
            <ecv-margin all="5px 0">
                <ecv-flex-row columnGap="5px" flexAlign="center">
                    <ecv-icon icon=${IconTypes.ArrowCircleRight} .iconStyle=${{
                        color: MaterialColors.shade.white
                    }} ?filled=${true} size="18px"></ecv-icon>
                    <ecv-text .textStyle=${{
                        color: "white",
                        size: "14px"
                    }}>${topic}</ecv-text>
                </ecv-flex-row>
            </ecv-margin>
            
        `;
    }

    private _welcomeSession(): TemplateResult {

        const welcomeBlockStyle: BoxDecorationStyle = {
            backgroundColor: `${this._mainThemeDarkColor}`,
            width: "100%"
        }

        const welcomeTitleStyle: TextStyle = {
            textAlign: "center",
            color: "white",
            size: "30px",
            weight: FontWeight.W700
        }

        return html`
            <ecv-box-decoration .decoration=${welcomeBlockStyle}>
                <ecv-padding all="40px 10px 12px">
                    <ecv-text .textStyle=${welcomeTitleStyle}>Welcome</ecv-text>
                    <ecv-text .textStyle=${{
                        textAlign: "center",
                        color: "white",
                        size: "14px"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </ecv-text>
                    <ecv-margin>
                        ${this._applicationWindowWidth < 768 ? html`
                        <ecv-flex-center>
                            <ecv-image source="https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/img1.png"></ecv-image>
                        </ecv-flex-center>
                        <ecv-margin all="10px 0">
                            <ecv-text .textStyle=${{
                                color: "white",
                                size: "14px"
                            }}>
                            Lorem ipsum dolor sit amet, cadipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, oribus omnis minus autem nemo numquam, ipsa architecto non. magni consequuntlaudantium culpa tenetur at id, beatae pet.
                            </ecv-text>
                        </ecv-margin>
                        <ecv-margin all="10px 0">
                            <ecv-text .textStyle=${{
                                color: "white",
                                size: "14px"
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium,m deserunt.
                            </ecv-text>
                        </ecv-margin>
                        ${this._welcomeTopicBlock('Lorem ipsum dolor sit amet,')}
                    ${this._welcomeTopicBlock('Explicabo deleniti neque aliquid')}
                    ${this._welcomeTopicBlock('Consectetur adipisicing elit')}
                    ${this._welcomeTopicBlock('Lorem ipsum dolor sit amet,')}
                    ${this._welcomeTopicBlock('Quo issimos molest quibusdam temporibus')}
                        `: html`
                            <ecv-grid columns="auto auto" columnGap="20px">
                                <ecv-image source="https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/img1.png"></ecv-image>
                                <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                                    <ecv-flex-box>
                                    <ecv-margin all="10px 0">
                                        <ecv-text .textStyle=${{
                                            color: "white",
                                            size: "14px"
                                        }}>
                                        Lorem ipsum dolor sit amet, cadipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde fuga error commodi architecto, oribus omnis minus autem nemo numquam, ipsa architecto non. magni consequuntlaudantium culpa tenetur at id, beatae pet.
                                        </ecv-text>
                                    </ecv-margin>
                                    </ecv-flex-box>
                                    
                                    <ecv-margin all="10px 0">
                                        <ecv-text .textStyle=${{
                                            color: "white",
                                            size: "14px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. adipisicing  sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium,m deserunt.
                                        </ecv-text>
                                    </ecv-margin>
                                    ${this._welcomeTopicBlock('Lorem ipsum dolor sit amet,')}
                                    ${this._welcomeTopicBlock('Explicabo deleniti neque aliquid')}
                                    ${this._welcomeTopicBlock('Consectetur adipisicing elit')}
                                    ${this._welcomeTopicBlock('Lorem ipsum dolor sit amet,')}
                                    ${this._welcomeTopicBlock('Quo issimos molest quibusdam temporibus')}
                                </ecv-flex-column>
                            </ecv-grid>
                        `}
                    </ecv-margin>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _eventBlock(figure: string, year: string, month: string, event: string): TemplateResult {
        return html`
            <ecv-flex-center>
                <ecv-box-decoration .decoration=${{
                    backgroundColor: "#EFEFEF",
                    width: `${this._applicationWindowWidth < 768 ? 'fit-content' : '100%'}`
                }}>
                    <ecv-flex-column>
                        <ecv-image source=${figure}></ecv-image>
                    </ecv-flex-column>
                    <ecv-padding all="20px 5px">
                        <ecv-flex-row columnGap="10px">
                            <ecv-text .textStyle=${{
                                weight: FontWeight.W600,
                                size: "14px"
                            }}>${year}</ecv-text>
                            <ecv-text .textStyle=${{
                                size: "14px",
                                color: "#428bca",
                                textTransform: "capitalize",
                                weight: FontWeight.W600
                            }}>${month}</ecv-text>
                        </ecv-flex-row>
                        <ecv-text .textStyle=${{
                            size: "14px",
                            textTransform: "uppercase",
                            color: "#868484"
                        }}>${event}</ecv-text>
                    </ecv-padding>
                </ecv-box-decoration>
            </ecv-flex-center>
        `;
    }

    private _eventsSession(): TemplateResult {
        return html`
            <ecv-padding all="50px 20px">
                <ecv-margin all="10px 0">
                    <ecv-text .textStyle=${{
                        textAlign: "center",
                        size: "30px",
                        weight: FontWeight.W600
                    }}>Our Events</ecv-text>
                </ecv-margin>
                <ecv-margin all="40px 0">
                    <ecv-text .textStyle=${{
                        size: "14px",
                        textAlign: "center"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus.
                    </ecv-text>
                </ecv-margin>
                ${this._eventBlock('https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/e1.png', '2015', 'Feb', 'Lorem ipsum dolor sit amet, consectetur adipis.')}
                ${this._eventBlock('https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/e2.png','2015','March','Apsum dolor sit amet, consectetur adipisdslif.')}
                ${this._eventBlock('https://templateswebsite.dawidolko.pl/touch-hospital-medical-bootstrap-html5-template/img/e3.png','2015', 'April', 'Dolor sit amet, consectetur adipisic indfeft')}
            </ecv-padding>
        `;
    }

    private _contactSession(): TemplateResult {

        const subtitleStyle: TextStyle = {
            color: `${MaterialColors.shade.white}`,
            weight: FontWeight.W600
        }

        const normalTextStyle: TextStyle = {
            color: "#BFBFBF"
        }

        return html`
            <ecv-box-decoration .decoration=${{
                width: "100%",
                backgroundColor: "#232B2B"
            }}>
                <ecv-padding all="60px 20px">
                    <ecv-flex-column rowGap="15px">
                        <ecv-flex-column rowGap="5px">
                            <ecv-text .textStyle=${subtitleStyle}>Our Contact</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Bistro company Inc</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>JC Main Road, Near Silnile tower</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Pin-21542 New York US.</ecv-text>
                            <ecv-margin all="10px 0">
                                <ecv-text .textStyle=${normalTextStyle}>(123) 456-789 - 1255-12584 
                                </ecv-text>
                                <ecv-text .textStyle=${normalTextStyle}>email@domainname.com</ecv-text>
                            </ecv-margin>
                        </ecv-flex-column>
                        <ecv-flex-column rowGap="5px">
                            <ecv-text .textStyle=${subtitleStyle}>Quick Links</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Latest Events</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Terms and conditions</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Privacy policy</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Career</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Contact us</ecv-text>
                        </ecv-flex-column>
                        <ecv-flex-column rowGap="5px">
                            <ecv-text .textStyle=${subtitleStyle}>Latest posts</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Pellentesque et pulvinar enim. Quisque at tempor ligula</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Natus error sit voluptatem accusantium doloremque</ecv-text>
                        </ecv-flex-column>
                        <ecv-flex-column rowGap="5px">
                            <ecv-text .textStyle=${subtitleStyle}>Recent News</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Pellentesque et pulvinar enim. Quisque at tempor ligula</ecv-text>
                            <ecv-text .textStyle=${normalTextStyle}>Natus error sit voluptatem accusantium doloremque</ecv-text>
                        </ecv-flex-column>
                    </ecv-flex-column>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _footerSession(): TemplateResult {
        return html`
            <ecv-positioned-box width="100%">
                <ecv-flex-row>
                    <ecv-flex-box>
                        <ecv-box-decoration .decoration=${{
                                backgroundColor: "#1B2121",
                                width:"100%"
                            }}>
                                <ecv-padding all="35px 20px">
                                    <ecv-flex-row>
                                        <ecv-margin all="16px 0">
                                            <ecv-box-decoration .decoration=${{
                                                width: "100%"
                                            }}>
                                            <ecv-text .textStyle=${{
                                                color: "white",
                                                size: "12px"
                                            }}>
                                            @ Touch Hospital Medical 2015 All right reserved. By WebThemez
                                            </ecv-text>
                                            </ecv-box-decoration>
                                        </ecv-margin>
                                    </ecv-flex-row>
                                    <ecv-margin all="0 0 0 30px">
                                        <ecv-flex-row columnGap="10px">
                                            <ecv-icon icon=${IconTypes.Emoticon} .iconStyle=${{color: MaterialColors.shade.white}}></ecv-icon>
                                            <ecv-icon icon=${IconTypes.Emoticon} .iconStyle=${{color: MaterialColors.shade.white}}></ecv-icon>
                                            <ecv-icon icon=${IconTypes.Emoticon} .iconStyle=${{color: MaterialColors.shade.white}}></ecv-icon>
                                            <ecv-icon icon=${IconTypes.Emoticon} .iconStyle=${{color: MaterialColors.shade.white}}></ecv-icon>
                                            <ecv-icon icon=${IconTypes.Emoticon} .iconStyle=${{color: MaterialColors.shade.white}}></ecv-icon>
                                        </ecv-flex-row>
                                    </ecv-margin>
                                </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-box>
                </ecv-flex-row>
                <ecv-positioned-box position="absolute" bottom="20px" right="20px">
                    <ecv-box-decoration .decoration=${{
                    backgroundColor: `${this._mainThemeColor}`
                    }}>
                        <ecv-padding all="5px">
                            <ecv-icon icon=${IconTypes.ExpandLess} color=${MaterialColors.shade.white}></ecv-icon>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-positioned-box>
            </ecv-positioned-box>
            
        `;
    }

    override render(): TemplateResult {
        return html`
            ${this._topBar()}
            ${asyncReplace(this._carousel(this._carouselImages))}
            ${this._careSession()}
            ${this._welcomeSession()}
            ${this._eventsSession()}
            ${this._contactSession()}
            ${this._footerSession()}
        `;
    }
}