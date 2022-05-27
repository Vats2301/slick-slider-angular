import { Component } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [`.p-10 { padding: 10px }`],
})
export class AppComponent {
  // arrayLength = 10;

  config: Slick.Config = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // getArray(count: number) {
  //   return new Array(count);
  // }
}
