import { Component, EventEmitter, Output } from '@angular/core';

export const PAGES_CONFIG = [
  { title: 'Главная', path: '/' },
  { title: 'Процесс', path: '/process' },
  { title: 'Цены', path: '/prices' },
]

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openDrawer = new EventEmitter();

  PAGES_CONFIG = PAGES_CONFIG;

  open(): void {
    this.openDrawer.emit();
  }
}