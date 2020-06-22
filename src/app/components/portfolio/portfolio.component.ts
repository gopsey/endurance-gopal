import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, { fullWidth: false, indicators: true });
  }

  ngOnInit(): void {}

}
