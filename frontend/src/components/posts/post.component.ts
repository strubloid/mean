import { Component } from '@angular/core'

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

    public postData = 'No Content'

    // This is the main action of a post
    onAddPost = (postInput : HTMLTextAreaElement) => {

        this.postData = postInput.value;

    }
}
