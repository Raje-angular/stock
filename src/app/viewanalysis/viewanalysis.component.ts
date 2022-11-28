import { Component, OnInit } from '@angular/core';
import { analysisInfo } from '../analysis';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewanalysis',
  templateUrl: './viewanalysis.component.html',
  styleUrls: ['./viewanalysis.component.css']
})
export class ViewanalysisComponent implements OnInit{
stock:string='';
value2:Array<analysisInfo>=[];
constructor(private apiservice:ApiService,private route:ActivatedRoute){}

ngOnInit(): void{
  this.route.params.subscribe(route=>
    {
      this.stock=route['symbol'];
      this.analysis();
    });
  }
  analysis(){
    this.apiservice.getdetails(this.stock).subscribe((output)=>{
      this.value2=output.data;
      console.log(output);
      console.log(this.value2);
    })
  }

}
