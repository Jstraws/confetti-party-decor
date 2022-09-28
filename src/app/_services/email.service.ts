import {Injectable} from '@angular/core';
import {Email} from '../_models/email';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'https://confetti-email-service-7epag.ondigitalocean.app';

  constructor(private http: HttpClient) {
  }

  public sendEmail(email: Email): Observable<boolean> {
    const url = `${this.baseUrl}/email`;
    return this.http.post(url, email).pipe(map(data => data as boolean));
  }
}
