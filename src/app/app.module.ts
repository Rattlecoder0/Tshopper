import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FiltersComponent } from './Filters/home-filters/filters.component';
import { SelectedfilterComponent } from './Filters/selected-filter/selectedfilter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterbarComponent } from './Title Bars/filterbar/filterbar.component';
import { HomeComponent } from './home/home.component';
import { SubFiltersComponent } from './Filters/sub-filters/sub-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WishlistComponent,
    FiltersComponent,
    SelectedfilterComponent,
    FilterbarComponent,
    HomeComponent,
    SubFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
