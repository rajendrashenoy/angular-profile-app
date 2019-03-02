import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortbioComponent } from './components/shortbio/shortbio.component';
import {ResumeComponent} from './components/resume/resume.component'
import {FullstackComponent} from './components/fullstack/fullstack.component'

const routes: Routes = [
  { path: 'shortbio', component: ShortbioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'fullstack', component: FullstackComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
