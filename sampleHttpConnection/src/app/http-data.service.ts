import { Injectable } from '@angular/core';
 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http : HttpClient) { }

empData = [{ name : 'Arjun', age : 20 , position : 'developer'},
{ name : 'John', age : 35 , position : 'Lead'},
{ name : 'Ram', age : 40 , position : 'manager'}]



getEmpData()
{

  debugger;
  return this.empData;
}

getCall()
{

  debugger;

  var result = this.http.get('https://jsonplaceholderaaaa.typicode.com/posts');
  return result;

}


postData(title,body,userid)
{

debugger;
  var obj = {title : "",  body : "",  userId : ""};


  let headers = new HttpHeaders();


  headers.append('Content-Type', "application/json");

  obj.title = title;
  obj.body = body;
  obj.userId = userid;

  let jsonData = JSON.stringify(obj);


  return this.http.post("https://jsonplaceholder.typicode.com/posts",jsonData,{headers});


}


}
