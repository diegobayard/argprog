import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from 'src/app/interfaces/experience';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  form: FormGroup
  closeResult = ''
  experience:Experience = Object()

  @Output() newExperience: EventEmitter<any> = new EventEmitter()
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

  addExperience() {
    this.experience.company = this.form.get("company")!.value
    this.experience.logo = this.form.get("logo")?.value
    this.experience.position = this.form.get("position")?.value
    if(this.form.get("startDate")?.value != '') {
      this.experience.startDate = 'Inicio: ' + this.form.get("startDate")?.value
    }
    if(this.form.get("endDate")?.value) {
      this.experience.endDate = 'Cese: ' + this.form.get("endDate")?.value
    }
    this.profileService.saveExperience(this.experience).subscribe(() => {this.newExperience.emit(this.experience), this.modalService.dismissAll()})
  }

}
