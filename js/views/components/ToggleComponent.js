import themeColors from "../../utils/themeColors.js";

class ToggleComponent extends HTMLElement{

    #buttons;

    constructor(){
        super();

        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open'});
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
        this.#selectTab();
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `
        
            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

            .toggleComponent{
                
                margin: 1.5rem 0;
            }

            .toggleComponent__items{

                display: flex;
                justify-content: center;       
                list-style-type: none;
                padding: 0;
            }

            .toggleComponent__items__button{

                border: 1px solid ${themeColors.itemColor};
                background-color: ${themeColors.primaryColor};
                color: ${themeColors.itemColor};
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                font-size: 1rem;
                padding: 1rem 1rem;
                cursor: pointer;
            }

            .toggleComponent__items li:first-child .toggleComponent__items__button{

                border-radius: .5rem 0 0 .5rem;
                border-right: 0;
            }

            .toggleComponent__items li:last-child .toggleComponent__items__button{

                border-radius: 0 .5rem .5rem 0;
                border-left: 0;
            }

            .active-tab{

                background-color: ${themeColors.secundaryColor};
                color: ${themeColors.primaryColor};
            }
        `;

        return style;
    }

    #html(){

        const toggleComponent = document.createElement('div');
        toggleComponent.classList.add('toggleComponent');
        toggleComponent.innerHTML = `

            <ul class="toggleComponent__items">
                <li>
                    <button class="active-tab toggleComponent__items__button" id="menu">
                        <span>Menu</span>
                    </button>
                </li>
                <li>
                    <button class="toggleComponent__items__button" id="camadas">                       
                            <span>Camadas</span>
                    </button>
                </li>
                <li>
                    <button class="toggleComponent__items__button" id="favoritos">
                        <span>
                            <i class="bi bi-bookmark-star"></i>
                        </span>                    
                    </button>
                </li>
            </ul>
        `;

        this.#buttons = toggleComponent.querySelectorAll('.toggleComponent__items__button');
        
        return toggleComponent; 
    }

    #selectTab(){

        this.#buttons.forEach(item => {

            item.addEventListener("click", () => {

                this.#removeButtonSelection();
                item.classList.add("active-tab");
            })
        });
    }

    #removeButtonSelection(){

        this.#buttons.forEach(item => {

            item.classList.remove("active-tab");
        });
    }

    collapse(){

    };

    expand(){

    };
}

customElements.define('toggle-component', ToggleComponent);

export default ToggleComponent;