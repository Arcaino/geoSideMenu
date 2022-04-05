import themeColors from "../../utils/themeColors.js";

class ItemComponent extends HTMLElement{

    #icon;
    #title;
    #itemElements;

    constructor(icon, title){
        super();

        this.#icon = icon;
        this.#title = title;
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
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

            .itemComponent{

                margin: 1rem 0;
            }

            .itemComponent > * {
                
                display: flex;
                color: ${themeColors.itemColor};
                font-family: 'Roboto', sans-serif;
            }

            .itemComponent__item{

                cursor: pointer;
            }

            .itemComponent__item span{

                margin-left: .5rem;
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 1rem;
                line-height: 18px;
                white-space: nowrap;
            }

            .itemComponent__item__info{

                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .itemComponent__item__info span{

                transition: opacity .2s;
            }

            .itemComponent__item i{

                transition: transform .3s;
            }
        `;

        return style;
    }

    #html(){

        const itemComponent = document.createElement('div');
        itemComponent.classList.add('itemComponent');
        itemComponent.innerHTML = `

            <div class="itemComponent__item">
                <i class="${this.#icon}"></i>  
                <div class="itemComponent__item__info">
                    <span>${this.#title}</span>
                </div>
            </div>
                      
        `;

        this.#itemElements = {

            icon: itemComponent.querySelectorAll('.itemComponent__item i'),
            title: itemComponent.querySelectorAll('.itemComponent__item__info span')
        }

        return itemComponent;
    }

    collapse(){

        this.#itemElements.title.forEach(element => {
           
            element.style.opacity = 0;
        });

        this.#itemElements.icon.forEach(element => {
           
            element.style.transform = "translate(150%, 0)";
        });
    }

    expand(){

        this.#itemElements.title.forEach(element => {

            element.removeAttribute("style");
        });    
        
        this.#itemElements.icon.forEach(element => {

            element.removeAttribute("style");
        });        
    }
}

customElements.define('item-component', ItemComponent);

export default ItemComponent;