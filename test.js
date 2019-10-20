const Utils = require("./index.js");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", async () => {
  console.log("Waiting...");
  await Utils.wait(5000);
  console.log("Waited 5 seconds.");
});

client.login("NjI0NjE3ODA0NjExNDUyOTI5.XawUEw.yLm8y2OJURUb09H_lvtMOvsg2Bw");
