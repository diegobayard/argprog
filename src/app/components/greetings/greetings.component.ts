import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent implements OnInit {

  email:any

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email')
  }

}
