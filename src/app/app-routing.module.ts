import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
    
  },
  {
    path: 'about',
    component: AboutmeComponent
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },

  {
    path: 'contact',
    component: ContactmeComponent
  },

  {
    path: '**',
    component: PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
