import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'syncfile';
  sourceFile: File = null;
  mainFile: File = null;

  onSourceFileChange(sourceFile: File) {
      this.sourceFile = sourceFile;
      console.log(sourceFile);
  }

  onMainFileChange(mainFile: File) {
      this.mainFile = mainFile;
      console.log(mainFile);
  }
}
