import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Operation } from '../operation';
import { Mois } from '../Mois';
import { ViewChild} from '@angular/core';
import {SelectItem, FilterService, FilterMatchMode  } from 'primeng/api';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  dataArray:any[];
  list:any[];
  moisn:string="";
  mois:string="";
  alertmess:string="hello";
  matchModeOptions: SelectItem[];
  date:string="";
  table:any[];
  dataSource:any;


  @Input() public nameFromParent:any;
  constructor(private service:MainService,private filterService:FilterService) {

   }
   

  getall(){
    this.service.getAll().subscribe(res=>{this.table=res;
      this.dataArray=this.table;
    console.table(this.table);});
  
  }
  clear(table: any) {
    table.clear();
}
  ngOnInit(): void {
   this.getall();
   const customFilterName = 'custom-equals';

        this.filterService.register(customFilterName, (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });
        this.matchModeOptions = [
          { label: 'Custom Equals', value: customFilterName },
          { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
          { label: 'Contains', value: FilterMatchMode.CONTAINS },
      ];
  }
  filter(data:any){
    //this.alertmess=data;
    this.table=[];
    if(data==""){
      this.table=this.dataArray;
    }
    for (var i = 0; i < this.dataArray.length; i++) {
      var a=this.dataArray[i].listoperation;
      var mois=new Mois(this.dataArray[i].mois,this.dataArray[i].name)
      for(var j=0;j<a.length;j++){
        if(a[j].date.includes(data)){
          mois.addop(a[j]);
          //this.alertmess=a[j].date;
        }
      }
      if(data!=""){
      if(mois.getlist().length!=0){
        this.table.push(mois);
      }
    }
    }
  }
  filteroperation(data:any){
    //this.alertmess=data;
    this.table=[];
    if(data==""){
      this.table=this.dataArray;
    }
    for (var i = 0; i < this.dataArray.length; i++) {
      var a=this.dataArray[i].listoperation;
      var mois=new Mois(this.dataArray[i].mois,this.dataArray[i].name)
      for(var j=0;j<a.length;j++){
        if(a[j].operations.includes(data)){
          mois.addop(a[j]);
          //this.alertmess=a[j].operations;
        }
      }
      if(data!=""){
      if(mois.getlist().length!=0){
        this.table.push(mois);
      }
    }
    }
  }
  filterdebit(data:any){
    //this.alertmess=data;
    this.table=[];
    if(data==""){
      this.table=this.dataArray;
    }
    for (var i = 0; i < this.dataArray.length; i++) {
      var a=this.dataArray[i].listoperation;
      var mois=new Mois(this.dataArray[i].mois,this.dataArray[i].name)
      for(var j=0;j<a.length;j++){
        if(a[j].debit.includes(data)){
          mois.addop(a[j]);
          //this.alertmess=a[j].operations;
        }
      }
      if(data!=""){
      if(mois.getlist().length!=0){
        this.table.push(mois);
      }
    }
    }
  }
  filtercredit(data:any){
    //this.alertmess=data;
    this.table=[];
    if(data==""){
      this.table=this.dataArray;
    }
    for (var i = 0; i < this.dataArray.length; i++) {
      var a=this.dataArray[i].listoperation;
      var mois=new Mois(this.dataArray[i].mois,this.dataArray[i].name)
      for(var j=0;j<a.length;j++){
        if(a[j].credit.includes(data)){
          mois.addop(a[j]);
          //this.alertmess=a[j].operations;
        }
      }
      if(data!=""){
      if(mois.getlist().length!=0){
        this.table.push(mois);
      }
    }
    }
  }
  submit(){
    if(this.date==""){
      this.alertmess="choose date please";
    }
    else{
      this.alertmess="";
      this.moisn=this.date[5]+this.date[6];
      if(this.moisn=="01"){
        this.mois="janvier"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="02"){
        this.mois="février"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="03"){
        this.mois="mars"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="04"){
        this.mois="avril"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="05"){
        this.mois="mai"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="06"){
        this.mois="juin"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="07"){
        this.mois="juillet"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="08"){
        this.mois="août"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="09"){
        this.mois="septembre"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="10"){
        this.mois="octobre"+" "+this.date.substring(0,4);
      }
      else if(this.moisn=="11"){
        this.mois="novembre"+" "+this.date.substring(0,4);
      }
      else{
        this.mois="décembre"+" "+this.date.substring(0,4);
      }
      //request body
      this.service.getMois(this.mois).subscribe(res=>{this.table=res;
        this.dataArray=this.table;
      //console.log(res);
      });

    }

  }
  
}
