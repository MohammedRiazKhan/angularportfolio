import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mohammed Riaz Khan';

  routes = [
    {
      name: "About Me",
      url: "about"
    },
    {
      name: "Projects",
      url: "projects"
    },
    {
      name: "Contact Me",
      url: "contact"
    }
  ];

}
