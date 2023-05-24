import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  wishlistAdded:boolean = false
  des:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique vitae porro harum fugiat nihil eligendi incidunt. Quibusdam distinctio natus qui magnam molestias '

  toggleWishlist() {
    this.wishlistAdded = !this.wishlistAdded;
  }
}
