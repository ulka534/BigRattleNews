import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CommonServiceService } from '../../services/common-service.service';
import { SharedService } from '../../services/shared.service';

declare const $: any;
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  isSubmitted = false;
  sourceList: any;

  constructor(public commonService: CommonServiceService,
    public sharedService: SharedService,
    public fb: FormBuilder) { }

  // Country Names
  Country: any = this.commonService.getCountyList();

  // Language 
  lang: any = this.commonService.getLanguageList();

  // category 
  category: any = this.commonService.getCategoryList();

  // a reactive form initialized with a field countryName with no validation.
  registrationForm = this.fb.group({
    countryName: ['', []],
    langName: ['', []],
    categoryName: ['', []],
  })

  // selection
  changeCountry(e: any) {
    if (this.countryName)
      this.countryName.setValue(e.target.value, {
        onlySelf: true
      })
  }
  changeLanguage(e: any) {
    if (this.langName)
      this.langName.setValue(e.target.value, {
        onlySelf: true
      })
  }
  changeCategory(e: any) {
    if (this.categoryName)
      this.categoryName.setValue(e.target.value, {
        onlySelf: true
      })
  }

  // Getter method for accessing form controls
  get countryName() {
    var countryCount = this.sharedService.getCountryCount();
   if (countryCount) {
      this.sharedService.setCountryCount(countryCount + 1)
    } else {
      this.sharedService.setCountryCount(1)
    }
    let url = `https://newsapi.org/v2/top-headlines/sources?country=${this.registrationForm.value.countryName}&apiKey=55c92c6ef9934dc68687a742446e0af0`
    this.getSourceList(url);
    return this.registrationForm.get('countryName');
  }
  get langName() {
    var langCount = this.sharedService.getLangCount();
    if (langCount) {
      this.sharedService.setLangCount(langCount + 1)
    } else {
      this.sharedService.setLangCount(1)
    }
    let url = `https://newsapi.org/v2/top-headlines/sources?language=${this.registrationForm.value.langName}&apiKey=55c92c6ef9934dc68687a742446e0af0`
    this.getSourceList(url);
    return this.registrationForm.get('langName');
  }
  get categoryName() {
    var categoryCount = this.sharedService.getCategoryCount();
    if (categoryCount) {
      this.sharedService.setCategoryCount(categoryCount + 1)
    } else {
      this.sharedService.setCategoryCount(1)
    }
    var url = `https://newsapi.org/v2/top-headlines/sources?category=${this.registrationForm.value.categoryName}&apiKey=55c92c6ef9934dc68687a742446e0af0`
    this.getSourceList(url);
    return this.registrationForm.get('categoryName');
  }


  ngOnInit(): void {
    this.sharedService.setCountryCount(1)
    this.sharedService.setLangCount(1)
    this.sharedService.setCategoryCount(1)

    let url = "https://newsapi.org/v2/top-headlines/sources?apiKey=55c92c6ef9934dc68687a742446e0af0";
    this.getSourceList(url);
  }

  getSourceList(url: any) {
    const request = new Request(url);
    console.log(request)
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.sourceList = news.sources
          console.log(this.sourceList);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

}
