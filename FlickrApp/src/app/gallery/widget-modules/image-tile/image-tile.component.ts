import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.css']
})
export class ImageTileComponent implements OnInit {

  @Input() tileData;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  showCannyImage(){
    this.router.navigate(['preview'], {state : {data : this.tileData}});
  }

}
