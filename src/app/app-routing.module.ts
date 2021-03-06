import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RequestComponent } from './request/request.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'request', component: RequestComponent},
  {path:'login', component:SigninComponent },
  {path:'signup', component:SignupComponent},
  {path:'profile', component: UpdateprofileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
