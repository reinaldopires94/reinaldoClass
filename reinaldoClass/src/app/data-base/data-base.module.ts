import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDbComponent } from './create-db/create-db.component';
import { QueryComponent } from './query/query.component';
import { SqlJoinsComponent } from './sql-joins/sql-joins.component';
import { SqlStoredProceduresComponent } from './sql-stored-procedures/sql-stored-procedures.component';
import { DataBaseComponent } from './data-base.component';



@NgModule({
  declarations: [
    CreateDbComponent,
    QueryComponent,
    SqlJoinsComponent,
    SqlStoredProceduresComponent,
    DataBaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataBaseModule { }
