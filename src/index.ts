import 'dotenv/config'
import { Client } from 'discord.js'
import { useCommand } from './utils/use-commands'
import { getChampionLore } from './commands/get-champion-lore'
import { commandList } from './utils/command-list'


const client = new Client({
    intents:['Guilds','GuildMessages','GuildMembers','MessageContent']
})

client.on('ready', (client) =>{
    console.log(`${client.user.username} is online`)
})

client.on('messageCreate',async(client) =>{
    client.content = client.content.toLowerCase()
    const listCommand = ['!lore','!help','!info','!status']
    const [commandSelected,...rest] = client.content.split(" ");

    const value = rest.join(" ")
    
    if(listCommand.includes(commandSelected)){
        await client.reply(await useCommand(commandSelected,value))
    }
    else if(commandSelected.startsWith('!')){       
        let messageResponse = 'Você inseriu um comando inválido. Comandos disponíveis:\n'
        for(let command of commandList){
            messageResponse+=`${command.name}\n`
        }
        client.reply(messageResponse)        
    }
    
})

client.login(process.env.CLIENT_TOKEN)
