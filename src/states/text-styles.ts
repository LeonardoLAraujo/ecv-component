import {FontWeight} from "../enumerations/font-weight";

/**
 * Objeto para estilizar o texto
 * @object
 * @export
 */
export type TextStyle = {
    /**
     * Tamanho do texto
     * @type {string | undefined}
     */
    size?:          string,
    /**
     * Peso das fonte
     * @type {FontWeight | undefined}
     */
    weight?:        FontWeight,
    /**
     * Fonte family do texto
     * @type {string | undefined}
     */
    family?:        string,
    /**
     * Cor do texto
     * @type {string | undefined}
     */
    color?:         string,
    /**
     * Espaçamento entre as palavras
     * @type {string | undefined}
     */
    letterSpacing?: string,
    /**
     * Espaçamento do comprimento entre as palavras
     * @type {string | undefined}
     */
    wordSpacing?:   string,
    /**
     * Distancia da altura entre as palavras
     * @type {string | undefined}
     */
    lineHeight?:    string,
    /**
     * Alinhamento do texto
     * @type {string | undefined}
     */
    textAlign?:     string,
    /**
     * Alterar o texto, como por exemplo em maiúsculo
     * @type {string | undefined}
     */
    textTransform?: string,
    /**
     * Sombra do texto
     * @type {string | undefined}
     */
    shadow?:        string,
    /**
     * O comprimento do espaço vazio das linhas
     * @type {string | undefined}
     */
    textIdent?:     string,
    /**
     * Estilizar a fonte, como itálica por exemplo
     * @type {string | undefined}
     */
    fontStyle?:     string,
}