class HeaderComponent extends HTMLElement{

    constructor(){
        super();
        this.#render();
    }

    #render(){

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(this.#style());
        this.shadow.appendChild(this.#html());
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
            
            .headerComponent{

                margin: 0rem 0 1.5rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .headerComponent > *{

                cursor: pointer;
            }

            .headerComponent__collapse{

                font-size: 2rem;           
            }

            .headerComponent__geoLogo{
                
                transition: opacity ease .5s;
                opacity: 1;
                width: unset;
                
            }

            .headerComponent a{

                width: 35px;
                height: 29px;
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

    collapse(headerElement){

        headerElement.collapseButton.style.transform = "translate(-50%, 0) rotate(180deg)";
        headerElement.collapseButton.style.transition = "all .5s"

        headerElement.geoLogoLink.style.width = "0";
        headerElement.geoLogo.style.opacity = "0";
    }

    expand(headerElement){
        
        headerElement.collapseButton.style.transform = "translate(-50%, 0) rotate(0deg)";
        headerElement.collapseButton.style.transition = "all .5s";  

        headerElement.geoLogoLink.style.width = "35px";
        headerElement.geoLogo.style.opacity = "1";
    }
}

customElements.define('header-component', HeaderComponent);

export default HeaderComponent;