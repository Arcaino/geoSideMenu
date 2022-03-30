import themeColors from "../../utils/themeColors.js";

class SearchComponent extends HTMLElement{

    constructor(){
        super();

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

            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

            .searchComponent{

                margin: 1.5rem 0;
            }

            .searchComponent__search{

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;                
                padding: .5rem;
                width: 100%;
                font-size: 16px;
                background: ${themeColors.primaryColor};
                border: 2px solid #CED4DA;
                box-sizing: border-box;
                border-radius: 4px;
            }

            ::placeholder {
                
                font-family: 'Roboto', sans-serif;
                word-spacing: 7rem !important;
                font-style: normal;
                font-weight: 400;
                color: #6C757D;                
            }

            .searchComponent::before {

                content: "\\f52a";
                visibility: visible;
                font-family: "bootstrap-icons";
                color: ${themeColors.secundaryColor};
                font-weight: bold;
                position: absolute;
                transform: translate(210px, 10px);
            }

            .searchComponent__search:focus{

                border-color: #86b7fe;
                outline: 0;
                box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
            }
        `;

        return style;
    }

    #html(){

        const searchComponent = document.createElement('div');
        searchComponent.classList.add('searchComponent');
        searchComponent.innerHTML = `

            <input type="text" class="searchComponent__search" name="fname" placeholder="Pesquisar...">
        `;

        return searchComponent;
    }
}

customElements.define('search-component', SearchComponent);

export default SearchComponent;