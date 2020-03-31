import { Component, OnInit } from '@angular/core';
import { FlickrService } from 'src/app/shared/services/flickr-service/flickr.service';


@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  searchTerm = 'Test';
  searchParams = {text : this.searchTerm, pageNo: 1};
  navigation: any = {
    resultData : [],
  };
  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
    this.invokeFlickrAPI();
   // window.addEventListener('scroll', this.intialiseIncrementalLoading, true); 
  }

  invokeFlickrAPI(){
    this.flickrService.fetchImages(this.searchParams).subscribe((data: any) => {
      console.log(data);
      this.convertToGallery(data.photos);
    });
  }

  convertToGallery(resultData: any){
    const pageData: any = {};
    const photos = resultData.photo;
    const [col1 , col2, col3, col4] = [photos.slice(0, 12),
      photos.slice(12, 24), photos.slice(24,  36), photos.slice(36, photos.length)];
    pageData['columns'] = [col4, col2, col3, col1];
    this.navigation.resultData.push(pageData);
    console.log(this.navigation.resultData);
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



  // intialiseIncrementalLoading = (event) => {
  //   if (this.navigation.resultData.length >= 1 ){
  //         if ((window.innerHeight + window.scrollY + 300) >= document.body.offsetHeight) {
  //             this.fetchNextPagePics();
  //         }
  //     }
  //   }



}
