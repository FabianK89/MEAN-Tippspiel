import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { GroupService } from '../../../services/group.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  user;
  name: String;

  constructor(private authService: AuthService,
              private groupService: GroupService,
              private flashMessagesService: FlashMessagesService,
              private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onCreateGroupSubmit() {
    const group = {
      name: this.name,
      creator: this.user._id,
      member: [this.user._id]
    };

    this.groupService.createGroup(group).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/groups']);
      } else {
        this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-error', timeout: 3000 });
        // this.router.navigate(['/groups/create']);
      }
    });
  }
}
