import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBasePlSqlComponent } from './data-base-pl-sql.component';
import { RouterModule } from '@angular/router';
import { SintaxplSqlComponent } from './sintaxpl-sql/sintaxpl-sql.component';


const dataBase = [
  {path: '',component:DataBasePlSqlComponent},
  {path: 'sintaxplsql',component:SintaxplSqlComponent}

]
@NgModule({
  declarations: [
    DataBasePlSqlComponent,
    SintaxplSqlComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dataBase)
  ]
})
export class DataBasePlSqlModule { }
