import { Component, OnInit } from '@angular/core';

const PAGES_CONFIG = [
  { title: 'Главная', path: '/' },
  { title: 'Процесс', path: '/process' },
  { title: 'Цены', path: '/prices' },
]

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  PAGES_CONFIG = PAGES_CONFIG;

  constructor() { }

  ngOnInit() { }
}