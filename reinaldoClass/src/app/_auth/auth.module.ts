import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../_share/spinner/spinner.component';






@NgModule({
    declarations: [
        AuthComponent,
        SpinnerComponent


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        RouterModule.forChild([
          {path: '', component: AuthComponent}
        ])


    ]
})
export class AuthModule { }
