import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  value1:any;
  flag=false;
  alertmess="";
  hero:any;
  test=0;
  name:any;
  nmfile:string;
  dataArray:any[]=[];
  file:any;
  constructor(private service:MainService,private router:Router) {
   }
   
  ngOnInit(): void {
  }
  getFile(event:any){
    this.file=<File>event.target.files[0];
    //console.log("file",this.file)
    this.nmfile=this.file.name;
    const formData = new FormData();
    formData.append('files',this.file);
    //this.service.onSubmit(this.value1).subscribe(res =>{this.name=res;
    this.dataArray=[];
    this.alertmess="";
    this.test=1;
    this.service.getbooks(formData).subscribe(data => {
      this.dataArray = data;
      //console.table(this.dataArray);
      this.flag = true;
      if(this.dataArray.length==0){
        alert("*this file is already uploaded to dataBase");
      }else{
        this.service.updateUserData(this.dataArray);
        this.router.navigateByUrl('validation');
      } 
    },
    error => {
      console.log("Error");
      alert("*Ce fichier ne répond pas aux normes!");

    }
  )

  }
  

    
  
}
