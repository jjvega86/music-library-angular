import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrl : string = 'https://localhost:7010/api/songs'
  http = inject(HttpClient);

  refetchSubject = new BehaviorSubject<any>(null);

  get refetch() {
    return this.refetchSubject.asObservable();
  }


  getAllSongs() : Observable<any>{
    return this.http.get(this.baseUrl);
  }

  addNewSong(songInfo : {}){
    return this.http.post(this.baseUrl, songInfo).pipe(
      tap(() => this.refetchSubject.next(null)),
      catchError(err => {
        console.log(err)
        return EMPTY;
      })
    );
  }

  deleteSong(songId : number){  }

  editSong(songInfo : {}){}
}
