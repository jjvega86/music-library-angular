import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
      <section class="listing-apply">
      <h2 class="section-heading">Add a Song to the Library!</h2>
      <form [formGroup]="songForm" (submit)="addSong">
        <label for="first-name">Name</label>
        <input id="name" type="text" formControlName="name">

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
  songForm = new FormGroup({
    name: new FormControl(""),
    artist: new FormControl(""),
    album: new FormControl(""),
    genre: new FormControl(""),
    releaseDate: new FormControl(""),
  })

 addSong(){
  // TODO: make call to music service to POST song information

 }

}
