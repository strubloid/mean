import { Component } from '@angular/core'

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent {

    // first entered data
    public enteredValue = ''

    // value that we want to push if enteredValue is valid.
    public postData = 'No Content'


    // This is the main action of a post
    onAddPost = () => {

        this.postData = this.enteredValue;

    }
}
