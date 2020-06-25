import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';
declare let $: any;

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.collapsible.expandable');
    var instances = M.Collapsible.init(elems, {
      accordion: false
    });
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
      margin: 15
    });
  }

}
