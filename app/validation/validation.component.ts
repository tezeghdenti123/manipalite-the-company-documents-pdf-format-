import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from './../main.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  dataArray:any[]=[];
  test:string;
  alertmess:string="";
  i=0;
  constructor(private fb: FormBuilder,private service:MainService,private route:ActivatedRoute,private router:Router) {
   }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {this.dataArray = data; 
      console.warn(this.dataArray);
      this.test=JSON.stringify(this.dataArray)});
      if(this.dataArray==[]){
        this.alertmess="this file is already uploaded to dataBase";
      }
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  trackByTest(test: number, obj: any): any {
    return test;
  }
  onSubmit(data:any){
    console.warn(data);
    /*let n=this.dataArray.length;
    console.log(n);
    let k=0
    for(let i=0;i<n;i++){
      if(this.dataArray[i].mois===data.mois){
        k=i;
        console.log(i);
        break;
      }
    }*/
    this.service.saveMois(this.dataArray).subscribe(res=>{console.log(res);});
    this.router.navigateByUrl('upload');
  }


  

}
