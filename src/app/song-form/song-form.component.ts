import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MusicService } from '../music.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
      <section class="listing-apply">
      <h2 class="section-heading">Add a Song to the Library!</h2>
      <form [formGroup]="songForm" (submit)="addSong()">
        <label for="first-name">Name</label>
        <input id="title" type="text" formControlName="title">

        <label for="artist">Artist</label>
        <input id="artist" type="text" formControlName="artist">

        <label for="album">Album</label>
        <input id="album" type="text" formControlName="album">

        <label for="genre">Genre</label>
        <input id="genre" type="text" formControlName="genre">

        <label for="releaseDate">Release Date</label>
        <input id="releaseDate" type="date" formControlName="releaseDate">

        <button type="submit" class="primary">Add Song</button>
      </form>
    </section>
  `,
  styleUrls: ['./song-form.component.css']
})
export class SongFormComponent {
  music : MusicService = inject(MusicService);
  songForm = new FormGroup({
    title: new FormControl(""),
    artist: new FormControl(""),
    album: new FormControl(""),
    genre: new FormControl(""),
    releaseDate: new FormControl(""),
  })

 addSong(){
  // TODO: make call to music service to POST song information
  console.log('addsong fired!', this.songForm.value)
  this.music.addNewSong(this.songForm.value).subscribe();

 }

}
