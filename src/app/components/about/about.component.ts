import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function isElementInView() {
      var windowHeight = $(window).height();
      var windowTop = $(window).scrollTop();
      var windowBottom = (windowTop + windowHeight);

      $.each($('.animation-element'), function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        // Current container within viewport check
        if ((element_bottom_position >= windowTop) &&
          (element_top_position <= windowBottom)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }

    $(window).on('scroll resize', isElementInView);
    $(window).trigger('scroll');
  }

}
