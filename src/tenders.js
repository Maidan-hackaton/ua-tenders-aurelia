import {HttpClient} from 'aurelia-http-client';

var base = "https://api.openprocurement.org/api/0"

export class Tenders {
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = "Тендери";
    this.tenders = [];
    this.http = http;
  }

  activate(){
    return this.http.jsonp(`${base}/tenders?opt_fields=title`, "opt_jsonp").then(response => {
      this.tenders = response.content.data;
      this.tenders.forEach(function(tender) {
        tender.href=`#/tenders/${tender.id}`;
      });
    });
  }

  canDeactivate(){
  }
}
