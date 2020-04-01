import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configData;
  constructor(private http: HttpClient) {
    this.fetchConfigDetails();
   }

  fetchConfigDetails(){
    return this.http.get('assets/config/config.json').subscribe(data => {
      console.log(data);
    });
  }
}
