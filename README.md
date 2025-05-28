# ECV COMPONENTS

## O que é:

É um conjunto de <a href="https://www.webcomponents.org/introduction" target="_blank">**Web Componentes**</a> criado usando a biblioteca <a href="https://lit.dev/" target="_blank">**Lit Element**</a>, com o intuito de reaproveitar, acelerar e padronizar o desenvolvimento de projetos para o setor.


## Estudo de caso

Durante aproximadamente um mês foram realizados diversos estudos e testes para encontrar uma forma de agilizar o processo de desenvolvimento na criação de layouts. Para isso, vários templates de diversos tipos layouts na web foram estudados dentre esses, alguns foram selecionados para que fosse feito a mesma montagem de sua estrutura de layout usando o <a href="#md:ecv-components">**ECV Components**</a>.


## Por que usar ECV Components?

Percebeu que a cada projeto novo criado, precisaria recriar tudo novamente, refazer alguns componentes já criados em projetos
passados para sanar esse problema, foi desenvolvida a biblioteca <a href="#md:ecv-components">**ECV Components**</a>. A origem do nome veio das letras abreviadas <br>**(E C V)** que significam **Elementos de Componentização Visual — Um nome que destaca a criação de componentes visuais reutilizáveis**.

## Instalação
npm install ecv-components

## Importação
import 'ecv-components' Ou, para componentes específicos:
import { MeuComponente } from 'ecv-components'

## Usando ECV Components

### Básico sobre construção de layouts

Você pode criar layouts usando o <a href="#md:ecv-components">**ECV Components**</a>, simplesmente adicionando os componentes para compor seu projeto, mas é recomendado usar **três** componentes específicos para isso, são eles:

- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_row.ECVFlexRow.html" target="_blank">**ECV Row**</a> - Layout com posicionamento horizontal.
- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_column.ECVFlexColumn.html" target="_blank">**ECV Column**</a> - Layout com posicionamento vertical.
- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_grid.ECVGrid.html" target="_blank">**ECV Grid**</a> - Layout em forma de grid.

#### Layout com foco em posicionamento horizontal

Para se criar um layout com posicionamento horizontal usa-se o componente <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_row.ECVFlexRow.html" target="_blank">**ECV Row**</a>. Veja abaixo um mesmo cenário usando a apenas estrutura HTML e outro usando, a estrutura **ECV Component**.

_Exemplo usando HTML_

```html
    <style>
      /*CSS*/
      .container{
        display: flex;
      }

    </style>
    <!-- HTML -->
    <div class="container">
        <p>A</p>
        <p>B</p>
        <p>C</p>
    </div>

```
<br>

_Exemplo usando ECV Components_


```typescript
    /*outros códigos*/
    ...

    render(): TemplateResult {

        return html`
            <ecv-flex-row>
                <ecv-text>A</ecv-text>
                <ecv-text>B</ecv-text>
                <ecv-text>C</ecv-text>
            </ecv-flex-row>
        `;
    }
    
```


## Documentação

A documentação completa, incluindo exemplos de uso, instalação, e explicações detalhadas sobre cada componente da biblioteca ECV Components, está disponível no nosso repositório oficial no GitHub.

Acesse:

https://github.com/LeonardoLAraujo/ecv-components

Lá você encontrará:

Guia de instalação passo a passo

Exemplos práticos de utilização

Detalhamento de cada componente

Como contribuir com o projeto

Resolução de problemas comuns

Recomendamos fortemente consultar a documentação no GitHub para aproveitar ao máximo todos os recursos da biblioteca.

ECV Components — Facilitando a criação de layouts com web components.
