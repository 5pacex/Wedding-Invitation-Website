import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { Template4Component } from './template4/template4.component';
import { GeneratorComponent } from './generator/generator.component';
import { Template5Component } from './template5/template5.component';
import { Template6Component } from './template6/template6.component';
import { Template7Component } from './template7/template7.component';
import { Template8Component } from './template8/template8.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
  routingComponents,
  TemplatesComponent,
  Template4Component,
  GeneratorComponent,
  Template5Component,
  Template6Component,
  Template7Component,
  Template8Component,
  AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
