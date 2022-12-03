import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { PAGES_CONFIG } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatDrawer) drawer!: MatDrawer;
  
  PAGES_CONFIG = PAGES_CONFIG;
  screenWidth!: number;

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  get isMobile(): boolean {
    return this.screenWidth < 820;
  }

  constructor() {
    this.onResize();
  }

  onOpenDrawer(): void {
    console.log(this.drawer);
    this.drawer.toggle();
  }
}
