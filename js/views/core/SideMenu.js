import themeColors from '../../utils/themeColors.js';
import HeaderComponent from '../components/HeaderComponent.js';
import SearchComponent from '../components/SearchComponent.js';
import UserComponent from '../components/UserComponent.js';
import ListComponent from '../components/list-component/ListComponent.js';

class SideMenu extends HTMLElement{

    #headerComponent;
    #sideMenu;
    #userComponent;
    #searchComponent;
    #listComponent;

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
            this.#searchComponent = new SearchComponent(),
            this.#listComponent = new ListComponent()
        );

        return this.#sideMenu;
    }

    #collapseOrExpandSideMenu(){

        const collapseButton = this.#headerComponent.shadow.querySelector('.headerComponent__collapse');

        collapseButton.addEventListener("click", () => {

            this.#sideMenu.classList.toggle('sideMenuCollapsed');

            if(this.#sideMenuIsCollapsed()){

                this.#collapseAllComponents();
            }else{

                this.#expandAllComponents();
            }

        });
    }

    #expandAllComponents(){        

        this.#sideMenu.childNodes.forEach(component => {

            component.expand();
        });
    }

    #collapseAllComponents(){
        
        this.#sideMenu.childNodes.forEach(component => {
        
            component.collapse();
        });
    }

    #sideMenuIsCollapsed(){

        return this.#sideMenu.classList.contains('sideMenuCollapsed');
    }
}

customElements.define('side-menu', SideMenu);

export default SideMenu;