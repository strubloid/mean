import { Component, EventEmitter, Output } from '@angular/core'
import { Post } from 'src/components/posts/post.model'

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

    // first entered data
    public enteredContent = ''
    public enteredTitle = ''

    // This will trigger the action of create post
    @Output() public eventCreatePost = new EventEmitter<Post>();

    cleanData = () => {
        this.enteredTitle = '';
        this.enteredContent = ''
    }

    // This is the main action of a post
    onAddPost = () => {

        const post : Post = {
            title : this.enteredTitle, content: this.enteredContent
        };

        // after we get the post, we must emit with the data in it
        this.eventCreatePost.emit(post);

        // this will clean the form afterwards
        this.cleanData();

    }
}
