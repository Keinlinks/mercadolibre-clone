import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean = true
  currentUser: string = "Usuario"
  constructor(private service: UserService) {
    service.login$.subscribe(res => {
      this.login = res
      this.currentUser = service.getCurrentUser().name.split("@")[0]
    })

  }

  ngOnInit(): void { }
}
