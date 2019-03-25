import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeLink1(){
    document.getElementById('aboutLink').classList.add('active');
    document.getElementById('projectsLink').classList.remove('active');
    document.getElementById('contactLink').classList.remove('active');
    
  }

  changeLink2(){
    document.getElementById('projectsLink').classList.add('active');
    document.getElementById('aboutLink').classList.remove('active');
    document.getElementById('contactLink').classList.remove('active');
    
  }

  changeLink3(){
    document.getElementById('contactLink').classList.add('active');
    document.getElementById('projectsLink').classList.remove('active');
    document.getElementById('aboutLink').classList.remove('active');
  }

}
