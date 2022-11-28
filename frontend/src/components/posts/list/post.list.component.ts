import { Component } from '@angular/core'

@Component({
    selector: 'post-list-component',
    templateUrl: './post.list.component.html',
    styleUrls: ['./post.list.component.scss']
})
export class PostListComponent {

    // public posts = [
    //     { title: 'First Post', content : 'This is the 1 post'},
    //     { title: 'Second Post', content : 'This is the 2 post'},
    //     { title: 'Third Post', content : 'This is the 3 post'},
    // ]

    public posts = [];


}
