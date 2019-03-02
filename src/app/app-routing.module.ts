import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortbioComponent } from './components/shortbio/shortbio.component';
import {ResumeComponent} from './components/resume/resume.component'

const routes: Routes = [
  { path: 'shortbio', component: ShortbioComponent },
  { path: 'resume', component: ResumeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
