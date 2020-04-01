import { Component, OnInit } from '@angular/core';
import { FlickrService } from 'src/app/shared/services/flickr-service/flickr.service';


@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  searchTerm = 'Sky';
  searchParams = {text : this.searchTerm, pageNo: 1};
  navigation: any = {
    resultData : [],
    nextIndex: 0,
    noResultFound: false
  };
  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
    this.invokeFlickrAPI();
  }

  invokeFlickrAPI(){
    this.navigation.noResultFound = false;
    this.flickrService.fetchImages(this.searchParams).subscribe((data: any) => {
      if (data.photos.total !== '0'){
      this.convertToGallery(data.photos);
      }else{
        this.navigation.noResultFound = true;
      }
    });
  }

  convertToGallery(resultData: any){
    const pageData: any = {};
    const photos = resultData.photo;
    let columns = this.navigation.resultData.length > 0 ? this.navigation.resultData :  [[], [], [], []];
    let next = this.navigation.nextIndex;
    photos.forEach(element => {
     columns[next].push(element);
     next = next === 3 ? 0 : next + 1;
    });
    this.navigation.nextIndex = next;
    this.navigation.resultData = columns;
  }

  search(){
    this.navigation.resultData = [];
    this.searchParams.text = this.searchTerm;
    this.invokeFlickrAPI();
  }

  fetchNextPagePics(){
    this.searchParams.pageNo += 1;
    this.invokeFlickrAPI();
  }

}
