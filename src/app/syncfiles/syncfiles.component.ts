import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';
import { csvToJson } from './csv_to_json';

@Component({
  selector: 'app-syncfiles',
  templateUrl: './syncfiles.component.html',
  styleUrls: ['./syncfiles.component.css']
})
export class SyncfilesComponent implements OnInit {

  sourceTable: Array<Object> = null; 
  mainTable: Array<Object> = null;
  combinedList: Array<any> = null;
  currentRecords: any = null;

  constructor(private filesservice: FilesService) { 
      this.filesservice = filesservice;
  }

  ngOnInit(): void {
      Promise.all([
          this.initializeMainTable(),
          this.initializeSourceTable()
      ]).then(() => {
          this.initializeCombinedList();
      });
  }

  async initializeMainTable() {
      let sourceFile = this.filesservice.getSourceFile();
      this.sourceTable = await csvToJson.csvToJson(sourceFile);
  }
 
  async initializeSourceTable() {
      let mainFile = this.filesservice.getMainFile();
      this.mainTable = await csvToJson.csvToJson(mainFile);
  }

  initializeCombinedList() {
      this.combinedList = this.sourceTable.map((row, id) => {
          let combinedObject = {
              source: {
                  Name: row['Name'],
                  id: id
              },
              main: null
          }
          return combinedObject;
      });
      this.updateCurrentRecords(0);
      
  }

  updateCurrentRecords(id) {
      let combinedRecord = this.combinedList[id]
      let currentSourceRecord = this.sourceTable[combinedRecord.source.id];
      let currentMainRecord;
      if (combinedRecord.main !== null) {
          currentMainRecord = this.mainTable[combinedRecord.main.id];
      }
      else {
          currentMainRecord = null;
      }

      this.currentRecords = {
          source: currentSourceRecord,
          main: currentMainRecord
      }
  }

}
