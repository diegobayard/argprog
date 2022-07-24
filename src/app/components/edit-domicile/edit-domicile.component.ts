import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-domicile',
  templateUrl: './edit-domicile.component.html',
  styleUrls: ['./edit-domicile.component.css']
})
export class EditDomicileComponent implements OnInit {

  form: FormGroup
  closeResult = ''

  @Output() changeDomicile: EventEmitter<any> = new EventEmitter()
  @Input() domicile:any
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          domicile: ''
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

  saveDomicile() {
    this.domicile = this.form.get("domicile")?.value
    this.profileService.editDomicile(this.domicile).subscribe(() => {this.changeDomicile.emit(this.domicile), this.modalService.dismissAll()})
  }

}