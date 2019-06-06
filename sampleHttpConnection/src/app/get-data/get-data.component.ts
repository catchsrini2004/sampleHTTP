import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  constructor(private myservice : HttpDataService) { }
  empData : any ;

  ngOnInit() {
  }
loadData()
{

  debugger;

this.empData = this.myservice.getEmpData();


}

create(title,body,userid)
{
    debugger;


    this.myservice.postData(title,body,userid).subscribe(
      (data)=>{

           debugger;
      },
      (error)=>
      {
           debugger;
      }
    
    )


}


getData()
{
debugger;

var getResult = this.myservice.getCall();

getResult.subscribe(
  (data) =>{

       debugger;


  },

  (error)=>
  {

       debugger;


  }

)

}


}
