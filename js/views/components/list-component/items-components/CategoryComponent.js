import themeColors from "../../../../utils/themeColors.js";

class CategoryComponent extends HTMLElement{

    #name;
    #categoryComponent;

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
                margin-bottom: 1rem;
                transition: all .5s;
                animation-name: opacity;
                animation-duration: .7s;
            }

            @keyframes opacity {
                0%   {opacity: 0;}
                100% {opacity: 1;}
            }
        `;

        return style;
    }

    #html(){

        this.#categoryComponent = document.createElement('div');
        this.#categoryComponent.classList.add('categoryComponent');
        this.#categoryComponent.innerHTML = `${this.#name}`;

        return this.#categoryComponent;
    }

    collapse(){

        this.#categoryComponent.style.fontSize = "9px";
        this.#categoryComponent.style.fontWeight = "600";
        this.#categoryComponent.style.textAlign = "center";
        this.#categoryComponent.style.transform = "translate(-0.25rem, 0)";
    }

    expand(){

        this.#categoryComponent.removeAttribute("style");
    }
}

customElements.define('category-component', CategoryComponent);

export default CategoryComponent;