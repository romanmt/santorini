/**
* Drop _n_ characters.
*
* @param {int} n
* @return {string}
* @api public
*/

String.prototype.drop = function(n) {
  return this.slice(n, this.length)
};

  /**
* Take _n_ characters.
*
* @param {int} n
* @return {string}
* @api public
*/

String.prototype.take =function(n) {
  return this.slice(0, n)
};

/**
* Capitalize the given _str_, optionally _all_ words.
*
* 'hello there'.capitalize()
* // => 'Hello there'
*
* 'hello there'.capitalize('all') // or true
* // => 'Hello There'
*
* @param {bool} all
* @return {string}
* @api public
*/

String.prototype.capitalize = function (all) {
  return this.split(/\s+/).map(function(word, i){
    return (i === 0 || all)
      ? word.charAt(0).uppercase() + word.drop(1)
      : word
  }).join(' ')
};


String.prototype.decamelize = function() {
  return this.replace(/[A-Z]/g, ' $&').toLowerCase().capitalize();
};

  /**
* Return lowercase string.
*
* 'HELLO'.lowercase
* // => 'hello'
*
* @return {string}
* @api public
*/

String.prototype.lowercase = function() { return this.toLowerCase() };

  /**
* Return uppercase string.
*
* 'hello'.uppercase
* // => 'HELLO'
*
* @return {string}
* @api public
*/

String.prototype.uppercase = function() { return this.toUpperCase() };

  /**
* Convert to camel-case.
*
* 'hello there'.camelcase
* // => 'HelloThere'
*
* @return {string}
* @api public
*/

String.prototype.camelcase = function() {
    return this.replace(/[^a-zA-Z0-9 ]+/g, ' ').capitalize(true).remove(/ +/g)
  };

  /**
* Return a string of digits.
*
* '$1,000'.digits
* // => '1000'
*
* @return {string}
* @api public
*/

String.prototype.digits = function() { return this.remove(/[^\d]/g) }

