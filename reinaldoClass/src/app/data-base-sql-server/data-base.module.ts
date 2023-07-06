import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDbComponent } from './create-db/create-db.component';
import { QueryComponent } from './query/query.component';
import { SqlJoinsComponent } from './sql-joins/sql-joins.component';
import { SqlStoredProceduresComponent } from './sql-stored-procedures/sql-stored-procedures.component';
import { DataBaseComponent } from './data-base.component';
import { RouterModule } from '@angular/router';
import { SintaxComponent } from './sintax/sintax.component';


const dataBase = [
  { path: '', component: DataBaseComponent },
  { path: 'sintax', component: SintaxComponent },
  { path: 'sqlStorage', component: SqlStoredProceduresComponent },
  { path: 'sqlJoin', component: SqlJoinsComponent },
  { path: 'query', component: QueryComponent },
  { path: 'create', component: CreateDbComponent },

];


@NgModule({
  declarations: [
    CreateDbComponent,
    QueryComponent,
    SqlJoinsComponent,
    SqlStoredProceduresComponent,
    DataBaseComponent,
    SintaxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dataBase)
  ]
})
export class DataBaseModule { }
