import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from '../music.service';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-song-table',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Artist</th>
      <th>Album</th>
      <th>Release Date</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let song of songs$ | async">
        <td>{{ song.id }}</td>
        <td>{{ song.title }}</td>
        <td>{{ song.artist }}</td>
        <td>{{ song.album }}</td>
        <td>{{ song.releaseDate }}</td>
    </tr>
  </tbody>
</table>
  `,
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent {
  music : MusicService = inject(MusicService);
  songs$ = this.music.refetch.pipe(
    switchMap(() => this.music.getAllSongs())
  )
}
