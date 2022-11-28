import { Component, Input } from '@angular/core'
import { Post } from 'src/components/posts/post.model'

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

    @Input() public posts : Post[] = [];


}
