import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Study } from 'src/app/interfaces/study';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-new-study',
  templateUrl: './new-study.component.html',
  styleUrls: ['./new-study.component.css']
})
export class NewStudyComponent implements OnInit {

  form: FormGroup
  closeResult = ''
  study:Study = Object()

  @Output() newStudy: EventEmitter<any> = new EventEmitter()
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          institution: '',
          logo: '',
          name: '',
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

  addStudy() {
    this.study.institution = this.form.get("institution")!.value
    this.study.logo = this.form.get("logo")?.value
    this.study.name = this.form.get("name")?.value
    if(this.form.get("startDate")?.value != '') {
      this.study.startDate = 'Inicio: ' + this.form.get("startDate")?.value
    }
    if(this.form.get("endDate")?.value != '') {
      this.study.endDate = 'Finalización: ' + this.form.get("endDate")?.value
    }
    this.profileService.saveStudy(this.study).subscribe(() => {this.newStudy.emit(this.study), this.modalService.dismissAll()})
  }

}
