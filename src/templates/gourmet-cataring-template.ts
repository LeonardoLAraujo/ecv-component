import { LitElement, html, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
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
import { TextStyle } from "../states/text-styles.js";
import { FlexColumnAlignItems } from "../components/ecv-flex-column.js";
import { MaterialColors } from "../utils/colors/material-colors.js";

const colors = {
    shadow: '0px 0px 10px 0px #b7b7b7',
    mainThemeColor: '#7d97a5',
    mainDarkThemeColor: '#4d636f',
    white: 'white',
    confirm: 'green',
    cancel: 'red'
}

@customElement('gourmet-cataring-template')
export default class GourmetCataringTemplate extends LitElement {

    @state()
    _applicationWidth: number = window.innerWidth;

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

    private _gourmetCateringTopBar() : TemplateResult{


        const infoTextStyle: TextStyle = {
            family: "Times New Roman, Georgia, Serif",
            letterSpacing: "4px"
        }

        return html`
            ${this._applicationWidth < 768 ? html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: MaterialColors.shade.white,
                width: "100%",
                boxShadow: `${colors.shadow}`
            }}>
                <ecv-flex-row>
                    <ecv-padding all="10px 20px">
                        <ecv-text .textStyle=${{
                            family:"Times New Roman, Georgia, Serif",
                            letterSpacing: "4px"
                        }}>Gourmet au Catering</ecv-text>
                    </ecv-padding>
                </ecv-flex-row>
            </ecv-box-decoration>
            ` : html`
            <ecv-box-decoration .decoration=${{
                backgroundColor: MaterialColors.shade.white,
                width: "100%",
                boxShadow: `${colors.shadow}`
            }}>
                <ecv-padding all="0 20px">
                    <ecv-flex-row flexJustify=${FlexRowJustifyContent.BETWEEN} flexAlign=${FlexRowAlignItems.CENTER}>
                        <ecv-padding all="10px 20px">
                            <ecv-text .textStyle=${{
                                family: "Times New Roman, Georgia Serif", spacing: "5px",
                                size: "22px"
                            }}>Gourmet au Catering</ecv-text>
                        </ecv-padding>
                        <ecv-box-decoration>
                            <ecv-flex-row columnGap="20px">
                                <ecv-padding>
                                    <ecv-text .textStyle=${infoTextStyle}>About</ecv-text>
                                </ecv-padding>
                                <ecv-padding>
                                    <ecv-text .textStyle=${infoTextStyle}>Menu</ecv-text>
                                </ecv-padding>
                                <ecv-padding>
                                    <ecv-text .textStyle=${infoTextStyle}>Contact</ecv-text>
                                </ecv-padding>
                            </ecv-flex-row>
                        </ecv-box-decoration>
                    </ecv-flex-row>
                </ecv-padding>
            </ecv-box-decoration>
            `}
        `;
    }

    private _aboutCateringSession(): TemplateResult {
        return html`
            ${this._applicationWidth < 768 ? html`
            <ecv-margin top="50px" bottom="30px">
                <ecv-text .textStyle=${{
                    size: "45px",
                    family: "Playfair Display, serif"
                }}>About Catering</ecv-text>
            </ecv-margin>
            <ecv-margin all="20px 0">
                <ecv-padding left="30px">
                    <ecv-text .textStyle=${{
                        letterSpacing: "5px",
                        family: "Playfair Display, serif"
                    }}>Tradition since 1889</ecv-text>
                </ecv-padding>
            </ecv-margin>
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-margin all="10px 0">
                        <ecv-text .textStyle=${{
                            family: "'Times New Roman', Georgia, Serif"
                        }}>
                        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use
                            <span>
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: "#f1f1f1", width: "fit-content"
                                }} style="display: inline-block;">
                                    <ecv-padding all="0 5px">
                                        <ecv-text>seasonal</ecv-text>
                                    </ecv-padding>
                                </ecv-box-decoration>
                                ingredients.
                            </span> 
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-margin all="10px 0">
                        <ecv-text .textStyle=${{
                            family: "'Times New Roman', Georgia, Serif",
                            color: "#757575"
                        }}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
            ` : html`
            <ecv-margin top="80px"></ecv-margin>
            <ecv-grid columns="50% 50%">
                <ecv-flex-column>
                    <ecv-image source="https://www.w3schools.com/w3images/tablesetting2.jpg"></ecv-image>
                </ecv-flex-column>
                <ecv-flex-column>
                    <ecv-flex-center>
                        <ecv-text .textStyle=${{
                            family: "Playfair Display, serif",
                            size: "36px",
                            letterSpacing: "5px"
                        }} style="text-align: center;">About Catering</ecv-text>
                    </ecv-flex-center>
                    <ecv-flex-center>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "18px",
                                lettterSpacing: "5px",
                                family: "Playfair Display, serif"
                            }}>Tradition since 1889</ecv-text>
                        </ecv-margin>
                    </ecv-flex-center>
                    <ecv-margin all="10px 20px">
                        <ecv-text .textStyle=${{
                            family:"'Times New Roman', Georgia, Serif"
                        }}>
                        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use
                            <ecv-text-span>
                                <ecv-box-decoration .decoration=${{
                                    backgroundColor: "#f1f1f1",
                                    width: "fit-content"
                                }} style="display: inline-block;">
                                    <ecv-padding all="0 5px">
                                        <ecv-text>seasonal</ecv-text>
                                    </ecv-padding>
                                </ecv-box-decoration>
                                ingredients.
                            </ecv-text-span> 
                        </ecv-text>
                    </ecv-margin>
                    <ecv-margin all="10px 20px">
                        <ecv-text .textStyle=${{
                            family: "'Times New Roman', Georgia, Serif", color: "#757575"
                        }}>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </ecv-text>
                    </ecv-margin>                    
                </ecv-flex-column>
            </ecv-grid>
            `}
        `;
    }

    private _ourMenuSession(): TemplateResult {
        return html`
            ${this._applicationWidth < 768 ? html`
            <ecv-margin top="50px" bottom="30px">
                <ecv-text .textStyle=${{
                    family: "Playfair Display, serif",
                    size: "36px",
                    spacing: "5px"
                }}>Our Menu</ecv-text>
            </ecv-margin>
            <ecv-margin all="30px 0">
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-text .textStyle=${{
                        size: "20px",
                        level: "3",
                        family: "Playfair Display, serif",
                        letterSpacing: "5px"
                    }}>
                        Bread Basket
                    </ecv-text>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            size: "15px"
                        }}>
                            Assortment of fresh baked fruit breads and muffins 5.50
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
            </ecv-margin>
            <ecv-margin all="30px 0">
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-text .textStyle=${{
                        size: "20px",
                        family: "Playfair Display, serif",
                        letterSpacing: "5px"
                    }}>
                        Honey Almond Granola with fruits
                    </ecv-text>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            size: "15px"
                        }}>
                            Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
            </ecv-margin>
            <ecv-margin all="30px 0">
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-text .textStyle=${{
                        size: "20px",
                        family: "Playfair Display, serif",
                        letterSpacing: "5px"
                    }}>
                        Belgian Waffle
                    </ecv-text>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            size: "15px"
                        }}>
                            Vanilla flavored batter with malted flour 7.50
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
            </ecv-margin>
            <ecv-margin all="30px 0">
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-text .textStyle=${{
                        size: "20px",
                        family: "Playfair Display, serif",
                        letterSpacing: "5px"
                    }}>
                        Scrambled eggs
                    </ecv-text>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            size: "15px"
                        }}>
                            Scrambled eggs, roasted red papper and garlic, with green onions 7.50
                        </ecv-text>
                    </ecv-margin>
                </ecv-box-decoration>
            </ecv-margin>
            <ecv-margin all="30px 0">
                <ecv-box-decoration .decoration=${{
                    width: "80%"
                }}>
                    <ecv-text .textStyle=${{
                        size: "20px",
                        family: "Playfair Display, serif",
                        letterSpacing: "5px"
                    }}>
                        Blueberry Pancakes
                    </ecv-text>
                    <ecv-margin all="12px 0">
                        <ecv-text .textStyle=${{
                            size: "15px"
                        }}>
                            With syrup, butter and lots of berries 8.50
                        </ecv-text>
                    </ecv-margin>
                    <ecv-margin all="30px 0">
                        <ecv-image source="https://www.w3schools.com/w3images/tablesetting.jpg"></ecv-image>
                    </ecv-margin>
                </ecv-box-decoration>
            </ecv-margin>
            ` : html`
                <ecv-grid columns="50% 50%" columnGap="10px">
                    <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "36px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Our Menu</ecv-text>
                        </ecv-margin>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "20px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Bread Basket</ecv-text>
                            <ecv-margin all="12px 0">
                                <ecv-text .textStyle=${{
                                    size: "15px"
                                }}>
                                    Assortment of fresh baked fruit breads and muffins 5.50
                                </ecv-text>
                            </ecv-margin>
                        </ecv-margin>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "20px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Honey Almond Granola with Fruits
                            </ecv-text>
                            <ecv-margin all="12px 0">
                                <ecv-text .textStyle=${{
                                    size: "15px"
                                }}>
                                    Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
                                </ecv-text>
                            </ecv-margin>
                        </ecv-margin>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "20px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Belgian Waffle</ecv-text>
                            <ecv-margin all="12px 0">
                                <ecv-text .textStyle=${{
                                    size: "15px"
                                }}>
                                    Vanilla flavored batter with malted flour 7.50
                                </ecv-text>
                            </ecv-margin>
                        </ecv-margin>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "20px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Scrambled eggs</ecv-text>
                            <ecv-margin all="12px 0">
                                <ecv-text .textStyle=${{
                                    size: "15px"
                                }}>
                                    Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
                                </ecv-text>
                            </ecv-margin>
                        </ecv-margin>
                        <ecv-margin all="20px 0">
                            <ecv-text .textStyle=${{
                                size: "20px",
                                family: "Playfair Display, serif",
                                letterSpacing: "5px"
                            }}>Blueberry Pancakes</ecv-text>
                            <ecv-margin all="12px 0">
                                <ecv-text .textStyle=${{
                                    size: "15px"
                                }}>
                                    With syrup, butter and lots of barries 8.50
                                </ecv-text>
                            </ecv-margin>
                        </ecv-margin>
                    </ecv-flex-column>
                    <ecv-flex-column>
                        <ecv-flex-center>
                            <ecv-image source="https://www.w3schools.com/w3images/tablesetting.jpg"></ecv-image>
                        </ecv-flex-center>
                    </ecv-flex-column>
                </ecv-grid>
            `}
        `;
    }

    override render(): TemplateResult {
        return html`
        <ecv-grid columns="100%">
            <ecv-flex-column>
                ${this._gourmetCateringTopBar()}
                <ecv-flex-row>
                    <ecv-positioned-box position="relative">
                        <ecv-image source="https://www.w3schools.com/w3images/hamburger.jpg"></ecv-image>
                        <ecv-positioned-box bottom="0" position="absolute">
                            <ecv-padding all="0 0 0 20px">
                                <ecv-text .textStyle=${{
                                    size: "max(22px, min(7vw, 60px))", family: "Playfair Display, serif"
                                }}>La Catering</ecv-text>
                            </ecv-padding>
                        </ecv-positioned-box>
                    </ecv-positioned-box>
                </ecv-flex-row>
                <ecv-box-decoration .decoration=${{
                    width: "100%",
                    backgroundColor: `${colors.white}`
                }}>
                    <ecv-padding all="0 20px">
                        ${this._aboutCateringSession()}
                        <ecv-flex-column flexAlign=${FlexColumnAlignItems.START}>
                            <ecv-box-decoration .decoration=${{
                                width: `${this._applicationWidth < 768 ? "80%" : "100%"}`
                            }}>
                                <ecv-margin all="100px 0">
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                            </ecv-box-decoration>
                            ${this._ourMenuSession()}
                            <ecv-box-decoration .decoration=${{
                                width: `${this._applicationWidth < 768 ? '80%' : '100%'}`
                            }}>
                                <ecv-margin all="30px 0">
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                width: "80%"
                            }}>
                                <ecv-margin all="30px 0">
                                    <ecv-text .textStyle=${{
                                        size: "36px",
                                        family: "Playfair Display, serif", letterSpacing: "5px"
                                    }}>Contact</ecv-text>
                                </ecv-margin>
                            </ecv-box-decoration>
                            <ecv-box-decoration .decoration=${{
                                width: "80%"
                            }}>
                                <ecv-margin all="20px 0">
                                        <ecv-text>
                                        We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.
                                        </ecv-text>
                                </ecv-margin>
                                <ecv-margin all="20px 0">
                                        <ecv-text .textStyle=${{
                                            color: "#607d8b"
                                        }}>
                                        Catering Service, 42nd Living St, 43043 New York, NY
                                        </ecv-text>
                                </ecv-margin>
                                <ecv-margin all="20px 0">
                                        <ecv-text>
                                        You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
                                        </ecv-text>
                                </ecv-margin> 
                            </ecv-box-decoration>
                            <ecv-box-decoration width="80%">
                                <ecv-margin all="20px 0">
                                    <input type="text" placeholder="Name" style="border: none;">
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                                <ecv-margin all="20px 0">
                                    <input type="text" placeholder="How many people" style="border: none;">
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                                <ecv-margin all="20px 0">
                                    <input type="date" placeholder="16/11/2020 20:00" style="border: none;">
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                                <ecv-margin all="20px 0">
                                    <ecv-flex-row>
                                        <input type="text" placeholder="Message\\ Special requirements" style="border: none;flex: 1;">
                                    </ecv-flex-row>
                                    <ecv-divisor></ecv-divisor>
                                </ecv-margin>
                                <ecv-margin all="10px 0">
                                    <ecv-box-decoration .decoration=${{
                                        backgroundColor: "#f1f1f1"
                                    }}>
                                        <ecv-padding all="10px 15px">
                                            <ecv-text>SEND MESSAGE</ecv-text>
                                        </ecv-padding>
                                    </ecv-box-decoration>
                                </ecv-margin>
                            </ecv-box-decoration>
                        </ecv-flex-column>
                    </ecv-padding>
                </ecv-box-decoration>
            </ecv-flex-column>
        </ecv-grid>
    `;
    }

}