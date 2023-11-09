import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  response: any;
  res: any;
  // gets actual data about currency from API and then returns it  | USD
  getUsd(base:string) {
    this.http.get(`https://cdn.moneyconvert.net/api/latest.json${base}`)123456
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response)
    })
  }
  // gets actual data about currency from API and then returns it  | EUR
  getEur (base:string) {
    this.http.get(`https://api.exchangerate.host/latest?/source=ecb&base=${base}&apikey=EcF1VYu7n68VpDwWv4Yew63KThThZHRz`)
    .subscribe((res)=>{
      this.res = res;
      console.log(this.res)
    })
  }


  ngOnInit(): void {
    this.getUsd('');
    this.getEur('')
  }

}
