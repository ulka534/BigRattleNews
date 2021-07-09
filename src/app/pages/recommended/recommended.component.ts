import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  countryCount: any;
  langCount: any;
  categoryCount: any;
  constructor(public commonService: CommonServiceService,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.countryCount = this.sharedService.getCountryCount()
    this.langCount = this.sharedService.getLangCount()
    this.categoryCount = this.sharedService.getCategoryCount()
    if (this.max_of_three(this.countryCount, this.langCount, this.categoryCount) == "country") {

    } else if (this.max_of_three(this.countryCount, this.langCount, this.categoryCount) == "language") {

    } else if (this.max_of_three(this.countryCount, this.langCount, this.categoryCount) == "category") {

    }
  }

  max_of_three(x: any, y: any, z: any) {
    var max_val = 0;
    var maxSource = "";
    if (x > y) {
      max_val = x;
      maxSource = "country"
    } else {
      max_val = y;
      maxSource = "language"
    }
    if (z > max_val) {
      max_val = z;
      maxSource = "category"
    }
    return maxSource;

  }
}
