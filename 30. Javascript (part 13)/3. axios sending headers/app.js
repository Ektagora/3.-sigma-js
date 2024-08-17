const url = "https://icanhazdadjoke.com/";

async function getJocks() {
    try{
        const config = {headers: {accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}