import { Component } from '@angular/core'
import { Post } from 'src/components/posts/post.model'
import { NgForm } from '@angular/forms'
import { PostService } from 'src/components/posts/post.service'

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {

    constructor (public postService : PostService) { }

    /**
     * This is the main action of a post
     * @param form
     */
    onAddPost = (form : NgForm) => {

        // validations
        if(form.invalid){
            return;
        }

        // after we get the post, we must emit with the data in it
        this.postService.addPost(form.value.title, form.value.content);

        // this will clean the form afterwards
        form.resetForm();

    }
}
