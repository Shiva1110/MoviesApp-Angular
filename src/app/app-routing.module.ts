import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { HomeComponent } from './user/home/home.component';

const routes: Routes = [
  {path: 'register', component: RegistrationPageComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginPageComponent, canActivate: [LoggedInGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'user', component: HomeComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '', component: LoginPageComponent, pathMatch: 'full', canActivate: [LoggedInGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
