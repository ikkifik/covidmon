import "../components/positive-data.js";
import "../components/recovered-data.js";
import "../components/death-data.js";
import "../components/positive-data-indo.js";
import "../components/recovered-data-indo.js";
import "../components/death-data-indo.js";


import DataSource from "../data/data-source.js";
import DataSourceIndo from "../data/data-source-indo.js";


const main = () => {
    const positiveCaseElement = document.querySelector("positive-data");
    const recoveredCaseElement = document.querySelector("recovered-data");
    const deathCaseElement = document.querySelector("death-data");

    const positiveCaseIndo = document.querySelector("positive-data-indo");
    const recoveredCaseIndo = document.querySelector("recovered-data-indo");
    const deathCaseIndo = document.querySelector("death-data-indo");

    const covidData = async () => {
        try {
            const result = await DataSource.getDataCovid();
            renderResult(result);
        } catch (error) {
            fallbackResult(error);
        }
    };

    const covidDataIndo = async () => {
        try {
            const result = await DataSourceIndo.getDataCovidIndo();
            renderResultIndo(result);
        } catch (error) {
            fallbackResultIndo(error);
        }
    };


    const renderResult = results => {
        positiveCaseElement.data = results;
        recoveredCaseElement.data = results;
        deathCaseElement.data = results;
    }

    const renderResultIndo = results => {
        positiveCaseIndo.data = results;
        recoveredCaseIndo.data = results;
        deathCaseIndo.data = results;

    }

    const fallbackResult = err => {
        positiveCaseElement.renderError(err);
        recoveredCaseElement.renderError(err);
        deathCaseElement.renderError(err);
    }

    const fallbackResultIndo = err => {
        positiveCaseIndo.renderError(err);
        recoveredCaseIndo.renderError(err);
        deathCaseIndo.renderError(err);

    }
    
    covidData();
    covidDataIndo();
};

export default main;