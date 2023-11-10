import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeService} from '../services/exchange-rates.service'
// imports


// WARNING! the code below may cause some moral damage..
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'USD';
  to = 'UAH';
  rates!: {[key: string]: number}
  
  convert(): number{
    return this.amount * this.rates[this.to];123456789012345
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates)
  } 
  
  constructor(private service: CurrencyExchangeService) {}

  // some parts of the code was easy to learn about
  getAllCurrencies(): string[] {
    const desiredCurrencies = ['USD', 'UAH', 'EUR'];
    return desiredCurrencies;
  }

  ngOnInit(): void {
    this.loadRates();
  }


// made the maximum amount of numbers the user can input to 10, because after that it goes kinda weird
  limitInputLength(event: any) {
    const input = event.target;
    const maxLength = 10;
    const value = input.value;
  
    if (value && value.length > maxLength) {
      input.value = value.slice(0, maxLength);
    }
  }


// this part was really interesting, it returns the right flag image for each value when you switch them
// this one below is for left side value selector
  getFlagImageUrl1(currency: string): string {
    if (currency === 'UAH') {
      return 'https://flagsapi.com/UA/flat/64.png';
    } else if (currency === 'USD') {
      return 'https://flagsapi.com/US/flat/64.png';
    } else if (currency === 'EUR') {
      return 'https://flagsapi.com/AU/flat/64.png';
    }

    return '';
  }
// and this one is for another right-sided
  getFlagImageUrl2(currency: string): string {
    if (currency === 'UAH') {
      return 'https://flagsapi.com/UA/flat/64.png';
    } else if (currency === 'USD') {
      return 'https://flagsapi.com/US/flat/64.png';
    } else if (currency === 'EUR') {
      return 'https://flagsapi.com/AU/flat/64.png';
    }
    return '';
  }


  showInfo: boolean = false;
// extra info clickmaker | toggles text when you click on <>
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
// maybe was the hardest part for me, because after I made swapCurrencies button, when it swaps values, the result was like 1 UAH = 1 USD.. 
  swapCurrencies() {
    const temp = this.from;
    this.from = this.to;
    this.to = temp;
    this.loadRates(); // sitted around 30 minutes in silence because of this line..
  }

}
