import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatSidenavModule, MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }