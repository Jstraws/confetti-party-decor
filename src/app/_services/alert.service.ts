import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertMessage: BehaviorSubject<string>;

  constructor() {
    this.alertMessage = new BehaviorSubject<string>('');
  }

  public setErrorMessage(message: string) {
    this.alertMessage.next(message);
  }
}
