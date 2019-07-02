import {Injectable} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ConfirmationModalComponent} from '../confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {
  private bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  public showConfirm(title: string, text: string) {
    this.bsModalRef = this.modalService.show(ConfirmationModalComponent, {
      class: 'modal-md',
      keyboard: false,
      ignoreBackdropClick: true
    });
    this.bsModalRef.content.title = title;
    this.bsModalRef.content.body = text;
    return this.bsModalRef;
  }
}
