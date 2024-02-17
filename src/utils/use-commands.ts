import { help, getChampionLore, getChampionInfo, getChampionStatusPerLevel } from "src/commands"

export const useCommand = (command: string, rest?: string) => {
    if (command === '!help') return help()
    if (command === '!lore') return getChampionLore(rest)
    if (command === '!info') return getChampionInfo(rest)
    if (command === '!status') return getChampionStatusPerLevel(rest.split(" ")[0],parseInt(rest.split(" ")[1]))
}