import { Component } from "@angular/core";
@Component({
    selector: 'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls: ['./post-create.compoment.css']
})

export class PostCreateComponent{
    newPost = 'Some content was available here';
    enteredValue = '';
    OnAddPost()
    {
        this.newPost = this.enteredValue;
    }
}