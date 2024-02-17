import { commandList } from "src/utils/command-list"

export const help = () => {
    let responseMessage = 'Comandos disponíveis:\n'
    for (let command of commandList) {
        responseMessage += `${command.name} - ${command.description}\n`
    }

    return responseMessage
}