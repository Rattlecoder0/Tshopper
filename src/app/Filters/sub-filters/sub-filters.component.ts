import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-filters',
  templateUrl: './sub-filters.component.html',
  styleUrls: ['./sub-filters.component.css']
})
export class SubFiltersComponent implements OnInit {

  wishlistAdded:boolean = false
  filterHeightToggler:boolean = false
  filterBarHeight:any
  arrow:any
  des:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vitae porro harum fugiat nihil eligendi incidunt. Quibusdam distinctio natus qui magnam molestias '

  ngOnInit(): void {
    
  }

  toggleWishlist() {
    this.wishlistAdded = !this.wishlistAdded;
  }

  toggleFilterHeight() {
    this.filterHeightToggler = !this.filterHeightToggler;
    this.filterBarHeight = document.getElementById('sub-filter');
    
    if (this.filterHeightToggler == true) {
      let intervalCount = 0;
      let pixelCount = 35
      const interval = setInterval(() => {
        this.filterBarHeight.style.height = `${pixelCount}px`;
        intervalCount++;
        pixelCount += 35
        if (intervalCount === 10) {
          clearInterval(interval);
        }
      }, 50);
    } 
    else {
      this.filterBarHeight.style.height = '0px';
    }

    // -----filter arrow rotate----
    const degree = this.filterHeightToggler?180:0
    this.arrow = document.getElementById('filter-arrow')
    this.arrow.style.rotate = `${degree}deg`
  }

  

}
