import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { ShortbioComponent } from './components/shortbio/shortbio.component';
import {ResumeComponent} from './components/resume/resume.component';
import {FullstackComponent} from './components/fullstack/fullstack.component';
import {CvComponent} from './component/cv/cv.component';

const routes: Routes = [
  { path: 'shortbio', component: ShortbioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'fullstack', component: FullstackComponent },
  { path: 'cv', component: CvComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
