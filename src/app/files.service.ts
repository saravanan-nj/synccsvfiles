import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  mainFile: File;
  sourceFile: File;

  constructor() { }

  saveMainFile(mainFile: File) {
      this.mainFile = mainFile;
      console.log(mainFile);
  }

  saveSourceFile(sourceFile: File) {
      this.sourceFile = sourceFile;
      console.log(sourceFile);
  }

  getMainFile(): File {
      return this.mainFile;
  }

  getSourceFile(): File {
      return this.sourceFile;
  }
}
