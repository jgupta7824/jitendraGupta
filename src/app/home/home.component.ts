import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['style.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// ngAfterViewInit() {
//   // You can also use "$(window).load(function() {"
//             $(function () {
//               // Slideshow 4
//               $("#slider3").responsiveSlides({
//               auto: true,
//               pager:true,
//               nav:false,
//               speed: 500,
//               namespace: "callbacks",
//               before: function () {
//                 $('.events').append("<li>before event fired.</li>");
//               },
//               after: function () {
//                 $('.events').append("<li>after event fired.</li>");
//               }
//               });
//
//             });
// }

}