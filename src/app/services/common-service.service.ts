import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  usHeadlines: any;
  bbcHeadlines: any;
  germanyHeadlines: any;
  trumpHeadlines: any;

  constructor() { }

  getCountyList() {
    let list = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz",
      "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl",
      "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za",
    ]
    return list;
  }

  getLanguageList() {
    let list = ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"]
    return list;
  }

  getCategoryList() {
    let list = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    return list;
  }

  callUsApi(url: any) {
    const request = new Request(url);
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.usHeadlines = news.articles
          console.log(this.usHeadlines);
          // return this.usHeadlines;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  callBbcApi(url: any) {
    const request = new Request(url);
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.bbcHeadlines = news.articles
          console.log(this.bbcHeadlines);
          return this.bbcHeadlines
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  callGermanyApi(url: any) {
    const request = new Request(url);
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.germanyHeadlines = news.articles
          console.log(this.germanyHeadlines);
          return this.germanyHeadlines;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  callTrumpApi(url: any) {
    const request = new Request(url);
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.trumpHeadlines = news.articles
          console.log(this.trumpHeadlines);
          return this.trumpHeadlines;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }


}
