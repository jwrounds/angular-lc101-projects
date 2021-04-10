import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.shopify.com/s/files/1/2868/5752/products/a00bbdddeece6ae3d0fb8eccabb82f67_300x.jpg?v=1572069139';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}