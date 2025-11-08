import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Posts } from './posts/posts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Posts],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'first_NGRX';
}
