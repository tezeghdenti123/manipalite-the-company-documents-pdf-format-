import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dataArray:any;
  private userDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  //userData = this.userDataSource.asObservable();
  constructor(private http:HttpClient) { }
 
  updateUserData(data:any) {
    this.userDataSource.next(data);
  }
  getData():Observable<any[]>{
    return this.userDataSource.asObservable();
  }
  getbooks(data:any):Observable<any>{

    this.dataArray=this.http.post("http://localhost:8081/getFile",data);
    return this.dataArray;


  }
  getMois(data:string):Observable<any>{
    return this.http.get("http://localhost:8081/get?mois="+data,{})
  }
  onSubmit(data:any):Observable<any>{
    console.warn(data);
    const headers = new HttpHeaders()
    this.dataArray=this.http.post("http://localhost:8081/getFile?path="+data,{});
    return this.dataArray;

  }
  saveMois(data:any):Observable<any>{
    this.dataArray=this.http.post("http://localhost:8081/",data);
    return this.dataArray;

  }
 
  getAll():Observable<any>{
    return this.http.get("http://localhost:8081/");
  }
}
