import themeColors from "../../../utils/themeColors.js";

class ToggleComponent extends HTMLElement{

    #toggleElements;
    #sideMenuIsCollapsed;
    #buttonActions;

    constructor(){
        super();
        this.#sideMenuIsCollapsed = false;

        this.#render();        
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open'});
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
        this.#showToggleItemsOnHoverWhenSideMenuIsCollapsed();
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
                overflow: hidden;
            }

            .toggleComponent__items__button{

                border: 1px solid ${themeColors.itemColor};
                background-color: ${themeColors.primaryColor};
                color: ${themeColors.itemColor};
                text-transform: uppercase;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                font-size: 1rem;
                padding: 1rem .9rem;
                cursor: pointer;            
                position: relative;    
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
                z-index: 9;
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

        this.toggleElements = {

            buttons: toggleComponent.querySelectorAll('.toggleComponent__items__button'),
            toggle: toggleComponent,           
            items: toggleComponent.querySelector('.toggleComponent__items'),           
            menu: toggleComponent.querySelector('#menu'),
            camadas: toggleComponent.querySelector('#camadas'),
            favoritos: toggleComponent.querySelector('#favoritos')
        }
        this.#buttonActions = {

            notSelectedButtons: toggleComponent.querySelectorAll('.toggleComponent__items__button:not(.active-tab)'),
            selectedButton: toggleComponent.querySelector('.active-tab')
        }
        
        return toggleComponent; 
    };

    collapse(){

        this.#sideMenuIsCollapsed = true;

        this.toggleElements.toggle.style.justifyContent = "unset";

        this.toggleElements.menu.innerHTML = `<i class="bi bi-grid"></i>`;

        this.toggleElements.camadas.innerHTML = `<i class="bi bi-layers"></i>`;

        this.#removeStyleOfButtonsHoveredWhenSideMenuIsCollapsed();

        this.toggleElements.buttons.forEach(item => {

            item.style.border = `1px solid ${themeColors.itemColor}`;
            item.style.borderRadius = "0.5rem";
        });
    };

    expand(){

        this.toggleElements.menu.innerHTML = `<span>Menu</span>`;

        this.toggleElements.camadas.innerHTML = `<span>Camadas</span>`;

        this.toggleElements.toggle.removeAttribute("style");        
        this.#buttonActions.selectedButton.removeAttribute("style");

        this.#buttonActions.notSelectedButtons.forEach(item => {

            item.removeAttribute("style");
        });

        this.#sideMenuIsCollapsed = false;
    };

    #showToggleItemsOnHoverWhenSideMenuIsCollapsed(){

        this.toggleElements.buttons.forEach(item => {

            item.addEventListener("mouseover", () => {

                this.#setStyleOfButtonsOnHoverWhenSideMenuIsCollapsed();
            });
        });

        this.toggleElements.toggle.addEventListener("mouseleave", () => {

            this.#removeStyleOfButtonsHoveredWhenSideMenuIsCollapsed();
        });
    }

    selectTab(){

        this.toggleElements.buttons.forEach(item => {

            item.addEventListener("click", () => {

                this.#removeButtonSelection();
                item.classList.add("active-tab");
                this.#defineSelectedAndNonSelectedButtons();
                this.#setStyleOfButtonsOnHoverWhenSideMenuIsCollapsed();
            });
        });
    }

    #removeButtonSelection(){

        this.toggleElements.buttons.forEach(item => {

            item.classList.remove("active-tab");
        });
    }

    #defineSelectedAndNonSelectedButtons(){

        this.#buttonActions = {

            notSelectedButtons: this.toggleElements.toggle.querySelectorAll('.toggleComponent__items__button:not(.active-tab)'),
            selectedButton: this.toggleElements.toggle.querySelector('.active-tab'),
        }
    }

    #setStyleOfButtonsOnHoverWhenSideMenuIsCollapsed(){

        if(this.#sideMenuIsCollapsed){
            
            this.toggleElements.menu.style.borderRadius = "0.5rem 0 0 0.5rem";
            this.toggleElements.camadas.style.borderRadius = "0";
            this.toggleElements.favoritos.style.borderRadius = "0 0.5rem 0.5rem 0";            
            this.toggleElements.items.style.overflow = "visible";

            this.toggleElements.buttons.forEach(item => {
                
                item.style.transform = "translate(100%, 0%)";
                item.style.transition = "transform 0.5s ease 0s";
            })
        }
    }

    #removeStyleOfButtonsHoveredWhenSideMenuIsCollapsed(){

        if(this.#sideMenuIsCollapsed){

            this.toggleElements.camadas.style.zIndex = "5";
            this.toggleElements.menu.style.transform = "translate(100%, 0%)";
            this.toggleElements.camadas.style.transform = "translate(0%, 0%)";
            this.toggleElements.favoritos.style.transform = "translate(-100%, 0%)";
            this.toggleElements.items.removeAttribute("style");

            this.toggleElements.buttons.forEach(item => {

                item.style.borderRadius = "0.5rem";
            })
        }
    }
}

customElements.define('toggle-component', ToggleComponent);

export default ToggleComponent;