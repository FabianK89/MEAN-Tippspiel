import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  user;

  constructor(private authService: AuthService, private groupService: GroupService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    console.log(this.user);

    this.groupService.findGroupsForUser(this.user.id).subscribe();
  }

}
