// este es un componente, no olvidar
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  // @Input() loggedInUser: string | undefined;
  
  loggedInUser:any = null;
  constructor() { }

  ngOnInit() {
    this.loggedInUser = localStorage.getItem('loggedInUser') || 'Usuario';
  }

}
