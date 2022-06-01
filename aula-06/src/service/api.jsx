export const obterTipoElemento = async () => {
    try {
        const respose = await (await fetch("https://pokeapi.co/api/v2/type/")).json();
        return respose;
    } catch (err) {
        console.log(err);
    }
};