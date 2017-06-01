import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { ProjectCenterModule } from './project-center/project-center.module';
import { PersonnelManagerModule } from './personnel-manager/personnel-manager.module';

import { AppComponent }   from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    CoreModule,
    ProjectCenterModule,
    PersonnelManagerModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
