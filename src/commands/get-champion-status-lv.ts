import { invalidChampionError } from "src/errors/invalid-champion.error"
import { invalidLevelErrorLessThanZero, invalidLevelErrorGreatThanEighteen } from "src/errors/invalid-level.error";

export const getChampionStatusPerLevel = async (champion: string, level?: number) => {
    if (level < 0) return invalidLevelErrorLessThanZero
    if (level > 18) return invalidLevelErrorGreatThanEighteen

    champion = champion.charAt(0).toUpperCase() + champion.slice(1)
    if (!level || NaN || undefined) {
        level = 1;
    }
    const baseUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${champion}.json`

    try {
        const data = await fetch(baseUrl)
        const res = await data.json()
        const championInfo = res.data[`${champion}`]
        
        const responseMessage = `**Status ${championInfo.name} - Level ${level}**\n----------------------------------\n**Hp:** ${championInfo.stats.hp + (championInfo.stats.hpperlevel * (level - 1))}\n**Mp:** ${championInfo.stats.mp + (championInfo.stats.mpperlevel * (level - 1))}\n**Move speed:** ${championInfo.stats.movespeed}\n**Armor:** ${championInfo.stats.armor + (championInfo.stats.armorperlevel * (level - 1))}\n**Spell Block:** ${championInfo.stats.spellblock + (championInfo.stats.spellblockperlevel * (level - 1))}\n**Attack Range:** ${championInfo.stats.attackrange}\n**Hp Regen:** ${championInfo.stats.hpregen + (championInfo.stats.hpregenperlevel * (level - 1))}\n**Mp Regen:** ${championInfo.stats.mpregen + (championInfo.stats.mpregenperlevel * (level - 1))}\n**Crit:** ${championInfo.stats.crit + (championInfo.stats.critperlevel * (level - 1))}\n**Attack Damage:** ${championInfo.stats.attackdamage + (championInfo.stats.attackdamageperlevel * (level - 1))}\n**Attack Speed:** ${championInfo.stats.attackspeed + (championInfo.stats.attackspeedperlevel * (level - 1))}`
        return responseMessage

    } catch (e) {
        console.log(e);
        return invalidChampionError
    }
}