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

    async getAllCategories(){

        try{            

            let menu = await this.#getMenu.getItemList();

            this.categories = menu.lists.menu.categories; 
        }
        catch(error){

            console.log(error);
        }
    }
}

export default SideMenuController;