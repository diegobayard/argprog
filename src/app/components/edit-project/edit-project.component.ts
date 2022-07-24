import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  form: FormGroup
  closeResult = ''

  @Output() changeProject: EventEmitter<any> = new EventEmitter()
  @Input() project:any
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          name: '',
          description: '',
          url: ''
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

  editProject() {
    if (this.form.get("name")?.value != '') {
      this.project.name = this.form.get("name")?.value
    }
    if (this.form.get("description")?.value != '') {
      this.project.description = this.form.get("description")?.value
    }
    if (this.form.get("url")?.value != '') {
      this.project.url = this.form.get("url")?.value
    }
    this.profileService.editProject(this.project).subscribe(() => {this.changeProject.emit(this.project), this.modalService.dismissAll()})
  }

}
