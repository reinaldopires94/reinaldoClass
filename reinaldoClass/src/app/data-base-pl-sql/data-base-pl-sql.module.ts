import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBasePlSqlComponent } from './data-base-pl-sql.component';
import { RouterModule } from '@angular/router';


const dataBase = [
  {path: '',component:DataBasePlSqlComponent},

]
@NgModule({
  declarations: [
    DataBasePlSqlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dataBase)
  ]
})
export class DataBasePlSqlModule { }
