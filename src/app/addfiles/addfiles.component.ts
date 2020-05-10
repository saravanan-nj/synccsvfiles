import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'app-addfiles',
  templateUrl: './addfiles.component.html',
  styleUrls: ['./addfiles.component.css']
})
export class AddfilesComponent implements OnInit {

  constructor(private filesService: FilesService) { 
      this.filesService = filesService;
  }

  ngOnInit(): void {
  }

  setSourceFile(files: FileList): void {
      let sourceFile: File = files[0];
      this.filesService.saveSourceFile(sourceFile);
  }

  setMainFile(files: FileList): void {
      let mainFile: File = files[0];
      this.filesService.saveMainFile(mainFile);
  }

}
