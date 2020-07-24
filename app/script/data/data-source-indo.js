class DataSourceIndo {

    static getDataCovidIndo() {
        return fetch(`https://covid19.mathdro.id/api/countries/indonesia`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return Promise.resolve(responseJson);
        })
        .catch(err => {
            return Promise.reject(err)
        })
    }

}

export default DataSourceIndo;