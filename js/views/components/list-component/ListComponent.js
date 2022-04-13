import ItemListComponent from "./items-components/ItemListComponent.js";
import ToggleComponent from "./items-components/ToggleComponent.js";
import menuItems from '../../../menuItems.js';

class ListComponent extends HTMLElement{
    
    #toggleComponent;
    #itemListComponent;
    #listComponent;

    constructor(){
        super();

        this.#render();
        this.#changeList();
    };

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    };

    #style(){

        const style = document.createElement('style');
        style.textContent = `

            .listComponent{

                position: relative;
                height: 100%;
            }
        `;

        return style;
    };

    #html(){

        this.#listComponent = document.createElement('div');
        this.#listComponent.classList.add('listComponent');
        this.#listComponent.append(

            this.#toggleComponent = new ToggleComponent(),
            this.#itemListComponent = new ItemListComponent(),
        );

        this.#itemListComponent.updateItemList(menuItems.menu.categories);

        return this.#listComponent;
    };

    #changeList(){

        this.#toggleComponent.toggleElements.buttons.forEach(item => {            

            item.addEventListener("click", () => {                

                if(!item.classList.contains('active-tab')){

                    this.#toggleComponent.selectTab(item);
                    this.#renderList(item);
                };              
            });
        });
    };

    #renderList(item){

        Object.entries(menuItems).forEach(selected => {
    
            if(selected[0] === item.id){

                this.#itemListComponent.updateItemList(selected[1].categories);
            };
        });  
    };

    collapse(){

        this.#listComponent.childNodes.forEach(component => {
        
            component.collapse();
        });
    };

    expand(){

        this.#listComponent.childNodes.forEach(component => {
        
            component.expand();
        });
    };
};

customElements.define('list-component', ListComponent);

export default ListComponent;