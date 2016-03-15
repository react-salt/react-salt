import routeify from 'salt-routeify';

export default function(app, config) {
  return routeify(app, config.path);
}
