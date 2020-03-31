import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSearchComponent } from './gallery/image-search/image-search.component';
import { CannyImageComponent } from './gallery/canny-image/canny-image.component';


const routes: Routes = [
  {path: 'search', component: ImageSearchComponent},
  {path: 'canny-image', component: CannyImageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
