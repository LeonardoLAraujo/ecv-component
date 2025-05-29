# ECV COMPONENT


## What it is:

It is a set of  <a href="https://www.webcomponents.org/introduction" target="_blank">**Web Componentes**</a> created using the <a href="https://lit.dev/" target="_blank">**Lit Element**</a> library, aiming to reuse, speed up, and standardize project development for the sector.


## Case Study

For about a month, several studies and tests were carried out to find a way to streamline the development process for creating layouts. Various templates and web layout types were analyzed, and some were selected to be reconstructed using the <a href="https://leonardolaraujo.github.io/ecv-components/index.html">**ECV Component**</a> structure.


## Why use ECV Component?

It became evident that with every new project created, everything had to be rebuilt, including recreating some components that had already been developed in past projects. To solve this problem, the <a href="https://leonardolaraujo.github.io/ecv-components/index.html">**ECV Component**</a> library was developed. The name originated from the abbreviated letters
<br>**(E C V)** which stand for **Visual Componentization Elements — A name that highlights the creation of reusable visual components**.

## Installation
```typescript
npm install ecv-component
```

## Import
```typescript
//importing the entire library
import 'ecv-component' 
// Or import a specific type
import type {BoxDecorationStyle} from 'ecv-component';
```

## Using ECV Component

### Basics of Layout Construction

You can create layouts using <a href="https://leonardolaraujo.github.io/ecv-components/index.html">**ECV Component**</a>, simply by adding the components to your project. However, it is recommended to use three specific components for this purpose:

- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_row.ECVFlexRow.html" target="_blank">**ECV Row**</a> - Layout with horizontal positioning.
- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_column.ECVFlexColumn.html" target="_blank">**ECV Column**</a> - Layout with vertical positioning.
- <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_grid.ECVGrid.html" target="_blank">**ECV Grid**</a> - Grid layout.

#### Layout focusing on horizontal positioning

To create a layout with horizontal positioning, use the <a href="https://leonardolaraujo.github.io/ecv-components/classes/components_ecv_flex_row.ECVFlexRow.html" target="_blank">**ECV Row**</a> component. See below the same scenario using just HTML structure and another using the **ECV Component** structure.

_Example using HTML_

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

_Example using ECV Component_


```typescript
    /*other code*/
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

## Documentation

The complete documentation, including usage examples, installation instructions, and detailed explanations of each component of the ECV Component library, is available on our official GitHub repository.

Access it here:

https://github.com/LeonardoLAraujo/ecv-components

## Documentation Website

https://leonardolaraujo.github.io/ecv-components/

There you will find:

Step-by-step installation guide

Practical usage examples

Detailed explanation of each component

How to contribute to the project

Common troubleshooting

We highly recommend consulting the GitHub documentation to take full advantage of all the library's features.

## I recorded building a small layout using ecv components
https://www.youtube.com/watch?v=tPBbeszlIXw

ECV Component — Simplifying layout creation with web components.
