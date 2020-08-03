import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieCarrouselComponent } from './movie-carrousel/movie-carrousel.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [SearchBarComponent, MovieCarrouselComponent, MovieDetailsComponent],
  exports: [SearchBarComponent, MovieCarrouselComponent, MovieDetailsComponent]
})
export class UiModule {}
