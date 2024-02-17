import { invalidChampionError } from "src/errors/invalid-champion.error"

export const getChampionInfo = async (champion: string) => {
    champion = champion.charAt(0).toUpperCase() + champion.slice(1)
    const baseUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${champion}.json`

    try {
        const data = await fetch(baseUrl)
        const res = await data.json()
        const championInfo = res.data[`${champion}`]
        let messageRes = `**Nome:** ${championInfo.name}\n**Título:** ${championInfo.title.charAt(0).toUpperCase() + championInfo.title.slice(1)}\n-------------------------\n**Passiva:** ${championInfo.passive.name} - ${championInfo.passive.description}\n-------------------------\n**Spells💥**\n-------------------------\n**Q:** ${championInfo.spells[0].name} - ${championInfo.spells[0].description}\n**W:** ${championInfo.spells[1].name} - ${championInfo.spells[1].description}\n**E:** ${championInfo.spells[2].name} - ${championInfo.spells[2].description}\n**R:** ${championInfo.spells[3].name} - ${championInfo.spells[3].description}`
        return messageRes
    } catch (e) {console.log(e);
    
        return invalidChampionError
    }
}