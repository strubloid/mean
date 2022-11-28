import { Component, OnDestroy, OnInit } from '@angular/core'
import { Post } from 'src/components/posts/post.model'
import { PostService } from 'src/components/posts/post.service'
import { Subscription } from "rxjs"

@Component({
    selector: 'post-list-component',
    templateUrl: './post.list.component.html',
    styleUrls: ['./post.list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    public posts : Post[] = []

    // creating the post subscription
    private postsSubscription = new Subscription();

    /**
     * By adding the public will be added already as variable.
     * @param postService
     */
    constructor (public postService : PostService) { }

    /**
     * This is the first function to run when a component
     * starts.
     */
    public ngOnInit() {
        this.posts = this.postService.getPosts();

        // this subscribe to the post update listener
        this.postsSubscription = this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {

            // update the value of posts when something happens
            this.posts = posts;
        });
    }

    /**
     * This will be running when the component is destroyed, so
     * this will avoid memory leak.
     */
    public ngOnDestroy() {
        this.postsSubscription.unsubscribe();
    }

}
