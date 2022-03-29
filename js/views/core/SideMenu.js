import themeColors from '../../utils/themeColors.js';
import HeaderComponent from '../components/HeaderComponent.js';
import UserComponent from '../components/UserComponent.js';

class SideMenu extends HTMLElement{

    #headerComponent;
    #sideMenu;
    #userComponent;

    constructor(){
        super();
        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());   
        this.#collapseOrExpandSideMenu();     
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
        this.#sideMenu.appendChild(this.#userComponent = new UserComponent());        

        return this.#sideMenu;
    }

    #collapseOrExpandSideMenu(){

        const headerElement = {

            geoLogoLink: this.#headerComponent.shadow.querySelector('.headerComponent a'),
            geoLogo: this.#headerComponent.shadow.querySelector('.headerComponent__geoLogo'),
            collapseButton: this.#headerComponent.shadow.querySelector('.headerComponent__collapse'),
        }
        const sideMenu = this.#headerComponent.shadow.getRootNode().host.parentElement;

        headerElement.collapseButton.addEventListener("click", () => {

            if(this.#isCollapsed(sideMenu)){

                this.#expand(sideMenu, headerElement);
            }else{

                this.#collapse(sideMenu, headerElement);
            }

        });
    }

    #expand(sideMenu, headerElement){

        sideMenu.classList.remove('sideMenuCollapsed');
        this.#headerComponent.expand(headerElement);
    }

    #collapse(sideMenu, headerElement){

        sideMenu.classList.add('sideMenuCollapsed');
        this.#headerComponent.collapse(headerElement);
    }

    #isCollapsed(sidemenu){

        return sidemenu.classList.contains('sideMenuCollapsed');
    }
}

customElements.define('side-menu', SideMenu);

export default SideMenu;