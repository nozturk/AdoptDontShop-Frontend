import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncedPetComponent } from './components/announced-pet/announced-pet.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'login', component: LoginComponent},
  // {path: 'callback', component: CallbackComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"", pathMatch:"full", component:AnnouncedPetComponent},
  {path:"announcedPet", component:AnnouncedPetComponent},
  {path:"announcedPet/type/:petType", component:AnnouncedPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
