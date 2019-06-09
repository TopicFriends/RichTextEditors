import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {UploadAdapter} from './UploadAdapter';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Editor = ClassicEditor;

  richText: string;

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
    this.richText = data;
  }

}
