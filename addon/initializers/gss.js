/* global GSS */

export function initialize(container, application) {
  var rootElement = Ember.$(application.get('rootElement'))[0],
      engine = new GSS(rootElement);

  application.deferReadiness();
  engine.once('solve', application.advanceReadiness.bind(application));
}

export default {
  name: 'gss',
  initialize: initialize
};
