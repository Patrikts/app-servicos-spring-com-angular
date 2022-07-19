import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';
     
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';
  href: any;
 
  ngAfterViewInit() {
    (($) => {
      "use strict";
      var path = window.location.href;
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  }
}
