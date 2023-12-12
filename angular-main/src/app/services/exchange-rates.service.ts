import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
// imports


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getRates(base:string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?/source=ecb&base=${base}&apikey=EcF1VYu7n68VpDwWv4Yew63KThThZHRz`) 
    // There was so much pain with that link..123456
  }
  
  
}
