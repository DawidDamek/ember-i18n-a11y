import EmberRouter from '@ember/routing/router';
import config from 'accessibility-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('product', function () {
      this.route('list');
      this.route('show');
    });
    this.route('doll');
    this.route('car');
    this.route('bike');
  });
});
