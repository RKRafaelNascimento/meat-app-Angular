import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.router.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
