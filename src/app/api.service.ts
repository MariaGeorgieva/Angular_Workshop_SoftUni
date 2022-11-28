import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //create http requests

  // localhost:3000/api/themes
  loadThemes() {

    return this.httpClient.get<ITheme[]>(`${apiURL}/themes`);
  }


  //(https://localhost:3000/api/posts?limit=5
  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit ? `\?limit=${limit}` : ''}`);
  }
}
