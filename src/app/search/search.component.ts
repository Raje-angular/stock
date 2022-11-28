import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { stockinfo } from '../stock';
import { symbolinfo } from '../symbol';
import { stockDetails} from '../stockdetails';
import { combineLatest, concat, merge, mergeMap, Observable } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[] 
})
export class SearchComponent implements OnInit {
  
  stockInput='';
  value:stockinfo={
    displaySymbol: '',
    description: '',
    result:'',
   };
   value1:symbolinfo={
    c: '',
    o: '',
    h:'',
    dp:'',
    displaySymbol: '',
    description: '',
    }
   stockDetails:Array<stockDetails>=[];
   value2:stockDetails[]=[];
constructor(
  private http: HttpClient,
  private apiservice: ApiService, 
)
{
  const datajson=localStorage.getItem('json');
  let finaldata=JSON.parse(datajson!);
  if(!!finaldata&&finaldata.length>0){
    this.value2=finaldata;
  }
}
ngOnInit(): void {} 
mainevent(){
  this.apiservice.search(this.stockInput).subscribe((response)=>{
    this.value=(response.result[0]);
    console.log(response);
    console.log(this.value); 
    const data={}=Object.assign(this.value,this.value1);
    this.stockDetails.push(data); 
    this.value2.push(data);
    console.log(this.value2);
    const list=JSON.stringify(this.value2);
    localStorage.setItem('json',list);
    console.log(list);     
  });
  this.apiservice.getdata(this.stockInput).subscribe((response)=>{
  console.log(response);
  this.value1=response;     
});
}
close(item:any,index:any){
  this.value2.splice(index,1);
  const list=JSON.stringify(this.value2);
  localStorage.setItem('json',list);
}

}