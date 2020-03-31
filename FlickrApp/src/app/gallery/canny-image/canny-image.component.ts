import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cannyEdgeDetector from 'canny-edge-detector';
import Image from 'image-js';
import { DomSanitizer } from '@angular/platform-browser';
declare var cv: any;


@Component({
  selector: 'app-canny-image',
  templateUrl: './canny-image.component.html',
  styleUrls: ['./canny-image.component.css']
})
export class CannyImageComponent implements OnInit {
  rawImage: any = {};

  constructor(private route: Router, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
      if (history.state.data) {
        this.rawImage = history.state.data;
        this.imgURLBuilder();
      }else{
        this.route.navigate(['']);
      }
      this.createCanvasImgInput();
  }

  imgURLBuilder(){
    this.rawImage.url =
    'https://farm' + this.rawImage.farm +'.staticflickr.com/' + this.rawImage.server + '/' + this.rawImage.id + '_' + this.rawImage.secret +'_b.jpg';
  }

  createCanvasImgInput(){
        const canvas: any = document.getElementById('canvasInput');
        const ctx = canvas.getContext('2d');
        const img: any = document.getElementById('canny-img');
        img.crossOrigin = 'anonymous';
        img.onload = (()=> {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            this.processImage();
            document.getElementById('canny-img').style.display = 'none';
            document.getElementById('canvasInput').style.display = 'none';
        });
        img.src = this.rawImage.url;
  }

  processImage(){
    const src = cv.imread('canvasInput');
    const dst = new cv.Mat();
    cv.cvtColor(src, src, cv.COLOR_RGB2GRAY, 0);
    cv.Canny(src, dst, 50, 100, 3, false);
    cv.imshow('canvasOutput', dst);
    src.delete(); dst.delete();
  }

  goBackGallery(){
    this.route.navigate(['search']);
  }


}
