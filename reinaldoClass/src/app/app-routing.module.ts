import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'




import { CSharpComponent } from './c-sharp/c-sharp.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { BodyComponent } from './_body/body.component';
import { environment } from 'src/environments/environment';



const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'cSharp', loadChildren: () => import('./c-sharp/c-sharp.module').then(module => module.CSharpModule)},
  { path: 'dataBase', component: DataBaseComponent },
  { path: 'body', component: BodyComponent },
  { path: 'auth', loadChildren: () => import('./_auth/auth.module').then(module => module.AuthModule) },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
