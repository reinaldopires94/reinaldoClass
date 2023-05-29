import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from '../_share/spinner/spinner.component';
import { ModalComponent } from '../_share/modal/modal.component';






@NgModule({
    declarations: [
        AuthComponent,
        SpinnerComponent,
        ModalComponent


    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        RouterModule.forChild([
          {path: '', component: AuthComponent}
        ])


    ],
    exports: [
      ModalComponent
    ]
})
export class AuthModule { }
