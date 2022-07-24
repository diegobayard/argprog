import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css'],
})
export class EditNameComponent implements OnInit {

  form: FormGroup
  fullName: string = ''
  closeResult = ''

  @Output() changeName: EventEmitter<any> = new EventEmitter()
  @Input() name:any
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          fullName: ''
        }
      )
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
    })
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  saveName() {
    this.fullName = this.form.get("fullName")?.value
    this.changeName.emit(this.fullName)
    this.profileService.editFullName(this.fullName).subscribe(() => {this.modalService.dismissAll()})
  }

}
