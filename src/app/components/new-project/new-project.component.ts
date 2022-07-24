import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/interfaces/project';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  form: FormGroup
  closeResult = ''
  project:Project = Object()

  @Output() newProject: EventEmitter<any> = new EventEmitter()
  constructor(private modalService: NgbModal, private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group
      (
        {
          name: '',
          url: '',
          description: ''
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

  addProject() {
    this.project.name = this.form.get("name")!.value
    this.project.url = this.form.get("url")?.value
    this.project.description = this.form.get("description")?.value
    this.profileService.saveProject(this.project).subscribe(() => {this.newProject.emit(this.project), this.modalService.dismissAll()})
  }

}
