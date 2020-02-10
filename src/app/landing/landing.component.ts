import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  /**
   * @var users
   * @description Storing all the users fetched from Ajax call
   */
  users : any;

  /**
   * @var displayedColumns
   * @description To show which columns to display on the table
   */
  displayedColumns: string[] = ['login','url','repos_url'];

  constructor(public apiService: ApiServiceService, private router: Router) {  }

  ngOnInit() {

    /**
     * Service call to fetch all the users
     */
    this.apiService.getAllUsers()
      .subscribe((resp: any) => {
        this.users = new MatTableDataSource(resp);
      });
  }

  /**
   * Method to filter the user based on search
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Method to gets the list of repos associated with username in new browser tab
   * @param row
   */
  getUser(row: any) {
    window.open(`/users/`+row.login, '_blank');
  }

}
