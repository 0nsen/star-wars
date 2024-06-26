import axios from "axios";
import { Character } from "../interfaces/character.interface";
import { GetMany } from "../interfaces/api-response.interface";
import { ENDPOINTS } from "../data/endpoints";

const starService = axios.create({
    baseURL: 'https://swapi.dev/api',
});

interface Pagination {
    page: number,
}

export const getPeople = async (query: Pagination): Promise<GetMany<Character>> => {
    const { page } = query;
    const res = await starService.get(ENDPOINTS.people, {
        params: {
            page: page
        }
    });
    return res.data;
}

export const getPerson = async (id: number): Promise<Character> => {
    const res = await starService.get(ENDPOINTS.person(id));
    return res.data;
}
