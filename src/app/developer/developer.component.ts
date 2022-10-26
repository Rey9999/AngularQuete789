import { Component, OnInit, Input } from '@angular/core';
import { Developer } from '../models/developer';
import { Skill } from '../models/skill';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  ngOnInit(): void {}


  public devs:  Developer[];
  constructor() {
    this.devs = [
      new Developer('Carla', 'Smith', 20, 'male', 'je suis pas tres frais', [
        new Skill('Golazo', 'Inshallah', 'Un jour je mettrai une photo')]),
    ];
  }
}
