import { LitElement, html, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { asyncReplace } from 'lit/directives/async-replace.js';
import '../components/ecv-flex-row.js';
import '../components/ecv-flex-column.js';
import '../components/ecv-padding.js';
import '../components/ecv-margin.js';
import '../components/ecv-divisor.js';
import '../components/ecv-text.js';
import '../components/ecv-text.js';
import '../components/ecv-icon.js';
import '../components/ecv-image.js';
import '../components/ecv-box-decoration.js';
import '../components/ecv-flex-center.js';
import '../components/ecv-circle-box.js';
import '../components/ecv-grid.js';
import '../components/ecv-positioned-box.js';
import '../components/ecv-flex-box.js';
import { FlexRowAlignItems, FlexRowJustifyContent } from "../components/ecv-flex-row.js";
import { FlexColumnAlignItems } from "../components/ecv-flex-column.js";
import { IconTypes } from "../enumerations/icon-types.js";
import { MaterialColors } from "../utils/colors/material-colors.js";
import { FontWeight } from "../enumerations/font-weight.js";

type TourLocation = {
    name: string,
    picture: string,
    date: string,
    description: string
}

@customElement('the-band-template')
export default class TheBandTemplate extends LitElement {

    @state()
    _applicationWidth: number = window.innerWidth;

    @state()
    _locations: TourLocation[] = [
        {name: 'New York', picture: 'https://www.w3schools.com/w3images/newyork.jpg',date: 'Fri 27 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'},
            {name: 'Paris', picture: 'https://www.w3schools.com/w3images/paris.jpg', date: 'Sat 28 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'},
            {name: 'San Francisco', picture: 'https://www.w3schools.com/w3images/sanfran.jpg', date: 'Sun 29 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'}
    ];

    connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    private _getWindowInnerWidth(): void {
        this._applicationWidth = window.innerWidth;
    }

    private _theBandTemplateTopBar(): TemplateResult {
        return html`
                
            <ecv-box-decoration .decoration=${{
                backgroundColor: "black",
                width: "100%"
            }}>
                <ecv-padding all="10px">
                    <ecv-flex-row flexJustify=${FlexRowJustifyContent.BETWEEN}>
                        ${this._applicationWidth < 768 ? html`
                            <ecv-text .textStyle=${{
                                color: "white"
                            }}>HOME</ecv-text>
                            <ecv-icon icon=${IconTypes.Menu} .iconStyle=${{
                                color: "white"
                            }}></ecv-icon>
                        `: html`
                            <ecv-box-decoration>
                                <ecv-flex-row columnGap="50px">
                                <ecv-text .textStyle=${{
                                color: "white"
                            }}>HOME</ecv-text>
                                <ecv-text .textStyle=${{
                                color: "white"
                            }}>BAND</ecv-text>
                                <ecv-text .textStyle=${{
                                color: "white"
                            }}>TOUR</ecv-text>
                                <ecv-text .textStyle=${{
                                color: "white"
                            }}>CONTACT</ecv-text>
                                <ecv-box-decoration>
                                    <ecv-flex-row>
                                        <ecv-text .textStyle=${{
                                color: "white"
                            }}>MORE</ecv-text>
                                        <ecv-icon .iconStyle=${{
                                color: "white"
                            }} icon=${IconTypes.ExpandMore}></ecv-icon>
                                    </ecv-flex-row>
                                </ecv-box-decoration>
                                </ecv-flex-row>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-icon icon=${IconTypes.Search} .iconStyle=${{
                                    color: "white" 
                                }}></ecv-icon>
                            </ecv-box-decoration>
                        `}
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private  async *_mainCarousel(): any {

        const carouselTimer: number = 4000;

        let figures: Array<string> = [
            'https://www.w3schools.com/w3images/la.jpg',
            'https://www.w3schools.com/w3images/ny.jpg',
            'https://www.w3schools.com/w3images/chicago.jpg'
        ];

        let currentFigureIndex = 0;

        while(currentFigureIndex <= figures.length){
            yield html`
            <ecv-box-decoration carousel style="display: block">
                <ecv-image source=${figures[currentFigureIndex]}></ecv-image>
            </ecv-box-decoration>`;
            currentFigureIndex ++;
            if(currentFigureIndex > figures.length){
                currentFigureIndex = 0;
            }
            await new Promise<string>((resolve) => setTimeout(() => {
                resolve('');
            }, carouselTimer));
        }
    }

    private _theBandSession(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                width: "100%"
            }}>
                <ecv-padding all="15px">
                    <ecv-margin top="40px" bottom="20px">
                        <ecv-flex-center>
                            <ecv-text .textStyle=${{
                                size: "50px",
                                family: "'Segoe UI',Arial,sans-serif"
                            }}>The Band</ecv-text>
                        </ecv-flex-center>
                    </ecv-margin>
                    <ecv-flex-center>
                        <ecv-margin top="10px" bottom="10px">
                            <ecv-text .textStyle=${{
                                color: "gray"
                            }}>We love music</ecv-text>
                        </ecv-margin>
                    </ecv-flex-center>
                    <ecv-margin bottom="80px">
                        <ecv-flex-center>
                            <ecv-text textAlign="justify">
                        We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </ecv-text>
                    </ecv-flex-center>
                    </ecv-margin>
                    
                    ${this._applicationWidth < 768 ? html`
                    <ecv-flex-column flexAlign=${FlexColumnAlignItems.CENTER}>
                        <ecv-box-decoration>
                            <ecv-flex-column>
                                <ecv-flex-center>
                                    <ecv-margin top="10px" bottom="10px">
                                        <ecv-text>Name</ecv-text>
                                    </ecv-margin>
                                </ecv-flex-center>
                                <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                            </ecv-flex-column>
                        </ecv-box-decoration>
                        <ecv-box-decoration>
                            <ecv-flex-column>
                                <ecv-flex-center>
                                    <ecv-margin top="10px" bottom="10px">
                                        <ecv-text>Name</ecv-text>
                                    </ecv-margin>
                                </ecv-flex-center>
                                <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                            </ecv-flex-column>
                        </ecv-box-decoration>
                        <ecv-box-decoration>
                            <ecv-flex-column>
                                <ecv-flex-center>
                                    <ecv-margin top="10px" bottom="10px">
                                        <ecv-text>Name</ecv-text>
                                    </ecv-margin>
                                </ecv-flex-center>
                                    <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                            </ecv-flex-column>
                        </ecv-box-decoration>
                        <ecv-margin top="40px" bottom="40px"></ecv-margin>
                    </ecv-flex-column>
                    ` : html`
                    <ecv-padding left="50px" right="50px">
                        <ecv-flex-row columnGap="100px">
                            <ecv-box-decoration>
                                <ecv-flex-column>
                                    <ecv-flex-center>
                                        <ecv-margin top="10px" bottom="10px">
                                            <ecv-text>Name</ecv-text>
                                        </ecv-margin>
                                    </ecv-flex-center>
                                    <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                                </ecv-flex-column>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-flex-column>
                                    <ecv-flex-center>
                                        <ecv-margin top="10px" bottom="10px">
                                            <ecv-text>Name</ecv-text>
                                        </ecv-margin>
                                    </ecv-flex-center>
                                    <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                                </ecv-flex-column>
                            </ecv-box-decoration>
                            <ecv-box-decoration>
                                <ecv-flex-column>
                                    <ecv-flex-center>
                                        <ecv-margin top="10px" bottom="10px">
                                            <ecv-text>Name</ecv-text>
                                        </ecv-margin>
                                    </ecv-flex-center>
                                        <ecv-image source="https://www.w3schools.com/w3images/bandmember.jpg"></ecv-image>
                                </ecv-flex-column>
                            </ecv-box-decoration>
                        </ecv-flex-row>
                    </ecv-padding>
                    <ecv-margin top="80px"></ecv-margin>
                    `}
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _tourLocationBlock(location: TourLocation): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: "white",
                width: "100%"
            }}>
                <ecv-image source=${location.picture}></ecv-image>
                <ecv-padding left="10px" right="10px" top="10px" bottom="30px">
                    <ecv-margin top="12px" bottom="12px">
                        <ecv-text .textStyle=${{
                            weight: FontWeight.W600
                        }}>${location.name}</ecv-text>
                    </ecv-margin>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            color: "gray"
                        }}>${location.date}</ecv-text>
                    </ecv-margin>
                    <ecv-margin all="20px 0">
                        <ecv-text>${location.description}</ecv-text>
                    </ecv-margin>
                    <ecv-box-decoration .decoration=${{
                        backgroundColor: "black"
                    }}>
                        <ecv-padding all="10px">
                            <ecv-text .textStyle=${{
                                color: "white"
                            }}>Buy Tickets</ecv-text>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _theBandTourSession(): TemplateResult {

        return html`
        <ecv-box-decoration .decoration=${{
            backgroundColor: "black",
            width: "100%"
        }}>
            <ecv-padding left="20px" right="20px" top="120px">
                <ecv-margin top="10px" bottom="10px">
                    <ecv-flex-center>
                        <ecv-text .textStyle=${{
                            color: "white",
                            size: "40px"
                        }}>TOUR DATES</ecv-text>
                    </ecv-flex-center>
                </ecv-margin>
                <ecv-margin top="10px" bottom="40px">
                    <ecv-text .textStyle=${{
                        color: "gray",
                        textAlign: "center"
                    }}>Remember to book your tickets!</ecv-text>
                </ecv-margin>
                <ecv-box-decoration .decoration=${{
                    width: "100%",
                    backgroundColor: "white",
                    borderBottom: "1px solid gray"
                }}>
                    <ecv-box-decoration>
                        <ecv-padding all="10px">
                            <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                                <ecv-text>September</ecv-text>
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: "red"
                                }}>
                                    <ecv-padding all="5px">
                                        <ecv-text .textStyle=${{
                                            color: "white"
                                        }}>Sold out</ecv-text>
                                    </ecv-padding>
                                </ecv-box-decoration>
                            </ecv-flex-row>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${{
                    width: "100%",
                    backgroundColor: "white",
                    borderBottom: "1px solid gray"
                }}>
                    <ecv-box-decoration>
                        <ecv-padding all="10px">
                            <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                                <ecv-text>October</ecv-text>
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: "red"
                                }}>
                                    <ecv-padding all="5px">
                                        <ecv-text .textStyle=${{
                                            color: "white"
                                        }}>Sold out</ecv-text>
                                    </ecv-padding>
                                </ecv-box-decoration>
                            </ecv-flex-row>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${{
                    width: "100%",
                    backgroundColor: "white"
                }}>
                    <ecv-box-decoration .decoration=${{
                        width: "inherit"
                    }}>
                        <ecv-padding all="10px">
                            <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.BETWEEN}>
                                <ecv-text>October</ecv-text>
                                <ecv-circle-box size="30px" color="black">
                                    <ecv-flex-center>
                                        <ecv-text .textStyle=${{
                                            color: "white"
                                        }}>3</ecv-text>
                                    </ecv-flex-center>
                                </ecv-circle-box>
                            </ecv-flex-row>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-box-decoration>
                <ecv-margin top="30px" bottom="120px">
                    ${this._applicationWidth < 768 ? html`
                    <ecv-flex-column rowGap="20px">
                    ${this._locations.map((location) => html`
                        ${this._tourLocationBlock(location)}
                    `)}
                    </ecv-flex-column>
                    ` : html`
                    <ecv-flex-row columnGap="20px">
                    ${this._locations.map((location) => html`
                        ${this._tourLocationBlock(location)}
                    `)}
                    </ecv-flex-row>
                    `}
                </ecv-margin>
            </ecv-padding>
        </ecv-box-decoration>
        `;
    }

    private _theBandContactSession(): TemplateResult {
        return html`
            <ecv-box-decoration width="100%" backgroundColor="white">
                <ecv-padding all="120px 10px 80px 10px">
                    <ecv-flex-center>
                        <ecv-margin bottom="20px">
                            <ecv-text size="40px">CONTACT</ecv-text>
                        </ecv-margin>
                    </ecv-flex-center>
                    <ecv-margin bottom="40px">
                        <ecv-text textAlign="center" color=${MaterialColors.grey[500]}>Fan? Drop a note!</ecv-text>
                    </ecv-margin>
                    ${this._applicationWidth < 768 ? html`
                        <ecv-margin bottom="20px">
                            <ecv-flex-column>
                                <ecv-margin bottom="20px">
                                    <ecv-box-decoration width="100%">
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                                <ecv-icon ?filled=${true} icon=${IconTypes.Home}></ecv-icon>
                                                <ecv-text>Chicago, US</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                            <ecv-icon ?filled=${true} icon=${IconTypes.Call}></ecv-icon>
                                            <ecv-text>Phone: +00 151515</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                            <ecv-icon ?filled=${true} icon=${IconTypes.Mail}></ecv-icon>
                                            <ecv-text>Email: mail@mail.com</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                    </ecv-box-decoration>
                                </ecv-margin>
                                <ecv-box-decoration width="100%">
                                    <ecv-box-decoration .decoration=${{
                                        backgroundColor: MaterialColors.shade.white,
                                        marginTop: "20px"
                                    }}>
                                        <ecv-text-field hint="Name" .decoration=${{
                                            backgroundColor: MaterialColors.grey[200]
                                        }}></ecv-text-field>
                                    </ecv-box-decoration>
                                    <ecv-margin all="20px 0"></ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        backgroundColor: MaterialColors.shade.white,
                                        marginTop: "20px"
                                    }}>
                                        <ecv-text-field hint="Email" .decoration=${{
                                            backgroundColor: MaterialColors.grey[200]
                                        }}></ecv-text-field>
                                    </ecv-box-decoration>
                                    <ecv-margin top="10px"></ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        backgroundColor: MaterialColors.shade.white,
                                        marginTop:"20px"
                                    }}>
                                        <ecv-text-field hint="Message" .decoration=${{
                                            backgroundColor: MaterialColors.grey[200]
                                        }}></ecv-text-field>
                                    </ecv-box-decoration>
                                    <ecv-margin top="20px">
                                        <ecv-flex-row flexJustify=${FlexRowJustifyContent.END}>
                                            <ecv-box-decoration .decoration=${{
                                                backgroundColor: "black", width: "90px",
                                                marginTop: "20px"
                                            }}>
                                                <ecv-padding all="10px">
                                                    <ecv-text .textStyle=${{
                                                        textAlign: "center", color: "white"
                                                    }}>SEND</ecv-text>
                                                </ecv-padding>
                                            </ecv-box-decoration>
                                        </ecv-flex-row>
                                    </ecv-margin>
                                </ecv-box-decoration>
                            </ecv-flex-column>
                        </ecv-margin>
                        
                    ` : html`
                        <ecv-flex-row flexJustify=${FlexRowJustifyContent.BETWEEN}>
                            <ecv-margin bottom="20px">
                                    <ecv-box-decoration .decoration=${{
                                        width: "100%"
                                    }}>
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                                <ecv-icon ?filled=${true} icon=${IconTypes.Logout}></ecv-icon>
                                                <ecv-text>Chicago, US</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                            <ecv-icon ?filled=${true} icon=${IconTypes.Logout}></ecv-icon>
                                            <ecv-text>Phone: +00 151515</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                        <ecv-box-decoration>
                                            <ecv-flex-row columnGap="20px">
                                            <ecv-icon ?filled=${true} icon=${IconTypes.Person}></ecv-icon>
                                            <ecv-text>Email: mail@mail.com</ecv-text>
                                            </ecv-flex-row>
                                        </ecv-box-decoration>
                                    </ecv-box-decoration>
                                </ecv-margin>
                                <ecv-box-decoration .decoration=${{
                                    width: "50%"
                                }}>
                                    <ecv-flex-row columnGap="20px">
                                        <ecv-box-decoration .decoration=${{
                                            backgroundColor: MaterialColors.shade.white
                                        }}>
                                            <ecv-text-field hint="Name" .decoration=${{
                                                backgroundColor: MaterialColors.grey[200]
                                            }}></ecv-text-field>
                                        </ecv-box-decoration>
                                        <ecv-box-decoration .decoration=${{
                                           backgroundColor: MaterialColors.shade.white
                                        }}>
                                            <ecv-text-field hint="Email" .decoration=${{
                                                backgroundColor: MaterialColors.grey[200]
                                            }}></ecv-text-field>
                                        </ecv-box-decoration>
                                    </ecv-flex-row>
                                    
                                    <ecv-margin top="10px"></ecv-margin>
                                    <ecv-box-decoration .decoration=${{
                                        backgroundColor: MaterialColors.shade.white,
                                        marginTop: "20px"
                                    }}>
                                        <ecv-text-field hint="Message" .decoration=${{
                                            backgroundColor: MaterialColors.grey[200]
                                        }}></ecv-text-field>
                                    </ecv-box-decoration>
                                    <ecv-margin top="20px">
                                        <ecv-flex-row flexJustify=${FlexRowJustifyContent.END}>
                                            <ecv-box-decoration .decoration=${{
                                                backgroundColor: "black", width: "90px"
                                            }}>
                                                <ecv-padding all="10px">
                                                    <ecv-text .textStyle=${{
                                                        textAlign: "center", color: "white"
                                                    }}>SEND</ecv-text>
                                                </ecv-padding>
                                            </ecv-box-decoration>
                                        </ecv-flex-row>
                                    </ecv-margin>
                                </ecv-box-decoration>
                        </ecv-flex-row>
                    `}      
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _theBandFooterSession(): TemplateResult {
        return html`
            <ecv-image source="https://www.w3schools.com/w3images/map.jpg"></ecv-image>
            <ecv-box-decoration width="100%">
                <ecv-margin top="60px">
                    <ecv-flex-center>
                        <ecv-icon icon=${IconTypes.Refresh} size="30px"></ecv-icon>
                        <ecv-icon icon=${IconTypes.Login} size="30px"></ecv-icon>
                        <ecv-icon icon=${IconTypes.Delete} size="30px"></ecv-icon>
                        <ecv-icon icon=${IconTypes.Logout} size="30px"></ecv-icon>
                        <ecv-icon icon=${IconTypes.Search} size="30px"></ecv-icon>
                        <ecv-icon icon=${IconTypes.Star} size="30px"></ecv-icon>
                    </ecv-flex-center>
                </ecv-margin>
                <ecv-margin top="40px" bottom="100px">
                    <ecv-flex-center>
                        <ecv-text>Powered by w3.css</ecv-text>
                    </ecv-flex-center>
                </ecv-margin>
            </ecv-box-decoration>
        `;
    }

    override render(): TemplateResult {
        this._applicationWidth = window.innerWidth;
        return html`
            <ecv-flex-column>
                ${this._theBandTemplateTopBar()}
                ${asyncReplace(this._mainCarousel())}
                ${this._theBandSession()}
                ${this._theBandTourSession()}
                ${this._theBandContactSession()}
                ${this._theBandFooterSession()}
            </ecv-flex-column>
        `;
    }
}

