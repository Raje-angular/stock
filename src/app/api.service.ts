import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { stockinfo } from './stock';
import { symbolinfo } from './symbol';
import { analysisInfo } from './analysis';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 

  search(symbol: string) {
    return this.http.get<stockinfo>("https://finnhub.io/api/v1/"+  "search?q=" + symbol +"&symbol=" + symbol + "&token=bu4f8kn48v6uehqi3cqg"); }

  getdata(symbol: string) {
    return this.http.get<symbolinfo>("https://finnhub.io/api/v1/"+ "quote?symbol=" + symbol + "&token=bu4f8kn48v6uehqi3cqg" 
    );
  }

  getdetails(symbol: string){
    return this.http.get<analysisInfo>("https://finnhub.io/api/v1/" + "stock/insider-sentiment?symbol=" + symbol+ "&token=bu4f8kn48v6uehqi3cqg&from=2022-07-01&to=2022-10-01"
    );
  }
}



