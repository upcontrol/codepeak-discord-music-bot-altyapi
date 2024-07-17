<h1 align="center">Discord Müzik Bot'u Altyapı</h1>

[![N|dc](https://i.hizliresim.com/3vwdudh.png)](https://discord.com/invite/cgefkEYrKR)

<details> 
 <summary><strong>İçindekiler (Contents)</strong></summary>
 <p>

* File/Folder operations
  - [Kurulum - Türkçe](#trkurulum)
  - [Setup - English](#enkurulum)

<br>
</details>

## Müzik Bot'u Altyapısı

### ([▲](#top)) Kurulum <a name="trkurulum"></a>
- Dosyayı indirdikten sonra kurulu olduğu klasöre cmd ile `cd` komutunu kullanarak gidiyoruz. 
- Daha sonra `npm init -y` ile package.json dosyamızı oluşturalım.
- Son olarak ilgili modülleri kurarak botumuzu çalıştırabiliriz. `npm install discord.js @discordjs/opus ffmpeg-static ytdl-core distube`
```
┌──(root💀upcontrol)-[~]
└─# cd codepeak-discord-music-bot

┌──(root💀upcontrol)-[~]
└─# npm init -y

┌──(root💀upcontrol)-[~]
└─# npm install discord.js @discordjs/opus ffmpeg-static ytdl-core distube

┌──(root💀upcontrol)-[~]
└─# node .\index.js
```
`node .\index.js` komutu ile botumuzu çalıştırıyoruz.

NOT: Bu bot sadece temel düzey javascript ile discord botu oluşturmak ve kendini geliştirmek isteyenler için müzik botunun altyapısını oluşturulmuştur. Botu kurduktan sonra sadece /play YOUTUBE_LİNKİ şeklinde çalışıcaktır. Bu botu geliştirmeniz gerekiyor.

<a href="https://codepeak.com.tr/forumlar/konu/discord-muzik-botu-baslangic/">Code Peak</a>

<p>&nbsp;</p>

### ([▲](#top)) Setup <a name="enkurulum"></a>
- After downloading the file, we go to the folder where it is installed using cmd and the `cd` command.
- Then, let's create our package.json file with `npm init -y`.
- Finally, we can run our bot by installing the relevant modules. `npm install discord.js @discordjs/opus ffmpeg-static ytdl-core distube`
```
┌──(root💀upcontrol)-[~]
└─# cd codepeak-discord-music-bot

┌──(root💀upcontrol)-[~]
└─# npm init -y

┌──(root💀upcontrol)-[~]
└─# npm install discord.js @discordjs/opus ffmpeg-static ytdl-core distube

┌──(root💀upcontrol)-[~]
└─# node .\index.js
```
We run our bot with the `node .\index.js` command.

NOTE: This bot has created the infrastructure of the music bot for those who want to create a discord bot and improve themselves with only basic javascript. After installing the bot, it will only work as `/play YOUTUBE_LINK`. You need to improve this bot.

<a href="https://codepeak.com.tr/forumlar/konu/discord-muzik-botu-baslangic/">Code Peak</a>

<p>&nbsp;</p>