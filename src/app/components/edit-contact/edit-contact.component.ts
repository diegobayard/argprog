import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  form: FormGroup
  closeResult = ''

  @Output() changeContact: EventEmitter<any> = new EventEmitter()
  @Input() contact:any
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          contact: ''
        }
      )
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveContact() {
    this.contact = this.form.get("contact")?.value
    this.profileService.editContact(this.contact).subscribe(() => {this.changeContact.emit(this.contact), this.modalService.dismissAll()})
  }

}
