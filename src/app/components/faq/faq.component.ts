import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';
declare let $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  }

}
