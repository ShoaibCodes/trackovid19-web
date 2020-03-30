import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-confirm-delete-user-modal',
  templateUrl: './confirm-delete-user-modal.component.html',
  styleUrls: ['./confirm-delete-user-modal.component.scss'],
})
export class ConfirmDeleteUserModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() toggleModal: Function;

  closable = true;

  public closeCallback: Function;

  constructor(private sanitizer: DomSanitizer) {
    this.closeCallback = this.close.bind(this);
  }

  ngOnInit(): void {}

  public close() {
    this.toggleModal();
  }

  public deleteUser() {
    // call user delete
    // rediret to homepage????
  }
}
