import { Component } from '@angular/core';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public Editor = ClassicEditor;

  richText: string;

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
    this.richText = data;
  }

  constructor() {}

}
