class ItemListComponent extends HTMLElement{

    #toggle;
    #category;
    #items;
    #itemListComponent;

    constructor(toggle, category, items){
        super();

        this.#toggle = toggle;
        this.#category = category;
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

        this.#itemListComponent = document.createElement('div');
        this.#itemListComponent.classList.add('itemListComponent');
        this.#itemListComponent.append(
            this.#toggle,
            this.#category,
        );

        return this.#itemListComponent;
    }

    collapse(){

        this.#itemListComponent.childNodes.forEach(component => {
        
            component.collapse();
        });
    }

    expand(){
        
        this.#itemListComponent.childNodes.forEach(component => {

            component.expand();
        });
    }
}

customElements.define('item-list', ItemListComponent);

export default ItemListComponent;