import themeColors from "../../utils/themeColors.js";
import MeasurementConverter from "../../utils/MeasurementConverter.js";
import CheckMenuState from "../../utils/CheckMenuState.js";

class Toast extends HTMLElement{

    #content;
    #item;

    constructor(content, item){
        super();

        this.#content = content;
        this.#item = item;

        if(CheckMenuState.checkIfTheMenuIsCompressed()){

            this.#render();
        }else{

            setTimeout(() => 
                this.#render(), 1000
            );
        }
    };

    #render(){

        const shadow = this.attachShadow({ mode : 'open' });
        shadow.appendChild(this.#script());
        shadow.appendChild(this.#style());
        shadow.appendChild(this.#html());
    };

    #script(){

        const script = document.createElement('script');
        script.src = "https://cdn.lordicon.com/lusqsztk.js"

        return script;
    }

    #style(){

        const style = document.createElement('style');
        style.textContent = `
        
            .toast{

                position: absolute;
                top: ${this.#defineToastTopPosition()}vh;
                left: calc(${CheckMenuState.getSideMenuWidth()}px + 1rem);
                text-align: center;
                width: 10rem;
                background-color: ${themeColors.primaryColor};
                padding: 1rem;
                border-radius: .5rem;
                ${!CheckMenuState.checkIfTheMenuIsCompressed() ? `
                    animation-name: opacity;
                    animation-duration: 1.5s;
                `: ``}
            }

            .toast:before{
                content: "";
                background-color: ${themeColors.primaryColor};
                width: 1rem;
                height: 1rem;
                top: ${this.#item[0].getBoundingClientRect().top}px;
                left: calc(${CheckMenuState.getSideMenuWidth()}px + .5rem);
                position: fixed;
                transform: rotate(45deg);
            }

            .toast__description{

                margin-top: 1rem;
                font-weight: bold;
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                color: #000;
            }

            @keyframes opacity {
                0%   {opacity: 0;}
                100% {opacity: 1;}
            }
        `;

        return style;
    }

    #html(){        

        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `            
        
            ${CheckMenuState.checkIfTheMenuIsCompressed() ? `

            <div class="toast__item-name">${this.#item[0].querySelector('.itemComponent__info__item__title span').innerHTML}</div>

            ` : `

            <lord-icon
                src="${this.#content.gif}"
                trigger="loop"
                colors="primary:${themeColors.secundaryColor}"
                style="width:50px;height:50px">
                </lord-icon>
            <div class="toast__description">${this.#content.description}</div>
            `}

        `;

        return toast;
    }

    #defineToastTopPosition(){

        let initialPosition = this.#item[0].getBoundingClientRect().top - this.#item[0].offsetHeight; 
        let heightInVh = MeasurementConverter.pixelToVh(initialPosition);

        if(!CheckMenuState.checkIfTheMenuIsCompressed()){

            if(heightInVh > 83)
                heightInVh = heightInVh - 10;
            else if(heightInVh > 90)
                heightInVh = heightInVh - 7;
        }

        return heightInVh;
    }
}

customElements.define('toast-pop', Toast);

export default Toast;