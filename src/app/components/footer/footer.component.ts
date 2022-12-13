import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  
  constructor(private readonly _gaService: GoogleAnalyticsService) {}

  trackCommunication(type: string): void {
    this._gaService.event(type, 'communication');
  }
}
