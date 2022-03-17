import { Output } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Profile } from '../profile';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  profiles= new Profile(1,'','','','','');
  @Output() addProfile  = new EventEmitter<Profile>();
  updateProfile(){
    this.addProfile.emit(this.profiles);
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
