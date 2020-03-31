import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// const URL = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=ef1f9d4f8ca80dada31
// c684364355282&FLickrApi_sig=d7f57fa9e01a6a2d6ccd8597b8d2f86b&nojsoncallback=1&form
// at=json&tags=hi&page=0&per_page=50&content_type=7&extras=owner_name,date_upload`;

const BASE_URL = 'https://api.flickr.com/services/rest?';
@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private httpClient: HttpClient) { }

  fetchImages(data){
    const params = this.paramBuilder(data);
    return this.httpClient.get(BASE_URL, {params});
  }

  paramBuilder(data: any){
    const params = new HttpParams()
  .set('method', 'flickr.photos.search')
  .set('api_key', 'ef1f9d4f8ca80dada31c684364355282')
  .set('FLickrApi_sig', 'd7f57fa9e01a6a2d6ccd8597b8d2f86b')
  .set('nojsoncallback', '1')
  .set('format', 'json')
  .set('tags', data.text)
  .set('text', data.text)
  .set('page', data.pageNo)
  .set('per_page', '50')
  .set('content_type', '7')
  .set('extras', 'owner_name,date_upload');
    return params;

  }
}
