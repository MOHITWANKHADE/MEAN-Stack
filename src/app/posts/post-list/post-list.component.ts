import { Component } from "@angular/core";
import { PostCreateComponent } from "../post-create/post-create.component";

@Component({
    selector:'app-post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})
export class PostListComponent  
{
    posts = [];
}