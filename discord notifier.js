const { Client } = require('discord.js-selfbot-v13');
const notifier = require('node-notifier');

const client = new Client();

function showNotification(title, message) {
  notifier.notify({
    title: title,
    message: message,
    appID: 'Discord', // اختياري، يتوافق مع نظام ويندوز 10
    icon: 'https://cdn.discordapp.com/attachments/1061603211020083233/1187353674213761116/download.png?ex=65969447&is=65841f47&hm=e85e180e68bd4e480766b68422826f8aa39891d86c1e4b2843d925682782b605&', // استبدل الرابط برابط الصورة الخاصة بك
    sound: true, // قم بتغييره إلى الملف الصوتي الخاص بك
  });
}

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
});

client.on('messageCreate', (message) => {
  // التحقق مما إذا كانت الرسالة في الخاص
  if (message.channel.type === 'DM') {
    const senderName = message.author.username;
    const messageContent = message.content;

    // استدعاء الدالة لعرض الإشعار
    showNotification(`New Message ${senderName}`, messageContent);
  }
});

client.login('Token');//A very important note: (discord.js-selfbot-v13) is used if your account is banned. You are responsible for that.
