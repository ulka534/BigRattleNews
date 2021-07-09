import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  countryCount:any;
  langCount:any;
  categoryCount:any;

  setCountryCount(value: any) {
    this.countryCount = value;
  }

  getCountryCount() {
    return this.countryCount;
  }

  setLangCount(value: any) {
    this.langCount = value;
  }

  getLangCount() {
    return this.langCount;
  }

  setCategoryCount(value: any) {
    this.categoryCount = value;
  }

  getCategoryCount() {
    return this.categoryCount;
  }
}
