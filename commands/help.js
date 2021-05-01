// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('Sendt en privat besked!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.gg/x6Ep953Xsv')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Hjælp panel')
            .setColor('7289da')
            .setDescription(`\n[Discord](https://discord.gg/x6Ep953Xsv)`)
            .addField(`${prefix}giveaway [varighed] [pris]`, 'Varighed er statet i et tal og en tidsvariabel.\nstørrelse kan være alt, men det skal være over en.')
            .addField('Eksempel:', `${prefix}giveaway 10h $9.99 Nitro\nOpretter en 10 timers giveaway med '$ 9,99 Nitro' som en giveaway.`)
            .setTimestamp('', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp()
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://discord.gg/x6Ep953Xsv')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Hjælp panel')
            .setURL('https://beatz-discord.000webhostapp.com/')
            .setColor('7289da')
            .setDescription(`\n[Discord](https://discord.gg/x6Ep953Xsv)`)
            .addField(` ${prefix}giveaway [varighed] [pris]`, 'Varighed er statet i et tal og en tidsvariabel.\nstørrelse kan være alt, men det skal være over en.')
            .addField('Eksempel:', `${prefix}giveaway 10h $9.99 Nitro\nOpretter en 10 timers giveaway med '$9,99 Nitro' som en giveaway.`)
            .setFooter('', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTimestamp()
            message.author.send(embed);
        }
    }
}
