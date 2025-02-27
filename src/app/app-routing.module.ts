import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'template-forms', component:TemplateFormsComponent},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
