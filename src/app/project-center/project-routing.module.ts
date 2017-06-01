import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectCenterComponent } from './project-center.component';

const personnelRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectCenterComponent
    },
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(personnelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }