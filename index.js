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
};

module.exports = DiscordUtils;
