import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../interfaces/experience';
import { Person } from '../interfaces/person';
import { Project } from '../interfaces/project';
import { Skill } from '../interfaces/skill';
import { Study } from '../interfaces/study';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  API_URL: string = 'https://mighty-lowlands-81769.herokuapp.com/'

  constructor(private httpClient: HttpClient) { }

  // PERSON

  getPerson(): Observable<Person> {
    return this.httpClient.get<Person>(`${this.API_URL}/get-person`)
  }

  editBanner(banner: string) {
    return this.httpClient.put(`${this.API_URL}/edit-banner`, {}, {params:{banner: `${banner}`}})
  }

  editAvatar (avatar: string) {
    return this.httpClient.put(`${this.API_URL}/edit-avatar`, {}, {params:{avatar: `${avatar}`}})
  }

  editFullName(fullName: string) {
    return this.httpClient.put(`${this.API_URL}/edit-fullname`, {}, {params:{fullName: `${fullName}`}})
  }

  editTitle (title: string) {
    return this.httpClient.put(`${this.API_URL}/edit-title`, {}, {params:{title: `${title}`}})
  }

  editDomicile (domicile: string) {
    return this.httpClient.put(`${this.API_URL}/edit-domicile`, {}, {params:{domicile: `${domicile}`}})
  }

  editContact (contact: string) {
    return this.httpClient.put(`${this.API_URL}/edit-contact`, {}, {params:{contact: `${contact}`}})
  }

  editAbout (about: string) {
    return this.httpClient.put(`${this.API_URL}/edit-about`, {}, {params:{about: `${about}`}})
  }

  //EXPERIENCE

  getExperience(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(`${this.API_URL}/get-experience/${id}`)
  }

  saveExperience(experience: any) {
    return this.httpClient.post(`${this.API_URL}/new-experience`, experience)
  }

  deleteExperience(id: number) {
    return this.httpClient.delete(`${this.API_URL}/delete-experience/${id}`)
  }

  editExperience(experience: any) {
    return this.httpClient.put(`${this.API_URL}/edit-experience/${experience.id}`, experience)
  }

  //STUDY

  getStudy(id: number): Observable<Study> {
    return this.httpClient.get<Study>(`${this.API_URL}/get-study/${id}`)
  }

  saveStudy(study: any) {
    return this.httpClient.post(`${this.API_URL}/new-study`, study)
  }

  deleteStudy(id: number) {
    return this.httpClient.delete(`${this.API_URL}/delete-study/${id}`)
  }

  editStudy(study: any) {
    return this.httpClient.put(`${this.API_URL}/edit-study/${study.id}`, study)
  }

  // SKILLS

  getSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(`${this.API_URL}/get-skill/${id}`)
  }

  saveSkill(skill: any) {
    return this.httpClient.post(`${this.API_URL}/new-skill`, skill)
  }

  deleteSkill(id: number) {
    return this.httpClient.delete(`${this.API_URL}/delete-skill/${id}`)
  }

  editSkill(skill: any) {
    return this.httpClient.put(`${this.API_URL}/edit-skill/${skill.id}`, skill)
  }

  // PROJECTS

  getProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.API_URL}/get-project/${id}`)
  }

  saveProject(project: any) {
    return this.httpClient.post(`${this.API_URL}/new-project`, project)
  }

  deleteProject(id: number) {
    return this.httpClient.delete(`${this.API_URL}/delete-project/${id}`)
  }

  editProject(project: any) {
    return this.httpClient.put(`${this.API_URL}/edit-project/${project.id}`, project)
  }

}
