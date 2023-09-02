import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SongTableComponent } from './song-table/song-table.component';
import { SongFormComponent } from './song-form/song-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HeaderComponent, SongTableComponent, SongFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-library-angular';
}
