import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../_models/category';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'https://confetti-email-service-7epag.ondigitalocean.app/category';

  constructor(private http: HttpClient) {
  }

  public getCategoryByType(type: string): Observable<Category[]> {
    return this.http.get(`${this.baseUrl}/${type}/all`).pipe(map(data => data as Category[]));
  }
}
