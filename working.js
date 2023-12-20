const { Client } = require('discord.js-selfbot-v13');
const { exec } = require('child_process');

const client = new Client();

function showNotification(title, message) {
  const powershellCommand = `powershell -Command "New-BurntToastNotification -Text '${message}' -AppLogo 'C:\\path\\to\\your\\logo.png' -AppName '${title}'"`;
  
  exec(powershellCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
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
    showNotification(`رسالة جديدة من ${senderName}`, messageContent);
  }
});

client.login('MTA2MTYwMDYyMTg2MzY0MTE4MA.GkWfXH.PyM441-W1LnwzURPmoRBPSh8zJT1N9PpTDJ90E');
