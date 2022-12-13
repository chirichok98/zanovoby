import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

const TAB_BY_INDEX = {
  0: 'view_urban',
  1: 'view_cold',
  2: 'view_fast',
  3: 'view_repair',
  4: 'view_bags',
};

@Component({
  selector: 'app-price-view',
  templateUrl: './price-view.component.html',
  styleUrls: ['./price-view.component.scss']
})
export class PriceViewComponent {

  constructor(private readonly _gaService: GoogleAnalyticsService) {
    this.trackPriceTab(TAB_BY_INDEX[0]);
  }

  trackCommunication(type: string): void {
    this._gaService.event(type, 'communication');
  }

  trackPriceTab(tab: string): void {
    this._gaService.event(tab, 'price_tabs');
  }

  onTabChange(event: MatTabChangeEvent): void {
    if (event) {
      const tab = TAB_BY_INDEX[event.index as 0 | 1 | 2 | 3 | 4];
      this.trackPriceTab(tab);
    }
  }
}
