import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePAgeComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'welcomePage', component:WelcomePAgeComponent},
  {path:'', redirectTo:'welcomePage', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
