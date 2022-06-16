import axios from "axios";

/**
 * Função que retorna todos os tipos de pokemons da API
 * @returns 
 */
export const obterTipoElemento = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type/");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Função para obter os dados das especiés dos pokemóns da API
 * @param offset - parametro para lidar com a paginação da requisição
 * @returns 
 */
export const obterEspecies = async (offset: number) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=${offset}&limit=20`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}
/**
 * - Url base da API
 */
const baseURL = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export default baseURL;