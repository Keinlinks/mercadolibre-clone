import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  images = [
    'https://http2.mlstatic.com/D_NQ_918849-MLA70484777853_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_823271-MLA70431169354_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_767465-MLA70561816546_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_895844-MLA70508872051_072023-OO.webp',
    'https://http2.mlstatic.com/D_NQ_981630-MLA70517058584_072023-OO.webp',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
}
