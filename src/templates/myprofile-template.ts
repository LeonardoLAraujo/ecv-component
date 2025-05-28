import { LitElement, TemplateResult, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { FlexRowAlignItems, FlexRowJustifyContent } from "../components/ecv-flex-row";
import { FlexColumnAlignItems } from "../components/ecv-flex-column";
import { IconTypes } from "../enumerations/icon-types";
import { MaterialColors } from "../utils/colors/material-colors";
import { FontWeight } from "../enumerations/font-weight";

/**
 * Represents the Post type.
 * @type PostObject
 * 
 */
type Post = {
    text?: string,
    photo?: string
}

const colors = {
    shadow: '0px 0px 10px 0px #b7b7b7',
    mainThemeColor: '#7d97a5',
    mainDarkThemeColor: '#4d636f',
    white: 'white',
    confirm: 'green',
    cancel: 'red'
}

@customElement('myprofile-template')
export default class MyprofileTemplate extends LitElement {

    @state()
    _applicationWdith: number = window.innerWidth;

    override connectedCallback(): void {
        super.connectedCallback();
        window.addEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        window.removeEventListener('resize', this._getWindowInnerWidth.bind(this));
    }

    private _getWindowInnerWidth(): void {
        this._applicationWdith = window.innerWidth;
    }

    private _myProfileCard(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: "white",
                boxShadow: `${colors.shadow}`,
                borderAllRadius: "5px",
                width: "100%"
            }}>
                <ecv-padding top="10px" bottom="10px">
                        <ecv-text .textStyle=${{
                            size: "22px",
                            weight: FontWeight.W400,
                            textAlign: "center"
                        }}>My Profile</ecv-text>
                </ecv-padding>
                <ecv-flex-row flexJustify=${FlexRowJustifyContent.CENTER}>
                    <ecv-circle-box size="120px" backgroundImage="https://www.w3schools.com/w3images/avatar3.png"></ecv-circle-box>
                </ecv-flex-row>
                <ecv-padding all="10px 20px">
                    <ecv-flex-center>
                        <ecv-divisor></ecv-divisor>
                    </ecv-flex-center>
                </ecv-padding>
                <ecv-padding all="5px 10px">
                    <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                        <ecv-icon ?filled=${true} icon=${IconTypes.Edit} .iconStyle=${{
                            color: colors.mainThemeColor
                        }}></ecv-icon>
                        <ecv-text>Designer, UI</ecv-text>
                    </ecv-flex-row>
                    <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                        <ecv-icon ?filled=${true} icon=${IconTypes.Home} .iconStyle=${{
                            color: colors.mainThemeColor
                        }}></ecv-icon>
                        <ecv-text>London, UK</ecv-text>
                    </ecv-flex-row>
                    <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                        <ecv-icon ?filled=${true} icon=${IconTypes.Cake} .iconStyle=${{
                            color: colors.mainThemeColor
                        }}></ecv-icon>
                        <ecv-text>April 1, 1988</ecv-text>
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _adviceCard(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: "#dfe5e8",
                borderAllRadius: "10px",
                width: "100%"
            }}>
                <ecv-flex-row flexJustify=${FlexRowJustifyContent.BETWEEN}>
                    <ecv-padding left="10px" top="10px">
                        <ecv-text .textStyle=${{
                            size: "22px",
                            weight: FontWeight.W400
                        }}>Hey</ecv-text>
                    </ecv-padding>
                    <ecv-box-decoration .decoration=${{
                        backgroundColor: "#becbd2",
                        width: "50px",
                        height: "40px",
                        borderTopRightRadius: "10px"
                    }}>
                        <ecv-flex-center>
                            <ecv-icon icon="close" .iconStyle=${{
                                size: "18px"
                            }}></ecv-icon>
                        </ecv-flex-center>
                    </ecv-box-decoration>
                </ecv-flex-row>
                <ecv-margin top="20px">
                    <ecv-padding left="10px" right="10px" bottom="10px">
                        <ecv-text>
                            People are looking at your profile. Find out who.
                        </ecv-text>
                    </ecv-padding>
                </ecv-margin>
            </ecv-box-decoration>
        `;
    }

    private _personalInterests(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: MaterialColors.shade.white,
                boxShadow: `${colors.shadow}`,
                width: "100%"
            }}>
                <ecv-padding all="10px">
                    <ecv-flex-row>
                        <ecv-text>Interests</ecv-text>
                    </ecv-flex-row>
                    <ecv-grid columns="50% 50%" columnGap="5px">
                        <ecv-flex-column rowGap="5px">
                            <ecv-box-decoration .decoration=${{
                                backgroundGradientColor: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(35,163,164,1) 0%, rgba(107,159,180,1) 100%, rgba(198,199,201,0.3477766106442577) 100%);", width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: `${colors.white}`
                                    }}>News</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`,width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: `${colors.white}`
                                    }}>Labels</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: `${colors.white}`
                                    }}>Friends</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: `${colors.white}`
                                    }}>Friends</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: `${colors.white}`
                                    }}>Design</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                        </ecv-flex-column>
                        <ecv-flex-column rowGap="5px">
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: MaterialColors.shade.white
                                    }}>W3Schools</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: MaterialColors.shade.white
                                    }}>Games</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: MaterialColors.shade.white
                                    }}>Games</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text .textStyle=${{
                                        color: MaterialColors.shade.white
                                    }}>Food</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainDarkThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 10px">
                                    <ecv-text color=${MaterialColors.shade.white}>Art</ecv-text>
                                </ecv-padding>
                            </ecv-box-decoration>
                        </ecv-flex-column>
                    </ecv-grid>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _myPersonalProfileMenu(): TemplateResult{

        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: `${colors.mainThemeColor}`,
                boxShadow: `${colors.shadow}`,
                width: "100%"
            }}>
                <ecv-flex-column>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            borderBottom: "1px solid white",
                            width: "100%"
                        }}>
                            <ecv-padding all="3px 20px">
                                <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                                    <ecv-icon icon=${IconTypes.Cake} .iconStyle=${{
                                        color: MaterialColors.shade.white
                                    }}></ecv-icon>
                                    <ecv-text .textStyle=${{
                                        color: MaterialColors.shade.white
                                    }}>My Groups</ecv-text>
                                </ecv-flex-row>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            borderBottom: "1px solid white",
                            width: "100%"
                        }}>
                            <ecv-padding all="3px 20px">
                                <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                                    <ecv-icon icon=${IconTypes.Close} .iconStyle=${{
                                        color: MaterialColors.shade.white
                                    }}></ecv-icon>
                                    <ecv-text .textStyle=${{
                                        color: `${MaterialColors.shade.white}`
                                    }}>My Events</ecv-text>
                                </ecv-flex-row>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            borderBottom: "1px solid white",
                            width: "100%"
                        }}>
                            <ecv-padding all="3px 20px">
                                <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} columnGap="20px">
                                    <ecv-icon icon=${IconTypes.Download} .iconStyle=${{
                                        color: MaterialColors.shade.white
                                    }}></ecv-icon>
                                    <ecv-text .textStyle=${{
                                        color: `${MaterialColors.shade.white}`
                                    }}>My Photos</ecv-text>
                                </ecv-flex-row>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                </ecv-flex-column>
            </ecv-box-decoration>
        `;
    }

    private _Comment(photo: string, name: string, minutos: string, posts: Post[]): TemplateResult {
        

        return html`
            <ecv-flex-center>
                <ecv-flex-box>
                    <ecv-box-decoration .decoration=${{
                        backgroundColor: `${MaterialColors.shade.white}`,
                        boxShadow: `${colors.shadow}`,
                        borderAllRadius: "5px",
                        marginAll: `${this._applicationWdith < 768 ? "0px" : "20px"}` 
                    }}>
                        <ecv-padding all="20px">
                            <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.BETWEEN}>
                                <ecv-circle-box size="55px" backgroundImage=${photo}></ecv-circle-box>
                                <ecv-text>${name}</ecv-text>
                                <ecv-text>${minutos}</ecv-text>
                            </ecv-flex-row>
                            <ecv-margin top="30px" bottom="20px">
                                <ecv-divisor></ecv-divisor>
                            </ecv-margin>
                            ${posts.map((post) => html`
                                ${post.text !== '' ? html`<ecv-margin all="15px 0">
                                    <ecv-text>${post.text}</ecv-text>
                                </ecv-margin>` : html``}
                                ${post.photo !== '' ? html`<ecv-margin all="15px 0">
                                    <ecv-image source="${ifDefined(post.photo)}"></ecv-image>
                                </ecv-margin>` : html``}
                            `)}
                            <ecv-flex-row columnGap="5px">
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: `${colors.mainDarkThemeColor}`, width: "80px"
                                }}>
                                    <ecv-padding all="10px 5px">
                                        <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.EVENLY}>
                                                <ecv-icon ?filled=${true} icon=${IconTypes.Edit} .iconStyle=${{
                                                    color: MaterialColors.shade.white
                                                }}></ecv-icon>
                                            <ecv-text .textStyle=${{
                                                color: MaterialColors.shade.white
                                            }}>Like</ecv-text>
                                        </ecv-flex-row>
                                    </ecv-padding>
                                </ecv-box-decoration>
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: `${colors.mainDarkThemeColor}`, width: "120px"
                                }}>
                                    <ecv-padding all="10px 5px">
                                        <ecv-flex-row flexAlign=${FlexRowAlignItems.CENTER} flexJustify=${FlexRowJustifyContent.EVENLY}>
                                                <ecv-icon ?filled=${true} icon=${IconTypes.ThumbUp} .iconStyle=${{
                                                    color: MaterialColors.shade.white
                                                }}></ecv-icon>
                                            <ecv-text .textStyle=${{
                                                color: MaterialColors.shade.white
                                            }}>Comment</ecv-text>
                                        </ecv-flex-row>
                                    </ecv-padding>
                                </ecv-box-decoration>
                            </ecv-flex-row>
                        </ecv-padding>
                    </ecv-box-decoration>
                </ecv-flex-box>
            </ecv-flex-center>
        `;
    }

    private _friendRequest(avatar: string, name: string): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: `${colors.white}`,
                boxShadow: `${colors.shadow}`,
                borderAllRadius: "5px"
            }}>
                <ecv-padding all="15px">
                    <ecv-flex-center>
                        <ecv-text>Friend Request</ecv-text>
                    </ecv-flex-center>
                    <ecv-flex-center>
                        <ecv-image source=${avatar} width="50%"></ecv-image>
                    </ecv-flex-center>
                    <ecv-flex-center>
                        <ecv-margin bottom="10px">
                            <ecv-text>${name}</ecv-text>
                        </ecv-margin>
                    </ecv-flex-center>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            backgroundColor: `${colors.confirm}`
                        }} style="flex: 1;">
                            <ecv-padding all="3px 0">
                                <ecv-flex-center>
                                    <ecv-icon icon=${IconTypes.Check} .iconStyle=${{
                                        color: colors.white
                                    }}></ecv-icon>
                                </ecv-flex-center>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                    <ecv-margin top="30px" bottom="30px"></ecv-margin>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            backgroundColor: `${colors.cancel}`
                        }} style="flex: 1;">
                            <ecv-padding all="3px 0">
                                <ecv-flex-center>
                                    <ecv-icon icon=${IconTypes.Close} .iconStyle=${{
                                        color: colors.white
                                    }}></ecv-icon>
                                </ecv-flex-center>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _postInput(): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: MaterialColors.shade.white,
                boxShadow: `${colors.shadow}`,
                width: "90%",
                borderAllRadius: "5px"
            }}>
                <ecv-padding all="10px">
                    <ecv-flex-column rowGap="10px">
                        <ecv-flex-row>
                            <ecv-text>Social Media Template</ecv-text>
                        </ecv-flex-row>
                        <ecv-flex-row>
                            <ecv-text-field hint="Teste" .textFieldStyle=${{
                                backgroundColor: MaterialColors.blue[600],
                                textFieldColor: MaterialColors.blue[400]
                            }}></ecv-text-field>
                            <ecv-box-decoration .decoration=${{
                                paddingAll: "10px",
                                width: "100%"
                            }}>
                            <ecv-text-field hint="Status: Feeling Blue" .textFieldStyle=${{
                                backgroundColor: MaterialColors.red[100]
                            }}></ecv-text-field>
                            </ecv-box-decoration>
                        </ecv-flex-row>
                        <ecv-flex-row>
                            <ecv-box-decoration .decoration=${{
                                backgroundColor: `${colors.mainThemeColor}`, width: "fit-content"
                            }}>
                                <ecv-padding all="5px 20px">
                                    <ecv-flex-row flexAlign="center" columnGap="5px">
                                        <ecv-icon icon=${IconTypes.Edit} .iconStyle=${{
                                            color: MaterialColors.shade.white
                                        }}></ecv-icon>
                                        <ecv-text .textStyle=${{
                                            color: MaterialColors.shade.white
                                        }}>Post</ecv-text>
                                    </ecv-flex-row>
                                </ecv-padding>
                            </ecv-box-decoration>      
                        </ecv-flex-row>
                    </ecv-flex-column>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    private _newEvent(title: string, photo: string, date: string): TemplateResult {
        return html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: `${colors.white}`,
                boxShadow: `${colors.shadow}`,
                borderAllRadius: "5px"
            }}>
                <ecv-padding all="10px">
                    <ecv-flex-center>
                        <ecv-text>Upcoming Events:</ecv-text>
                    </ecv-flex-center>
                    <ecv-margin top="10px" bottom="10px">
                        <ecv-image source=${photo}></ecv-image>
                    </ecv-margin>
                    <ecv-margin>
                        <ecv-flex-center>
                            <ecv-text .textStyle=${{
                                color: MaterialColors.shade.white
                            }}>${title}</ecv-text>
                        </ecv-flex-center>
                    </ecv-margin>
                    <ecv-margin top="20px" bottom="10px">
                        <ecv-flex-center>
                            <ecv-text>${date}</ecv-text>
                        </ecv-flex-center>
                    </ecv-margin>
                    <ecv-flex-row>
                        <ecv-box-decoration .decoration=${{
                            backgroundColor: `${colors.mainThemeColor}`
                        }} style="flex: 1;">
                            <ecv-padding all="10px">
                                <ecv-flex-center>
                                    <ecv-text>Info</ecv-text>
                                </ecv-flex-center>
                            </ecv-padding>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
        `;
    }

    override render(): TemplateResult {
        return html`
            ${this._applicationWdith < 768 ? html`
        <ecv-padding top="25px" bottom="25px" left="15px" right="15px">
            <ecv-flex-column rowGap="20px">
                ${this._myProfileCard()}
                <ecv-flex-row>
                    ${this._myPersonalProfileMenu()}
                </ecv-flex-row>
                <ecv-flex-row>
                    <ecv-flex-box>
                        ${this._postInput()}
                    </ecv-flex-box>
                </ecv-flex-row>
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "John Doe", "1 min", [{text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", photo: "https://www.w3schools.com/w3images/lights.jpg"},{photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/nature.jpg", "Jane Doe", "15 min", [{text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}])}
                ${this._Comment("https://www.w3schools.com/w3images/nature.jpg", "Ronaldo Moreira", "45 min", [{text: "Have you seen this?", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar6.png", "Angie Jane", "7 min", [{text: "Have you seen this?", photo: "https://www.w3schools.com/w3images/nature.jpg"},{photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Felipe", "20 min", [{text:"adjkajdklajkldjaksdjklasjdlkasjkldakldjlkajdlkajdlals"},{text:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},{text:"Beautifull Picture", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Daniel Console", "8 min", [{text:"Isto é um teste de postagem por favor desconsidere!"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Alisson", "15 seg", [{text: "Foi muito bom mesmo!!!", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._newEvent("Holiday", "https://www.w3schools.com/w3images/nature.jpg", "Friday 15:00 pm")}
                ${this._friendRequest("https://www.w3schools.com/w3images/avatar6.png", "Jane Doe")}
            </ecv-flex-column>
        </ecv-padding>
        `: html`
            <ecv-padding all="25px 15px">
                <ecv-grid columns="20% 60% 20%">
                    <ecv-flex-column rowGap="10px">
                        ${this._myProfileCard()}
                        ${this._myPersonalProfileMenu()}
                        ${this._personalInterests()}
                        ${this._adviceCard()}
                    </ecv-flex-column>
                    <ecv-flex-column flexAlign=${FlexColumnAlignItems.CENTER} rowGap="20px">
                        ${this._postInput()}
                        ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "John Doe", "1 min", [{text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", photo: "https://www.w3schools.com/w3images/lights.jpg"},{photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                        ${this._Comment("https://www.w3schools.com/w3images/nature.jpg", "Jane Doe", "15 min", [{text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}])}
                ${this._Comment("https://www.w3schools.com/w3images/nature.jpg", "Ronaldo Moreira", "45 min", [{text: "Have you seen this?", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar6.png", "Angie Jane", "7 min", [{text: "Have you seen this?", photo: "https://www.w3schools.com/w3images/nature.jpg"},{photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Felipe", "20 min", [{text:"adjkajdklajkldjaksdjklasjdlkasjkldakldjlkajdlkajdlals"},{text:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},{text:"Beautifull Picture", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Daniel Console", "8 min", [{text:"Isto é um teste de postagem por favor desconsidere!"}])}
                ${this._Comment("https://www.w3schools.com/w3images/avatar2.png", "Alisson", "15 seg", [{text: "Foi muito bom mesmo!!!", photo: "https://www.w3schools.com/w3images/nature.jpg"}])}
                    </ecv-flex-column>
                    <ecv-flex-column flexAlign="center" rowGap="10px">
                        ${this._newEvent("Holiday", "https://www.w3schools.com/w3images/nature.jpg", "Friday 15:00 pm")}
                        ${this._friendRequest("https://www.w3schools.com/w3images/avatar6.png", "Jane Doe")}
                    </ecv-flex-column>
                </ecv-grid>
            </ecv-padding>
        `}
        `;
    }

}