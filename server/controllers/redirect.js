import Controller from '../controller';
import config from 'config';
import BaseInfo from '../../app/api/base-info.js';

export default class Redirect extends Controller {
    // 基础导向规则：导向子目录的第一个
    *common() {
        let { request } = this.ctx;
        let { menuData } = BaseInfo;
        let target = request.url;
        let length = menuData.length;
        for (let i = 0; i < length; i ++ ) {
            if (menuData[i].href === target) {
                target = menuData[i].children[0].href;
                break;
            }
        }
        this.ctx.redirect(target);
    }
}
