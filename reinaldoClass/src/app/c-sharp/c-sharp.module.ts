import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SintaxComponent } from '../data-base/sintax/sintax.component';
import { TokenComponent } from './token/token.component';
import { HttpDeleteComponent } from './http-delete/http-delete.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { HttpPostComponent } from './http-post/http-post.component';
import { HttpPutComponent } from './http-put/http-put.component';
import { RouterModule } from '@angular/router';
import { CSharpComponent } from './c-sharp.component';

const cSharp = [
  { path: '', component: CSharpComponent },
  { path: 'token', component: TokenComponent },
  { path: 'http-delete', component: HttpDeleteComponent },
  { path: 'http-get', component: HttpGetComponent },
  { path: 'http-post', component: HttpPostComponent },
  { path: 'http-put', component: HttpPutComponent },
]

@NgModule({
  declarations: [
    SintaxComponent,
    TokenComponent,
    HttpDeleteComponent,
    HttpGetComponent,
    HttpPostComponent,
    HttpPutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cSharp)
  ],
  exports: [RouterModule]
})
export class CSharpModule { }
