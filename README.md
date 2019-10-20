# discord-utils
A lightweight, updated and easy to use package with utility functions that you may need when developing a discord bot or javascript programs.

# Bugs, Glitches & Issues
Open an issue in our <a href="https://github.com/MrAugu/discord-utils"> github repository</a>.

# Help & Support
If you need help, join our <a href="https://discord.gg/6xR9ruy">discord server</a> to talk and help with your code.

# Installation
You can easily get it from NPM.
```txt
npm install discord-utils
```

# Functions
<table style="width:100%">
  <tr>
    <th>Function Name</th>
    <th>Call</th> 
    <th>Description</th>
    <th>Output</th>
  </tr>
  <tr>
    <td>shuffleArray</td>
    <td><kbd>Utils.shuffleArray(array)</kbd></td> 
    <td>Shuffles elements of a given array.</td>
    <td>Array</td>
  </tr>
  <tr>
    <td>randomItem</td>
    <td><kbd>Utils.randomItem(array)</kbd></td> 
    <td>Selects a random item of a given array.</td> 
    <td>ArrayItem</td>
  </tr>
  <tr>
    <td>isArray</td>
    <td><kbd>Utils.isArray(parameter)</kbd></td> 
    <td>Returns if the given parameter is an array.</td> 
    <td>Boolean</td>
  </tr>
  <tr>
    <td>randomHex</td>
    <td><kbd>Utils.randomHex()</kbd></td> 
    <td>Returns a vaid and random hexadecimal color code.</td> 
    <td>String</td>
  </tr>
  <tr>
    <td>randomNumber</td>
    <td><kbd>Utils.randomNumber(minimum, maximum)</kbd></td> 
    <td>Returns a random number from inside minimum and maximum range. (Interval <kbd>[minimum, maximum]</kbd>)</td> 
    <td>Integer</td>
  </tr>
  <tr>
    <td>randomString</td>
    <td><kbd>Utils.randomString(length)</kbd></td> 
    <td>Returns a random combination of letters and numbers of a specified length.</td> 
    <td>String</td>
  </tr>
  <tr>
    <td>roundFloat</td>
    <td><kbd>Utils.roundFloat(float, decimals)</kbd></td> 
    <td>Default amount of decimals is 1. It keeps/adds decimals until the desired amont of decimals is hit.</td> 
    <td>Float</td>
  </tr>
  <tr>
    <td>includesNumber</td>
    <td><kbd>Utils.includesNumber(string)</kbd></td> 
    <td>Returns true if the string contains any numbers inside it.</td> 
    <td>Boolean</td>
  </tr>
  <tr>
    <td>isNumber</td>
    <td><kbd>Utils.isNumber(parameter)</kbd></td> 
    <td>Returns true if the given parameter is a finited number.</td> 
    <td>Boolean</td>
  </tr>
  <tr>
    <td>fetchTime</td>
    <td><kbd>Utils.fetchTime(ms, object)</kbd></td> 
    <td>It fetches the amount of ms to human readable time, If <kbd>object</kbd> function is set to true, it will output an object with the values, otherwise it will output a formated string, false by default.</td> 
    <td>String or Object</td>
  </tr>
  <tr>
    <td>toProperCase</td>
    <td><kbd>Utils.toProperCase(string)</kbd></td> 
    <td>It sets the first letter of every word inside the string to upper case.</td> 
    <td>String</td>
  </tr>
  <tr>
    <td>isObject</td>
    <td><kbd>Utils.isObject(parameter)</kbd></td> 
    <td>It returns true if given parameter is a JSON object.</td> 
    <td>Boolean</td>
  </tr>
  <tr>
    <td>wait</td>
    <td><kbd>Utils.wait(ms)</kbd></td> 
    <td>Creates a promise that gets resolved after amount of miliseconds given. Can be used to pause script execution in an <kbd>async</kbd> scope by invoking the function with <kbd>await</kbd> keyword.</td> 
    <td>Promise - Undefined</td>
  </tr>
  <tr>
    <td>awaitReply</td>
    <td><kbd>Utils.awaitReply(message, id, question, limit)</kbd></td> 
    <td>Creates a message collector in the channel where <kbd>message</kbd> was sent that waits for the first message sent by discord user whos id is equal to <kbd>id</kbd>, before starting colector the <kbd>question</kbd> is sent in the <kbd>message</kbd>'s channel. If times out, it returns <kbd>false</kbd> otherwise it returns the message collected.</td> 
    <td>Promise - False or Discord Message</td>
  </tr>
</table>
