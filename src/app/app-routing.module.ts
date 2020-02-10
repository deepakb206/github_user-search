import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './shared/master/master.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: '',
      component: MasterComponent,
      children : [
          { path: 'home' , component: LandingComponent },
          { path: 'users/:userName' , component: UserComponent }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
