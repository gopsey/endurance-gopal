import { Component, OnInit, AfterViewInit } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    let elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }

  ngOnInit(): void {

  }

}
