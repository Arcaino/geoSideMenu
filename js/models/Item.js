class Item{

    #name;
    #icon;
    #categoryId;
    #subList;
    #toast;

    constructor(name, icon, categoryId, subList, toast){

        this.#name = name;
        this.#icon = icon;
        this.#categoryId = categoryId;
        this.#subList = subList;
        this.#toast = toast;
    }    
}

export default Item;