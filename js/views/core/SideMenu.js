import themeColors from '../../utils/themeColors.js';

class SideMenu extends HTMLElement{

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
            }
        `;

        return style;
    }

    #html(){

        const sideMenu = document.createElement('div');
        sideMenu.classList.add('sideMenu');


        return sideMenu;
    }
}

customElements.define('side-menu', SideMenu);

export default SideMenu;