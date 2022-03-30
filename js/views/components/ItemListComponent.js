class ItemListComponent extends HTMLElement{

    #toggle;
    #items;

    constructor(toggle, items){
        super();

        this.#toggle = toggle;
        this.#items = items;
        this.#render();
    }

    #render(){

        const shadow = this.attachShadow({ mode : 'open'});
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `

        `;

        return style;
    }

    #html(){

        const itemListComponent = document.createElement('div');
        itemListComponent.classList.add('itemListComponent');
        itemListComponent.append(
            this.#toggle,
        );

        return itemListComponent;
    }
}

customElements.define('item-list', ItemListComponent);

export default ItemListComponent;