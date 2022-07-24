import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  person:Person = Object()

  constructor(private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.person = this.route.snapshot.data['person']
  }

  deleteExperience(id:number, i:any) {
    this.profileService.deleteExperience(id).subscribe(() => {this.reLoad()})
  }

  deleteStudy(id:number) {
    this.profileService.deleteStudy(id).subscribe(() => {this.reLoad()})
  }

  deleteSkill(id:number) {
    this.profileService.deleteSkill(id).subscribe(() => {this.reLoad()})
  }

  deleteProject(id:number) {
    this.profileService.deleteProject(id).subscribe(() => {this.reLoad()})
  }

  reLoad():void {
    window.location.reload()
  }

}
