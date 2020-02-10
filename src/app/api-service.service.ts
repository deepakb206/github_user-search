import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Method that calls github url to fetch the list of all users from `https://api.github.com/users`
   * Simple get call
   */
  getAllUsers() {
    const response = this.httpClient.get(environment.githubUrl + environment.usersUrl);
    return response;
  }

  /**
   * Method to fetch all the repos associated with the username from `https://api.github.com/users/{{login}}/repos`
   * Simple get call
   */
  getReposOfUser(userUrl: string) {
    const response = this.httpClient.get(environment.githubUrl + userUrl + environment.repos);
    return response;
  }

}
