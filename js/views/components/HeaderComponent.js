class HeaderComponent extends HTMLElement{

    #shadow;

    constructor(){
        super();
        this.#render();
    }

    #render(){

        this.#shadow = this.attachShadow({ mode: 'open' });
        this.#shadow.appendChild(this.#style());
        this.#shadow.appendChild(this.#html());
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
            
            .headerComponent{

                height: 4rem;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .headerComponent > *{

                margin: auto 1rem;
                cursor: pointer;
            }

            .headerComponent__collapse{

                font-size: 2rem;           
            }

            .headerComponent__geoLogo{
                
                transition: opacity 2s ease 0s;
                opacity: 1;
                width: unset;
                margin: auto 1rem;
            }

            .headerComponent a{

                width: 35px;
                height: 29px;
                margin: auto 0px;
            }
        `;

        return style;
    }

    #html(){

        const headerComponent = document.createElement('div');
        headerComponent.classList.add('headerComponent');

        headerComponent.innerHTML = `

            <a href="https://www.geodados.com.br/" target="_blank">
                <img src="../../../assets/geodados_logo.svg" class="headerComponent__geoLogo">
            </a>
            <i class="bi bi-arrow-left-short headerComponent__collapse"></i>
        `;

        return headerComponent;
    }

    collapseMenu(){

        const headerElement = {

            geoLogoLink: this.#shadow.querySelector('.headerComponent a'),
            geoLogo: this.#shadow.querySelector('.headerComponent__geoLogo'),
            collapseButton: this.#shadow.querySelector('.headerComponent__collapse')
        }

        const sideMenu = this.#shadow.getRootNode().host.parentElement;

        headerElement.collapseButton.addEventListener("click", () => {

            if(!sideMenu.classList.contains('sideMenuCollapsed')){

                sideMenu.classList.add('sideMenuCollapsed');
                this.#styledHeaderCollapsed(headerElement);
            }else{

                sideMenu.classList.remove('sideMenuCollapsed');
                this.#styleHeaderExpanded(headerElement);
            }

        });
    }

    #styledHeaderCollapsed(headerElement){

        headerElement.collapseButton.style.transform = "rotate(180deg)";
        headerElement.collapseButton.style.transition = "all .5s"

        headerElement.geoLogoLink.style.width = "0";
        headerElement.geoLogo.style.transition = "opacity .5s";  
        headerElement.geoLogo.style.opacity = "0";
    }

    #styleHeaderExpanded(headerElement){
        
        headerElement.collapseButton.style.transform = "rotate(0deg)";
        headerElement.collapseButton.style.transition = "all .5s";  

        headerElement.geoLogo.style.transition = "opacity 2s";  
        headerElement.geoLogo.style.opacity = "1";
        headerElement.geoLogo.style.width = "unset";
    }
}

customElements.define('header-component', HeaderComponent);

export default HeaderComponent;