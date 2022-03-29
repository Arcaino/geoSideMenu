import themeColors from '../../utils/themeColors.js';
import HeaderComponent from '../components/HeaderComponent.js';

class SideMenu extends HTMLElement{

    #headerComponent;
    #sideMenu;

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

            .sideMenu{
                
                width: 17rem;
                height: 100%;
                background-color: ${themeColors.primaryColor};
                box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
                transition: width .5s; 
            }

            .sideMenuCollapsed{

                width: 4rem;
                transition: width .5s;  
            }
        `;

        return style;
    }

    #html(){

        this.#sideMenu = document.createElement('div');
        this.#sideMenu.classList.add('sideMenu');
        this.#sideMenu.appendChild(this.#headerComponent = new HeaderComponent());

        this.#collapseSideMenu();

        return this.#sideMenu;
    }

    #collapseSideMenu(){

        this.#headerComponent.collapseMenu();
    }
}

customElements.define('side-menu', SideMenu);

export default SideMenu;