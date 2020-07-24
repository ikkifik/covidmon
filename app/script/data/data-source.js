class DataSource {

    static getDataCovid() {
        return fetch(`https://covid19.mathdro.id/api`)
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

export default DataSource;