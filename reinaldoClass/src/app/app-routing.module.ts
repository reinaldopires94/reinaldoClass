import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat'






import { BodyComponent } from './_body/body.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './_auth/auth-guard';



const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent, canActivate: [AuthGuard] },
  { path: 'cSharp', loadChildren: () => import('./c-sharp/c-sharp.module').then(module => module.CSharpModule), canActivate: [AuthGuard]},
  { path: 'dataBase', loadChildren: () => import('./data-base-sql-server/data-base.module').then(module => module.DataBaseModule), canActivate: [AuthGuard] },
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
