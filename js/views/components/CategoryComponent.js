import themeColors from "../../utils/themeColors.js";

class CategoryComponent extends HTMLElement{

    #name;

    constructor(name){
        super();

        this.#name = name;
        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            .categoryComponent{

                color: ${themeColors.secundaryColor};
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-style: normal;
                font-size: 13px;
                line-height: 18px;
                margin: 1rem 0;
            }
        `;

        return style;
    }

    #html(){

        const categoryComponent = document.createElement('div');
        categoryComponent.classList.add('categoryComponent');
        categoryComponent.innerHTML = `
            
            ${this.#name}
        `;

        return categoryComponent;
    }

    collapse(){

    }

    expand(){


    }
}

customElements.define('category-component', CategoryComponent);

export default CategoryComponent;