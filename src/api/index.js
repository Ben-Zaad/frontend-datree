const axios = require('axios').default;

export const getSuperHero = async (hero) => {
    console.log("IN getSuperHero");
    try {
        // const dataa = await axios.get(`localhost:8080/super-hero/superman`);
        const dataa = await axios.get(`http://localhost:8080/super-hero/${hero}`);
        console.log("dataa", dataa.data.results);
        return dataa?.data?.results;
    } catch (e) {
        console.log("ERROR", e.message);
    }

}