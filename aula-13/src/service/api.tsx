import axios from "axios";

export const obterTipoElemento = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const obterEspecies = async (offset: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}

const baseURL = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export default baseURL;