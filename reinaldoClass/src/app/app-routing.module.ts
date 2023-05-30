import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'






import { BodyComponent } from './_body/body.component';
import { environment } from 'src/environments/environment';



const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  { path: 'cSharp', loadChildren: () => import('./c-sharp/c-sharp.module').then(module => module.CSharpModule)},
  { path: 'dataBase', loadChildren: () => import('./data-base/data-base.module').then(module => module.DataBaseModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
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
