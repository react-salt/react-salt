import routeify from 'meow-routeify';

export default function(app, config) {
  return routeify(app, config.path);
}
