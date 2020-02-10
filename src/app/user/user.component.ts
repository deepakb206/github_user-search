import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /**
   * @var repos
   * @description To get the list of repositories associated with username
   */
  repos: any;

  /**
   * @var displayedColumns
   * @description To show which columns to display on the table
   */
  displayedColumns: string[] = ['name','full_name','html_url'];

  constructor(public apiService: ApiServiceService) { }

  ngOnInit() {

    /**
     * Service call to fetch all the repos associated with the user
     * Getting the username from URL
     */
    this.apiService.getReposOfUser(location.pathname)
      .subscribe((resp: any) => {
        this.repos = resp;
    });

  }

}
