import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './componets/form/form.component';
import { LoginComponent } from './componets/login/login.component';
import { PrincipalComponent } from './componets/principal/principal.component';
import { RegisterComponent } from './componets/register/register.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:"principal"
  },
  {
    path:"principal",
    component: PrincipalComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"form",
    component: FormComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
