class ItemList{

    #itemList;

    constructor(){

        this.#itemList = [];
    }

    add(item){

        this.#itemList.push(item);
    }

    get itemList(){

        return this.#itemList;
    }
}

export default ItemList;