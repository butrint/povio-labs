import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public fiats = ['USD', 'EUR', 'CNY'];
  selected: string;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    if (localStorage.getItem('fiat')) {
      this.selected = localStorage.getItem('fiat');
    }
  }

  onSelectChange() {
    this.settingsService.setFiat(this.selected);
  }
}
