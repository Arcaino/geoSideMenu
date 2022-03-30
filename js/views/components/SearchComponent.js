import themeColors from "../../utils/themeColors.js";

class SearchComponent extends HTMLElement{

    #searchElements;
    #sideMenuIsCollapsed;

    constructor(){
        super();

        this.#render();
        this.#sideMenuIsCollapsed = false;
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
        this.#collapseOrExpandSearchInput();
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

            .searchComponent__icon i{

                color: ${themeColors.secundaryColor};
                font-weight: bold;
                position: absolute;
                transform: translate(210px, -27px);
                transition: all .5s;
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
            <span class="searchComponent__icon">
                <i class="bi bi-search"></i>
            </span>
        `;

        this.#searchElements = {

            component: searchComponent,
            input: searchComponent.querySelector('.searchComponent__search'),
            icon: searchComponent.querySelector('.searchComponent__icon i')
        };

        return searchComponent;
    }

    collapse(){

        
        this.#searchElements.icon.style.cursor = "pointer";
        this.#searchElements.icon.style.transform = "translate(150%, -27px)";

        this.#searchElements.input.style.transform = "translate(120%, 0)";
        this.#searchElements.input.style.visibility = "hidden";

        this.#sideMenuIsCollapsed = true;
    }

    expand(){

        this.#searchElements.icon.style.transform = "translate(210px, -27px)";
        this.#searchElements.icon.style.cursor = "default";
        this.#searchElements.icon.className =  "bi bi-search";
        this.#searchElements.icon.style.color = themeColors.secundaryColor;
        this.#searchElements.icon.style.backgroundColor = themeColors.primaryColor;
        this.#searchElements.icon.style.borderRadius = "0";
        this.#searchElements.icon.style.padding = "0";

        this.#searchElements.input.style.transform = "translate(0, 0)";
        this.#searchElements.input.style.visibility = "visible";
        this.#searchElements.input.style.width = "100%";

        this.#sideMenuIsCollapsed = false;
    }

    #collapseOrExpandSearchInput(){

        this.#searchElements.icon.addEventListener("click", () => {

            if(this.#sideMenuIsCollapsed == false) return;
            if(this.#searchInputIsCollapsed() && this.#sideMenuIsCollapsed == true){
                
                this.#expandSearch();
            }else{

                this.#collapseSearch();
            }
        
        });
    }

    #expandSearch(){

        this.#styleExpandedSearchIcon();
        this.#styleExpandedSearchInput();
    }

    #collapseSearch(){

        this.#styleCollapsedSearchIcon();
        this.#styleExpandedCollapsedInput();
    }

    #styleCollapsedSearchIcon(){

        this.#searchElements.icon.className =  "bi bi-search";
        this.#searchElements.icon.style.color = themeColors.secundaryColor;
        this.#searchElements.icon.style.backgroundColor = themeColors.primaryColor;
        this.#searchElements.icon.style.borderRadius = "0";
        this.#searchElements.icon.style.padding = "0";
        this.#searchElements.icon.style.transform = "translate(150%, -27px)";
    }

    #styleExpandedSearchIcon(){

        this.#searchElements.icon.className =  "bi bi-arrow-left";
        this.#searchElements.icon.style.color = themeColors.primaryColor;
        this.#searchElements.icon.style.backgroundColor = themeColors.secundaryColor;
        this.#searchElements.icon.style.borderRadius = "0.3rem";
        this.#searchElements.icon.style.padding = ".5rem";
        this.#searchElements.icon.style.transform = "translate(50%, -36px)";
    }

    #styleExpandedCollapsedInput(){

        this.#searchElements.input.style.visibility = "hidden";
    }

    #styleExpandedSearchInput(){

        this.#searchElements.input.style.width = "15rem";
        this.#searchElements.input.style.transform = "translate(55px, 0px)";
        this.#searchElements.input.style.visibility = "visible";
    }

    #searchInputIsCollapsed(){

        return this.#searchElements.icon.classList.value == 'bi bi-search';
    }
}

customElements.define('search-component', SearchComponent);

export default SearchComponent;