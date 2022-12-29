import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { Template6Component } from './template6/template6.component';
import { Template7Component } from './template7/template7.component';
import { Template8Component } from './template8/template8.component';
import { TemplatesComponent } from './templates/templates.component';
import { GeneratorComponent } from './generator/generator.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path:'templates', component: TemplatesComponent},  
{path:'template1', component: Template1Component},
{path:'template2', component: Template2Component},
{path:'template3', component: Template3Component},
{path:'template4', component: Template4Component},
{path:'template5', component: Template5Component},
{path:'template6', component: Template6Component},
{path:'template7', component: Template7Component},
{path:'template8', component: Template8Component},
{path:'about', component: AboutComponent},
{path:'generator', component: GeneratorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TemplatesComponent,Template1Component,Template2Component,Template3Component,Template4Component,Template5Component,Template6Component,Template7Component,Template8Component,GeneratorComponent]