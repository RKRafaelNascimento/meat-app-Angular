import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{
    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  restaurantById(id:string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  reviewOfRestaurant(id:string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }

  menuOfRestaurant(id:string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restaurant/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
  }
}
