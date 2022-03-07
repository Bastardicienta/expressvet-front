import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  router: Router
  constructor(router: Router) {
    this.router = router
   }

  ngOnInit(): void {
  }

  onClickForm(){
    this.router.navigateByUrl("/form")
  }

  onClickLogin(){
    this.router.navigateByUrl("/login")
  }
}
