import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSearchComponent } from './gallery/widgets/image-search/image-search.component';
import { CannyImageComponent } from './gallery/widgets/canny-image/canny-image.component';


const routes: Routes = [
  {path: 'search', component: ImageSearchComponent},
  {path: 'preview', component: CannyImageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
