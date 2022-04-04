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
        shadow.appendChild(this.#html());
    };

    #html(){

        this.#itemListComponent = document.createElement('div');
        this.#itemListComponent.classList.add('itemListComponent'); 

        return this.#itemListComponent;
    };

    add(categoryName, items){

        this.#itemListComponent.appendChild(

            this.#categoryComponent = new CategoryComponent(categoryName),
        );

        items.forEach(item => {

            this.#itemListComponent.appendChild(
                                
                this.#itemComponent = new ItemComponent(item.icon, item.name)
            );
        });
    };
}

customElements.define('itemlist-component', ItemListComponent);

export default ItemListComponent;