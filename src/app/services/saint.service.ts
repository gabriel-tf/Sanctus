import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaintService {
  public PATH = 'saints/'

  constructor(public db: AngularFireDatabase) { }

  getAll() {
    return this.db.list(this.PATH)
      .snapshotChanges().pipe(
      map(actions => {
        return actions.map(s => ({ key: s.payload.key, ...s.payload.val() }));
      }));
  }

  getByDayMonth(dayMonth: string) {
    return this.db.list(this.PATH, ref => ref.orderByChild('dayMonth').equalTo(dayMonth))
      .snapshotChanges().pipe(
      map(actions => {
        return actions.map(s => ({ key: s.payload.key, ...s.payload.val() }));
      }));
  }
}
