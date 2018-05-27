import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showFiller = false;

  @ViewChild('drawer') public _sidenav: MatDrawer;
  ngOnInit() {
    this._sidenav.open();
  }
}