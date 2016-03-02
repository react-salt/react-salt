import fs from 'fs';
import _ from 'lodash';
import config from 'config';
import path from 'path';

let tmpl = _.template(fs.readFileSync(path.join(config.path.layout, 'component.html')));

export default function render(param) {
  this.body = tmpl(param);
}
