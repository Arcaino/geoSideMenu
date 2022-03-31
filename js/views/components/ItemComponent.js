class ItemComponent extends HTMLElement{

    constructor(){
        super();

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

        `;

        return style;
    }

    #html(){

        const itemComponent = document.createElement('div');
        itemComponent.classList.add('itemComponent');
        itemComponent.innerHTML = `

        `;

        return itemComponent;
    }
}

customElements.define('item-component', ItemComponent);

export default ItemComponent;