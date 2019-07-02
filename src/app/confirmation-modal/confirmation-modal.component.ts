import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  public onClose: BehaviorSubject<boolean>;
  public title: string;
  public body: string;

  constructor(private _bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new BehaviorSubject<boolean>(false);
  }

  onCancel() {
    this.onClose.next(false);
    this._bsModalRef.hide();
  }

  onConfirm() {
    this._bsModalRef.hide();
    this.onClose.next(true);
  }
}
