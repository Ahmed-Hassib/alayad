import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

declare function playVideo(videoElID: any): any;
declare function muteVideo(videoElID: any): any;

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.css'],
})
export class BannerCarouselComponent implements AfterViewInit {
  @ViewChild('carouselVideo') carouselVideo: any;

  constructor() {}

  ngAfterViewInit() {
    muteVideo('carouselVideo');
    playVideo('carouselVideo');
  }
}
