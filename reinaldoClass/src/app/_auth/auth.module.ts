import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';




@NgModule({
    declarations: [
        AuthComponent,


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppModule


    ]
})
export class AuthModule { }
