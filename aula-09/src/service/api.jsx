export const obterTipoElemento = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/type/");
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export const obterEspecies = async (offset) => {
    try {
      const response = await ( await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`)).json();
      return response;
    } catch (err) {
      console.log(err)
    }
  }