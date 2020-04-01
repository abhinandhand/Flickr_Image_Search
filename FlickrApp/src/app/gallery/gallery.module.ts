import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ImageSearchComponent } from './widgets/image-search/image-search.component';
import { CannyImageComponent } from './widgets/canny-image/canny-image.component';
import { ImageTileComponent } from './widget-modules/image-tile/image-tile.component';



@NgModule({
  declarations: [ImageSearchComponent, CannyImageComponent, ImageTileComponent],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule
  ],
  exports: [ImageSearchComponent]
})
export class GalleryModule { }
