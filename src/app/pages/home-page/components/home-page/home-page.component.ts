import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.5,
        start: 'top top',
        end: 'bottom bottom',
      },
    });
  }

  onClick(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
