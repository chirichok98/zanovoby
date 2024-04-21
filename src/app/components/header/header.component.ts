import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

export const PAGES_CONFIG = [
  { title: 'Главная', path: '/' },
  { title: 'Процесс', path: '/process' },
  { title: 'Прайс', path: '/prices' },
]

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() openDrawer = new EventEmitter();

  PAGES_CONFIG = PAGES_CONFIG;

  constructor(private readonly _gaService: GoogleAnalyticsService) {}

  open(): void {
    this.openDrawer.emit();
  }

  trackCall(): void {
    this._gaService.event('phone_call', 'communication');
  }
}