const axios = require('axios').default;

export const getSuperHero = async (hero) => {
    try {
        // const dataa = await axios.get(`localhost:8080/super-hero/superman`);
        const dataa = await axios.get(`http://localhost:8080/super-hero/${hero}`);
        return dataa?.data?.results;
    } catch (e) {
        console.log("ERROR", e.message);
    }
}

export const getLastSearches = async () => {
    try {
        // const dataa = await axios.get(`localhost:8080/super-hero/superman`);
        const data = await axios.get(`http://localhost:8080/last-searched`);
        return data?.data;
    } catch (e) {
        console.log("ERROR", e.message);
    }

}