import themeColors from '../../utils/themeColors.js';
import HeaderComponent from '../components/HeaderComponent.js';
import SearchComponent from '../components/SearchComponent.js';
import UserComponent from '../components/UserComponent.js';

class SideMenu extends HTMLElement{

    #headerComponent;
    #sideMenu;
    #userComponent;
    #searchComponent;

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
                
                width: 15rem;
                height: 100%;
                padding: 1rem;
                background-color: ${themeColors.primaryColor};
                box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
                transition: width .5s; 
            }

            .sideMenuCollapsed{

                width: 4rem;
                transition: width .5s;  
                padding: 1rem .5rem;
            }
        `;

        return style;
    }

    #html(){

        this.#sideMenu = document.createElement('div');
        this.#sideMenu.classList.add('sideMenu');

        this.#sideMenu.append(

            this.#headerComponent = new HeaderComponent(),
            this.#userComponent = new UserComponent(),
            this.#searchComponent = new SearchComponent()
        );

        return this.#sideMenu;
    }

    #collapseOrExpandSideMenu(){

        const collapseButton = this.#headerComponent.shadow.querySelector('.headerComponent__collapse');

        collapseButton.addEventListener("click", () => {

            if(this.#isCollapsed(this.#sideMenu)){

                this.#expand(this.#sideMenu);
            }else{

                this.#collapse(this.#sideMenu);
            }

        });
    }

    #expand(sideMenu){

        sideMenu.classList.remove('sideMenuCollapsed');

        this.#sideMenu.childNodes.forEach(item => {

            item.expand();
        });
    }

    #collapse(sideMenu){

        sideMenu.classList.add('sideMenuCollapsed');
        
        this.#sideMenu.childNodes.forEach(item => {
        
            item.collapse();
        });
    }

    #isCollapsed(sidemenu){

        return sidemenu.classList.contains('sideMenuCollapsed');
    }
}

customElements.define('side-menu', SideMenu);

export default SideMenu;