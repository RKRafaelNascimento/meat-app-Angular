import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.menuItem = this.restaurantService.menuOfRestaurant(
      this.router.parent.snapshot.params['id']
    )
  }

  addMeuItem(item: MenuItem){
    console.log(item)
  }

}
