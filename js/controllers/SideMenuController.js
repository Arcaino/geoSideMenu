import Item from "../models/Item.js";
import ItemList from "../models/ItemList.js";
import GetMenu from "../services/GetMenu.js";

class SideMenuController{

    #getMenu;

    constructor(){

        this.itemList = new ItemList();        
        this.#getMenu = new GetMenu(); 
    }

    #addItem(item){

        return new Item(

            item.name,
            item.icon,
            item.categoryId,
            item.subList,
            item.toast
        )
    }
}

export default SideMenuController;