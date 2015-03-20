/* global GSS */

export function initialize(/* container, application */) {
  window.engine = new GSS(document);
}

export default {
  name: 'gss',
  initialize: initialize
};
