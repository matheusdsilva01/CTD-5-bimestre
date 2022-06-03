import axios from "axios";

export const obterTipoElemento = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const obterEspecies = async (offset) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}