import Controller from '../controller.js';
import Router from 'koa-router';

export default function() {
  return function *(next) {
  
    this.status = 200;
    this.body = '';
    yield next;
  }
}
