import { Component, OnInit } from '@angular/core'
import { Post } from 'src/components/posts/post.model'
import { NgForm } from '@angular/forms'
import { PostService } from 'src/components/posts/post.service'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public post : Post
    private mode = 'create'
    private postId : string

    constructor (public postService : PostService, public route : ActivatedRoute) { }

    /**
     * Starting the component.
     */
    ngOnInit () {
        // as route are observable we can subscribe to it
        this.route.paramMap.subscribe((paramMap : ParamMap) => {

            // this will check if exist a postId and if does will be setting to edit and the correct value
            if (paramMap.has('postId')) {
                this.mode = 'edit'
                this.postId = paramMap.get('postId')

                // loading the post
                this.postService.getPost(this.postId).subscribe(postData => {
                    this.post = { id: postData._id, title: postData.title, content: postData.content }
                })

            } else {
                this.mode = 'create'
                this.postId = null
            }
        })
    }

    /**
     * This is the main action of a post
     * @param form
     */
    onSavePost = (form : NgForm) => {

        // validations
        if (form.invalid) {
            return
        }

        // this will check if we are creating or editing a post
        if (this.mode === 'create') {

            // after we get the post, we must emit with the data in it
            this.postService.addPost(form.value.title, form.value.content)
            // this will clean the form afterwards
            form.resetForm()

        } else {
            this.postService.updatePost(this.postId, form.value.title, form.value.content)
        }
    }
}
