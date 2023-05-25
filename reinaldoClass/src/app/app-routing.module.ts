import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule} from '@angular/fire/compat'



import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { BodyComponent } from './_body/body.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
{path:'body', component: BodyComponent},
{ path: 'auth', component: AuthComponent },
{ path: 'c-sharp', component: CSharpComponent },
{ path: 'data-base', component: DataBaseComponent },
{ path: '**', redirectTo: 'body', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true}),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
