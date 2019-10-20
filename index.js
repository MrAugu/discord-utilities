class DiscordUtils {
  static shuffleArray (array) {
    if (!array) throw new TypeError("An array must be provided.");
    if (array.length < 1) return [];

    const unshuffledArray = array;

    for (var i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      var item = array[randomIndex];

      array[randomIndex] = array[i];
		  array[i] = item;
    }

    if (unshuffledArray === array) {
        const firstItem = array[0];
        const lastItem = array[array.length - 1];

        array[0] = lastItem;
        array[array.length - 1] = firstItem;
    }

    return array;
  }

  static randomItem (array) {
    if (!array) throw new TypeError("An array must be provided.");
    if (array.length < 1) return undefined;

    return array[Math.floor(Math.random() * array.length)];
  }

  static isArray (array) {
    if (!array) throw new TypeError("An array must be provided.");
    return Array.isArray(array);
  }

  static randomHex () {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  static randomNumber (min, max) {
    if (!min && min !== 0 || !max && max !== 0) throw new TypeError("You must specify a minimum and a maximum range.");
    if (isNaN(min) || isNaN(max)) throw new TypeError("You must specify valid numbers.");
    if (min > max) throw new TypeError("Invalid range. Minimum must be smaller than the maximum.");

    return Math.floor(Math.random() * (min - max)) + (max + 1);
  }

  static randomString (length) {
    if (!length && length !== 0) throw new TypeError("You must specify a length.");
    if (isNaN(length)) throw new TypeError("You must specify a valid length.");

    var string = "";

    for (var i = 0; i < length; i++) {
      string += Math.random().toString(36).substr(2);
    }

    return string.substr(0, length);
  }

  static roundFloat (float, decimals = 1) {
    if (!float && float !== 0) throw new TypeError("You must specify a float.");
    if (isNaN(float)) throw new TypeError("You must specify a valid float.");
    if (isNaN(decimals)) throw new TypeError("You must specify a valid amount of decimals to keep.");

    return float.toFixed(decimals);
  }

  static includesNumber (string) {
    if (!string) throw new TypeError("You must specify a string.");

    return /\d/.test(string);
  }

  static isNumber (number) {
    if (!number && number !== 0) throw new TypeError("You must specify a value.");

    return !isNaN(number) && isFinite(number);
  }

  static fetchTime (ms, object = false) {
    var totalSeconds = (ms / 1000);
    var days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    var hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    seconds = Math.floor(seconds);

    if (object === true) return { days, hours, minutes, seconds };
    return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  }

  static toProperCase (string) {
    if (!string) throw new TypeError("A string must be specified.");

    string = string.replace(/([^\W_]+[^\s-]*) */g, (content) => {
      return content.charAt(0).toUpperCase() + content.substr(1).toLowerCase();
    });

    return string;
  }

  static isObject (object) {
    return object && object.constructor === Object;
  }
  
  static wait (ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
  }

  static async awaitReply (message, id, question, limit = 30000) {
    const filter = msg => msg.author.id === id;
    await message.channel.send(question).catch(e => console.log(e));

    try {
      const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      var placeHolder = collected.first().content; // eslint-no-unused-vars
      return collected.first();
    } catch (e) {
      return false;
    }
  }
};

module.exports = DiscordUtils;
