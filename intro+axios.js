/*
axios.get("https://swapi.dev/api/people/1/")
.then(res => {
    console.log("RESPONSE:", res)  
})
.catch(e => {
    console.log("ERROE:", e);
})
*/
/*
const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log("ERROR!", e);
    }
};
*/

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addNewJoke = async () => {
    const joketext = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(joketext);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE SORRY"
    }
}

button.addEventListener('click', addNewJoke)







