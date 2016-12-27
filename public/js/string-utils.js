'use strict';

/**
 * Given a template string to format and serveral strings
 * to fill the template, it returns the formatted string.
 * @param template This is a string containing zero, one or
 *                 more occurrences of "%s".
 * @param ...strings
 * @returns The formattted template.
 */
function format() {
  var replaces = Array.prototype.slice.apply(arguments, [1, arguments.length]);
  var subject = arguments[0];
  var parts = null;
  if ((subject.match(/%s/g) === null && replaces.length > 0) || replaces.length !== subject.match(/%s/g).length) {
    throw 'Format error: The string count to replace do not matches the argument count. Subject: ' + subject + '. Replaces: ' + replaces;
  }

  var output = subject;
  for (var i = 1; i < arguments.length; i++) {
    parts = output.split('%s');
    output = parts[0] + arguments[i] + parts.slice(1,parts.length).join('%s');
  }

  return output;
}