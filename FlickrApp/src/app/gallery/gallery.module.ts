import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageSearchComponent } from './image-search/image-search.component';
import { CannyImageComponent } from './canny-image/canny-image.component';
import { ImageTileComponent } from './image-tile/image-tile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ImageSearchComponent, CannyImageComponent, ImageTileComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ImageSearchComponent]
})
export class GalleryModule { }
