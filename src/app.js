import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Prozorro';
      config.map([
        { route: 'tenders',        moduleId: 'tenders',       nav: true, title: 'Тендери' },
        { route: ['','about'], moduleId: 'about', nav: true, title:'Про сайт' },
      ]);
    });
  }
}

