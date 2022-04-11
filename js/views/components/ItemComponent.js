import themeColors from "../../utils/themeColors.js";
import Toast from "../shared/Toast.js";

class ItemComponent extends HTMLElement{

    #icon;
    #title;
    #itemElements;
    #subList;
    #sideMenuIsCollapsed;
    #toast;
    #toastContent;
    #itemComponent;

    constructor(icon, title, sublist, toast){
        super();

        this.#icon = icon;
        this.#title = title;
        this.#subList = sublist;
        this.#toastContent = toast;
        this.#render();
        this.#openSubmenu();
        this.#showToast();
        this.#sideMenuIsCollapsed = false;
    };

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    };

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

            .itemComponent{

                margin: 1rem 0;
                cursor: pointer;
                user-select: none;
            }

            .itemComponent > * {
                
                color: ${themeColors.itemColor};
                font-family: 'Roboto', sans-serif;
                user-select: none;
            }

            .itemComponent__item{

                display: flex;
                justify-content: space-between;
            }

            .itemComponent__info__item{

                display: flex;
                cursor: pointer;
            }

            .itemComponent__menu__submenu{
                
                max-height: 0rem;
                margin: 0 !important;
                overflow: hidden;             
                margin-left: 2rem !important;   
                transition: max-height .2s;
            }

            .itemComponent__menu__submenu > * {

                margin: 1rem 0;
            }

            .itemComponent__info__item span{

                margin-left: .5rem;
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1rem;
                line-height: 18px;
                white-space: nowrap;
            }

            .itemComponent__info__item__title{

                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .itemComponent__menu{

                overflow: hidden;
                transition: transform .5s;  
            }

            .itemComponent__info__item__title span{

                transition: opacity .2s;
            }

            .itemComponent__info__item i{

                transition: transform .3s;
            }

            .itemComponent__menu__submenu__submenu{

                display: flex;
                justify-content: space-between;
            }

            .opened-submenu{

                transition: max-height .5s;
                max-height: 50rem;                
            }
        `;

        return style;
    };

    #html(){

        this.#itemComponent = document.createElement('div');
        this.#itemComponent.classList.add('itemComponent');
        this.#itemComponent.innerHTML = `

            <div class="itemComponent__item">
                <div class="itemComponent__info__item">
                    <i class="${this.#icon}"></i>  
                    <div class="itemComponent__info__item__title">
                        <span>${this.#title}</span>
                    </div>                
                </div>

                <div class="itemComponent__menu">
                    ${this.#subList ? 

                        `<i class="bi bi-chevron-right"></i>` 
                        : 
                        ''
                    }
                </div>
            </div>

            ${this.#subList ? 
                    
                `<div class="itemComponent__menu__submenu">
                    ${this.#subList.map(item =>  
                        
                        item.subList ? 
                        `<div class="itemComponent__menu__submenu__submenu itemComponent__item">
                            <div>${item.name}</div> 
                            <i class="bi bi-chevron-right itemComponent__menu"></i> 
                        </div>
                        <div class="itemComponent__menu__submenu__sublist itemComponent__menu__submenu">
                            ${item.subList.map(item => 

                                `<div>${item.name}</div>`
                            ).join('')}
                        </div>
                        `
                        :
                        `<div>${item.name}</div>`                        
                    ).join('')}
                </div>
                `                 
                : 
                ''
            }
        `;

        this.#itemElements = {

            item: this.#itemComponent.querySelectorAll('.itemComponent__item'),
            iconParent: this.#itemComponent.querySelectorAll('.itemComponent__menu'),
            icon: this.#itemComponent.querySelectorAll('.itemComponent__item i'),
            title: this.#itemComponent.querySelectorAll('.itemComponent__info__item__title span'),
            subMenu: this.#itemComponent.querySelectorAll('.itemComponent__menu__submenu')
        };

        return this.#itemComponent;
    };

    #showToast(){

        this.#itemElements.item.forEach(item => {

            item.addEventListener("mouseenter", () => {

                if(this.#toastContent.gif && this.#toastContent.description)
                    this.#itemComponent.prepend(this.#toast = new Toast(this.#toastContent, this.#itemElements.item));
            });

            item.addEventListener("mouseleave", () => {

                if(this.#toastContent.gif && this.#toastContent.description)
                    this.#itemComponent.removeChild(this.#toast);
            });
        });        
    };

    collapse(){

        this.#itemElements.title.forEach(element => {
           
            element.style.opacity = 0;
        });

        this.#itemElements.icon.forEach(element => {
           
            element.style.transform = "translate(150%, 0)";
        });
        
        this.#itemElements.subMenu.forEach(element => {

            element.classList.remove("opened-submenu");
        });

        this.#itemElements.iconParent.forEach(element => {

            element.style.transition = "rotate .3s";
            element.style.transform = "rotate(0deg)";
        });

        this.#sideMenuIsCollapsed = true;
    };

    expand(){

        this.#itemElements.title.forEach(element => {

            element.removeAttribute("style");
        });    
        
        this.#itemElements.icon.forEach(element => {

            element.removeAttribute("style");
        });        

        this.#sideMenuIsCollapsed = false;
    };

    #openSubmenu(){

        this.#itemElements.item.forEach(element => {
        
            element.addEventListener("click", () => {

                if(!this.#sideMenuIsCollapsed){

                    element.nextElementSibling.classList.toggle("opened-submenu");
                    if(element.nextElementSibling.classList.contains("opened-submenu")){
    
                        element.firstChild.parentNode.children[1].style.transform = "rotate(90deg)";
                    }else{
    
                        element.firstChild.parentNode.children[1].removeAttribute("style");
                    }
                }
            });
        });
    }
}

customElements.define('item-component', ItemComponent);

export default ItemComponent;