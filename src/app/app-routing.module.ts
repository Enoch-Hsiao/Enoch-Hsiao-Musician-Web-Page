import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BioComponent } from './components/bio/bio.component'
import { VideosComponent } from './components/videos/videos.component'
import { ContactComponent } from './components/contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'bio', component: BioComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }