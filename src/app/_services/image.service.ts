import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../_models/image';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'https://confetti-email-service.herokuapp.com/image';

  constructor(private http: HttpClient) {
  }

  public getImageByFolder(folder: string): Observable<Image[]> {
    return this.http.get(`${this.baseUrl}/get-by-folder/${folder}`).pipe(map(data => data as Image[]));
  }

  public saveImage(image: Image): Observable<Image> {
    return this.http.post(`${this.baseUrl}/save`, image).pipe(map(data => data as Image));
  }

  public saveImageList(images: Image[]): Observable<Image[]> {
    return this.http.post(`${this.baseUrl}/save-all`, images).pipe(map(data => data as Image[]));
  }

  public deleteImage(imageId: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/delete/${imageId}`).pipe(map(data => data as boolean));
  }

}
