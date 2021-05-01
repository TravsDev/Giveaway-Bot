// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'giveaway',
    execute(client, message){
        if (!message.guild) return;
        async function giveaway() {
            var time = '';
            var time2 = '';
            var time3 = '';
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Du har ikke rollen `ADMINISTRATOR`');
            if (message.content === `${prefix}giveaway`) return message.channel.send(`For at lave en Giveaway skal du indtaste en [giveaway] [tid / dag]`)
            if (message.content !== `${prefix}giveaway`) {
                const stated_duration_hours = message.content.split(' ')[1];
                const stated_duration_hours2 = stated_duration_hours.toLowerCase();
                if (stated_duration_hours2.includes('s')) {
                    var time = 's';
                }
                if (stated_duration_hours2.includes('m')) {
                    var time = 'm';
                }
                if (stated_duration_hours2.includes('h')) {
                    var time = 'h';
                }
                if (stated_duration_hours2.includes('d')) {
                    var time = 'd';
                }
                const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
                if (stated_duration_hours3 === '0') {
                    message.channel.send('Varigheden skal være mindst én.');
                }
                if (isNaN(stated_duration_hours3)) {
                    message.channel.send('Varigheden skal være en gyldig tidsvariabel.');
                }
                if (stated_duration_hours3 > 1) {
                    var time3 = 's';
                }
                if (time === 's') {
                    var actual_duration_hours = stated_duration_hours3 * 1000;
                    var time2 = 'seconder';
                }
                if (time === 'm') {
                    var actual_duration_hours = stated_duration_hours3 * 60000;
                    var time2 = 'minuter';
                }
                if (time === 'h') {
                    var actual_duration_hours = stated_duration_hours3 * 3600000;
                    var time2 = 'timer';
                }
                if (time === 'd') {
                    var actual_duration_hours = stated_duration_hours3 * 86400000;
                    var time2 = 'dag';
                }
                if (!isNaN(stated_duration_hours3)) {
                    const prize = message.content.split(' ').slice(2).join(' ');
                    if (prize === '') return message.channel.send('Du skal indtaste en giveaway!');
                    if (stated_duration_hours3 !== '0') {
						message.delete()
                        const embed = new Discord.MessageEmbed()
                        .setTitle(`${prize}`)
                        .setColor('FF0000')
                        .setDescription(`Reager med 🎉 for at være med!\nvarighed: **${stated_duration_hours3}** ${time2}${time3}\nHosted af: ${message.author}`)
                        .setTimestamp(Date.now() + (actual_duration_hours))
                        .setFooter('Started kokken')
                        let msg = await message.channel.send(':tada: **GIVEAWAY** :tada:', embed)
                        await msg.react('🎉')
                        setTimeout(() => {
                            msg.reactions.cache.get('🎉').users.remove(client.user.id)
                            setTimeout(() => {
                                let winner = msg.reactions.cache.get('🎉').users.cache.random();
                                if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`${prize}`)
                                    .setColor('36393F')
                                    .setDescription(`Vinder:\nIgen regered til giveaway.\nHosted af: ${message.author}`)
                                    .setTimestamp()
                                    .setFooter('Slutted klokken')
                                    msg.edit(':tada: **GIVEAWAY AFSLUTTET** :tada:', winner_embed);
                                }
                                if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
                                    const winner_embed = new Discord.MessageEmbed()
                                    .setTitle(`${prize}`)
                                    .setColor('36393F')
                                    .setDescription(`Vinder:\n${winner}\nHosted af: ${message.author}`)
                                    .setTimestamp()
                                    .setFooter('Endte kl')
                                    msg.edit(':tada:  **GIVEAWAY AFSLUTTET** :tada:', winner_embed);
                                }
                            }, 1000);
                        }, actual_duration_hours);
                    }
                }
            }
        }
        giveaway();
    }
}
