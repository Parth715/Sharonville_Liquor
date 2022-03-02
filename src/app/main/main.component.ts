import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  homeSlider={items: 1, dots: true, nav: false, autoplay: true, autoplaySpeed:1000, smartSpeed:1500, autoplayHoverPause: true, loop: true}

}
