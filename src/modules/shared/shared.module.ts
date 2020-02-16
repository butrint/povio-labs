import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingsComponent } from './components/settings/settings.component';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services/settings.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [SettingsService],
  declarations: [SettingsComponent],
  exports: [SettingsComponent]
})
export class SharedModule {}
