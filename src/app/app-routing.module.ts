import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortbioComponent } from './components/shortbio/shortbio.component';

const routes: Routes = [
  { path: 'shortbio', component: ShortbioComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
