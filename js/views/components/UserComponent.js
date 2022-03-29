import themeColors from "../../utils/themeColors.js";

class UserComponent extends HTMLElement{

    constructor(){
        super();
        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

            .userComponent{

                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .5rem 1rem;
            }

            .userComponent__logout{

                font-size: 1.5rem;
                color: ${themeColors.secundaryColor}
            }
            
            .userComponent__image{

                border-radius: 50%;
            }

            .userComponent__info{

                font-family: 'Roboto', sans-serif;
                font-weight: 500;
            }

            .userComponent__info h3{

                font-size: 14px;
                margin-bottom: .5rem;
                color: ${themeColors.tertiaryColor};
            }

            .userComponent__info h4{
                
                font-size: 11px;
                line-height: 16px;
                margin-top: .5rem;
                color: ${themeColors.itemColor};
            }
        `;

        return style;
    }

    #html(){

        const userComponent = document.createElement('div');
        userComponent.classList.add('userComponent');

        userComponent.innerHTML = `

            <img class="userComponent__image" src="../../../assets/prefeitura_logo.svg">
            <div class="userComponent__info">

                <h3>Prefeitura</h3>
                <h4>São José do Rio Preto<br>São Paulo</h4>
            </div>
            <i class="bi bi-arrow-bar-right userComponent__logout"></i>
        `;

        return userComponent;
    }

    collapse(){

        
    }

    expand(){

        
    }
    
}

customElements.define('user-component', UserComponent);

export default UserComponent;