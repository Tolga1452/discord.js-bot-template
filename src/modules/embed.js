const { EmbedBuilder, Client } = require("discord.js");

module.exports = class EmbedMaker extends EmbedBuilder {
    /**
     * @param {Client} client 
     */
    constructor(client) {
        super();

        this.setColor('5865F2');
        this.setFooter({
            text: 'Made with ❤️ by Discord Experiment Hub',
            iconURL: client.guilds.cache.get('1089540433010491392').iconURL({ forceStatic: true })
        });
    };
};