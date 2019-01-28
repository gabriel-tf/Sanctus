import { Component, OnInit } from '@angular/core';
import { SaintService } from './../../services/saint.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-saint',
  templateUrl: 'saint.page.html',
  styleUrls: ['saint.page.scss'],
})

export class SaintPage {
  public loadComplete = false;
  public saints: Observable<any> = null;
  public dayMonth: string;
  public lineNumbers: any[] = [];
  public countLines: any[] = [];
  
  constructor(private service: SaintService) {
    
    var dateObj = new Date();
    var month = ('0' + dateObj.getMonth() + 1).slice(-2); //months from 01-12
    var day = ('0' + dateObj.getDate()).slice(-2);
    this.dayMonth = day + "/" + month;

    //this.service.getByDayMonth("27/01").subscribe(val => console.log(val.length));
    this.saints = this.service.getByDayMonth(this.dayMonth);
  }

  ngOnInit() {
    setTimeout(() => {
      this.getCounter();
      this.getNextLine();
      this.loadComplete = true;
    }, 5000);
  }

  doRefresh(refresher) {
    this.getNextLine();
    setTimeout(() => {
      refresher.target.complete();
    }, 300);
  }

  checkNextLine(lineIndex, saintIndex) {
    if (lineIndex == this.lineNumbers[saintIndex])
      return true;
    else
      return false;
  }

  //creates counter for each saint
  getCounter() {
    this.saints.subscribe(val => {
      this.countLines = [];
      for (var i = 0; i < val.length; i++) {
        this.countLines.push(0);
      }
    });
  }

  //gets next number line for each saint
  getNextLine() {
    this.saints.subscribe(val => {
      this.lineNumbers = [];
      for (var i = 0; i < val.length; i++) {
        if (val[i].hasOwnProperty('lines')) {
          var length = val[i].lines.length;

          //uses -1 for the array position
          if (this.countLines[i] == length - 1) {
            this.lineNumbers.push(this.countLines[i]);
            this.countLines[i] = 0;
          }
          else {
            this.lineNumbers.push(this.countLines[i]);
            this.countLines[i] = this.countLines[i] + 1;
          }
        } else {
          this.lineNumbers.push(0);
        }
      }
    });
  }

}
