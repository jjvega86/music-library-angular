import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-song-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './song-form.component.html',
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
