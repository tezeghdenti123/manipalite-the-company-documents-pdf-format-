import { ValidationComponent } from './validation/validation.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"Search",component:SearchComponent},
  {path:"upload",component:UploadComponent},
  {path:"validation",component:ValidationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
