import { Component, OnInit } from '@angular/core';

import { GithubService } from './../../compartilhado/services/github/github.service';
import { Repository } from './models/repository';

@Component({
  selector: 'app-app-github',
  templateUrl: './app-github.component.html',
  styleUrls: ['./app-github.component.scss']
})
export class AppGithubComponent implements OnInit {

  username: string = '';
  repositories: Repository[] = [];
  loading: boolean = false;
  error: boolean = false;

  getUserRepositories() {
    if (this.username.length > 0) {
      this.loading = true;
      this.error = false;
      this.githubService.getUserRepositories(this.username).subscribe({
        next: (data) => {
          this.repositories = data,
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
          this.error = true;
          //instrução para limpar a exibição da lista anterior, caso a nova busca retorne erro.
          this.repositories = [];
        },
      });
    }
  }


  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

}
