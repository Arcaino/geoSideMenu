import CheckMenuState from '../../../../utils/CheckMenuState.js';
import themeColors from '../../../../utils/themeColors.js';
import CategoryComponent from './CategoryComponent.js';
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
                overflow-x: hidden;
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
        `;

        return style;
    }

    #html(){

        this.#itemListComponent = document.createElement('div');
        this.#itemListComponent.classList.add('itemListComponent'); 

        return this.#itemListComponent;
    };

    #add(categoryName, items){        

        this.#itemListComponent.appendChild(

            this.#categoryComponent = new CategoryComponent(categoryName),
        );

        items.forEach(item => {

            this.#itemListComponent.appendChild(
                                                
                this.#itemComponent = new ItemComponent(item.icon, item.name, item.subList, item.toast),
            );
        });
    };

    #remove(){

        while (this.#itemListComponent.firstChild) {

            this.#itemListComponent.removeChild(this.#itemListComponent.firstChild);
        }
    }

    updateItemList(list){        

        if(this.#itemListComponent.childNodes.length > 0){

            this.#remove();
        }

        if(list){

            Object.entries(list).forEach(item => 
                
                this.#add(item[0], item[1])
            );
        }
    };

    collapse(){

        this.#itemListComponent.childNodes.forEach(component => {
        
            component.collapse();
        });
    };

    expand(){

        this.#itemListComponent.childNodes.forEach(component => {
        
            component.expand();
        });
    };
}

customElements.define('itemlist-component', ItemListComponent);

export default ItemListComponent;