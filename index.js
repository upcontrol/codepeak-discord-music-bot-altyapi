const { Client, GatewayIntentBits, Partials, SlashCommandBuilder, Routes } = require('discord.js');
const { DisTube } = require('distube');
const { REST } = require('@discordjs/rest');
const { SpotifyPlugin } = require('@distube/spotify');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { YtDlpPlugin } = require('@distube/yt-dlp');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel]
});

const distube = new DisTube(client, {
  emitNewSongOnly: true,
  plugins: [new SpotifyPlugin(), new SoundCloudPlugin(), new YtDlpPlugin()]
});

const commands = [
  new SlashCommandBuilder()
    .setName('play')
    .setDescription('YouTube videosu çalar')
    .addStringOption(option =>
      option.setName('url')
        .setDescription('YouTube URL\'si')
        .setRequired(true))
]
  .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Slash komutları kaydediliyor...');

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    console.log('Slash komutları başarıyla kaydedildi.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, options, member, channel } = interaction;

  if (commandName === 'play') {
    const url = options.getString('url');
    const member = interaction.member;
    if (!member.voice.channel) {
      return interaction.reply('Önce bir ses kanalına katılmalısınız!');
    }
    try {
      await interaction.deferReply();

      await distube.play(member.voice.channel, url, {
        textChannel: interaction.channel,
        member: member
      });

      await interaction.editReply(`Playlist'e ekledim :smilingfacewithsunglasses: : ${url}`);
    } catch (error) {
      console.error('Bir hata oluştu:', error);
      await interaction.editReply(`Bir hata oluştu: ${error.message}`);
    }
  }
});

distube.on('playSong', (queue, song) => {
    const textChannel = queue.textChannel;
    if (textChannel) {
        textChannel.send(`Playlist'e ekledim :smilingfacewithsunglasses: : ${song.name}`).catch(err => {
            console.error('Mesaj gönderilirken bir hata oluştu:', err);
        });
    } else {
        console.error('Hata: Kanal bulunamadı veya geçersiz.');
    }
});

distube.on('addSong', (queue, song) => {
  queue.textChannel.send(`${song.name} kuyruğa eklendi.`);
});

client.login(process.env.TOKEN);
