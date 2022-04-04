import themeColors from '../../utils/themeColors.js';
import CategoryComponent from '../components/CategoryComponent.js';
import ItemComponent from './ItemComponent.js';

class ItemListComponent extends HTMLElement{

    #categoryComponent;
    #itemListComponent;
    #itemComponent;

    constructor(){
        super();

        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    };

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            .itemListComponent{

                height: calc(100% - 20rem);
                margin: 1.5rem 0;
                overflow-y: scroll;
                width: calc(100% + 1rem);
                color: #00000000;
                transition: color .5s;
            }

            .itemListComponent::-webkit-scrollbar-thumb{

                border-radius: 10rem;
                -webkit-box-shadow: inset 0 0 0 10px;
                box-shadow: inset 0 0 0 10px;
            }

            .itemListComponent:hover{

                color: ${themeColors.scrollColor};
            }

            .itemListComponent::-webkit-scrollbar{

                width: 5px;
            }

            .itemListComponent::-webkit-scrollbar-track-piece:start {
                
                margin-top: 2rem;
            }

            .fade{
                height: 40px;
                width: 17rem;
                transform: translate(0%, 0%);
                transition: .5s;
                left: 0;
                overflow: auto;
                position: absolute;
                background-color: ${themeColors.primaryColor};
                -webkit-mask-image: -webkit-gradient(linear, left 10%, left bottom, from(black), to(rgba(0, 0, 0, 0)));
                z-index: 9;
            }
        `;

        return style;
    }

    #html(){

        this.#itemListComponent = document.createElement('div');
        this.#itemListComponent.classList.add('itemListComponent'); 
        this.#itemListComponent.innerHTML = `
        
            <span class="fade"></span>
        `;

        return this.#itemListComponent;
    };

    add(categoryName, items){

        this.#itemListComponent.appendChild(

            this.#categoryComponent = new CategoryComponent(categoryName),
        );

        items.forEach(item => {

            this.#itemListComponent.appendChild(
                                
                this.#itemComponent = new ItemComponent(item.icon, item.name),
            );
        });
    };
}

customElements.define('itemlist-component', ItemListComponent);

export default ItemListComponent;