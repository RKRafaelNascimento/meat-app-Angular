import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    //Ao invés de utilizar .subcribe(), usei pipe async no *ngFor do templete
   this.reviews = this.restaurantService.reviewOfRestaurant(this.router.parent.snapshot.params['id'])
  }
}
