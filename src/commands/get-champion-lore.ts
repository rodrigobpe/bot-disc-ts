import { invalidChampionError } from "src/errors/invalid-champion.error"

export const getChampionLore = async (champion: string) => {
    champion = champion.charAt(0).toUpperCase() + champion.slice(1)
    const baseUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${champion}.json`

    try {
        const data = await fetch(baseUrl)
        const res = await data.json()

        return `"${res.data[`${champion}`].lore}"`
    } catch (e) {
        return invalidChampionError
    }
}