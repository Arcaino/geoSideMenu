class GetMenu{

    async getItemList(){

        return fetch('/js/menuItems.json')
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
	}
}

export default GetMenu;