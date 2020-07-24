import css from "bootstrap/dist/css/bootstrap.min.css";

class PositiveData extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set data(positive) {
        this._positive = positive;
        this.render();
    }

    renderError(err) {
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML += `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        <h2 class="placeholder">${err}</h2>`;
    }


    render() {

        this.shadowDOM.innerHTML = `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <style>
            h1{
                font-size: 50px;
            }
            ${css}
        </style>
        <div class="card-body bg-warning text-center">
            <h6 class="card-title">Positif</h6>
            <h1 class="card-subtitle mb-2">${this._positive.confirmed.value}</h1>
        </div>
        `
    }

}

customElements.define("positive-data", PositiveData);