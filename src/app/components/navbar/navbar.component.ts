import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elems1 = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems1);
    var elems2 = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems2, {
      scrollOffset: 200
    });
    var elems3 = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems3, {
      hover: true,
      coverTrigger: false
    });
  }

}
