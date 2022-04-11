class CheckMenuState{
    
    static checkIfTheMenuIsCompressed(){

        let sideMenu = document.querySelector('side-menu').shadowRoot.querySelector('.sideMenu');
        return sideMenu.classList.contains('sideMenuCollapsed');        
    }

    static getSideMenuWidth(){

        let sideMenu = document.querySelector('side-menu').shadowRoot.querySelector('.sideMenu');
        return sideMenu.offsetWidth;
    }
}

export default CheckMenuState;