import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';

declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usHeadlines: any;
  bbcHeadlines: any;
  germanyHeadlines: any;
  trumpHeadlines: any;

  dataRefresher: any;

  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.getUsApi();
    this.getBbcApi();
    this.getGermanyApi();
    this.geTrumpApi();
    this.refreshData();
  }

  getUsApi() {
    const request = new Request("https://newsapi.org/v2/top-headlines?country=us&apiKey=55c92c6ef9934dc68687a742446e0af0");
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.usHeadlines = news.articles
          console.log(this.usHeadlines);
          $(document).ready(function () {
            $('#example').DataTable({
              "bInfo": false,
              "scrollX": true,
              scrollY: '50vh',
              scrollCollapse: true,
              //   'paging'      : true,
              'lengthChange': false,
              'searching': true,
              'autoWidth': false,
            });

          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBbcApi() {
    const request = new Request("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=55c92c6ef9934dc68687a742446e0af0");
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.bbcHeadlines = news.articles
          console.log(this.bbcHeadlines);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  getGermanyApi() {
    const request = new Request("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=55c92c6ef9934dc68687a742446e0af0");
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.germanyHeadlines = news.articles
          console.log(this.germanyHeadlines);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  geTrumpApi() {
    const request = new Request("https://newsapi.org/v2/top-headlines?q=trump&apiKey=55c92c6ef9934dc68687a742446e0af0");
    fetch(request)
      .then(response => response.json())
      .then((news) => {
        if (news.status == "ok") {
          this.trumpHeadlines = news.articles
          console.log(this.trumpHeadlines);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  refreshData() {
    this.dataRefresher =
      setInterval(() => {
        this.getUsApi();
        this.getBbcApi();
        this.getGermanyApi();
        this.geTrumpApi();
        //  list auto-refresh in 1 min
      }, 60000);
  }

}
