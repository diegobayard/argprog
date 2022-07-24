import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  form: FormGroup
  closeResult = ''

  @Output() changeExperience: EventEmitter<any> = new EventEmitter()
  @Input() experience:any
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          company: '',
          logo: '',
          position: '',
          startDate: '',
          endDate: ''
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

  editExperience() {
    if (this.form.get("company")?.value != '') {
      this.experience.company = this.form.get("company")?.value
    }
    if (this.form.get("logo")?.value != '') {
      this.experience.logo = this.form.get("logo")?.value
    }
    if (this.form.get("position")?.value != '') {
      this.experience.position = this.form.get("position")?.value
    }
    if (this.form.get("startDate")?.value != '') {
      this.experience.startDate = 'Inicio: ' + this.form.get("startDate")?.value
    }
    if (this.form.get("endDate")?.value != '') {
      this.experience.endDate = 'Cese: ' + this.form.get("endDate")?.value
    }
    this.profileService.editExperience(this.experience).subscribe(() => {this.changeExperience.emit(this.experience), this.modalService.dismissAll()})
  }

}
