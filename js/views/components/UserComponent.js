import themeColors from "../../utils/themeColors.js";

class UserComponent extends HTMLElement{

    #userElements;

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
                margin: 1.5rem 0rem;
                overflow: hidden;
                transform: translate(0px, 0px);
                transition: transform .3s;
            }

            .userComponent__logout{

                font-size: 1.5rem;
                transition: font-size .3s;
                color: ${themeColors.secundaryColor};
                cursor: pointer;
            }
            
            .userComponent__image{

                border-radius: 50%;
                transition: transform .3s, -webkit-transform .3s;
            }

            .userComponent__info{

                white-space: nowrap;
                transition: opacity .5s ease;
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

        this.#userElements = {

            userComponent : userComponent,
            userImg : userComponent.querySelector('.userComponent__image'),
            userInfo : userComponent.querySelector('.userComponent__info'),
            logout : userComponent.querySelector('.userComponent__logout')
        }

        return userComponent;
    }

    collapse(){

        this.#userElements.userComponent.style.justifyContent = "start";

        this.#userElements.userInfo.style.width = 0;
        this.#userElements.userInfo.style.opacity = 0;
        this.#userElements.userInfo.style.transform = "translate(20px, 0)";

        this.#userElements.logout.style.transform = "translate(155px, 0)";
    }

    expand(){

        this.#userElements.userComponent.style.justifyContent = "space-between";

        this.#userElements.userInfo.style.width = "unset";
        this.#userElements.userInfo.style.opacity = 1;
        this.#userElements.userInfo.style.transform = "translate(0px, 0)";

        this.#userElements.logout.style.transform = "translate(0, 0)";
    }
    
}

customElements.define('user-component', UserComponent);

export default UserComponent;