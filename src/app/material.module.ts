import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatRadioModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
