import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FactsTableComponent } from './facts-table/facts-table.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FactsTableComponent],
  imports: [BrowserModule, NoopAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
