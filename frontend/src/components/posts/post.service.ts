import { Post } from 'src/components/posts/post.model'
import { Injectable } from '@angular/core'
import { Subject } from "rxjs"
import { HttpClient } from '@angular/common/http'

interface MessagePost {
    message : string;
    posts : Post[];
}

@Injectable({
    providedIn: 'root'
})
export class PostService {

    // variable that will contain all posts.
    private posts : Post[] = []
    private postsUpdated = new Subject<Post[]>();

    constructor ( private http : HttpClient) {}
    /**
     * This will return all posts.
     */
    getPosts = () => {

        this.http.get<MessagePost>('http://localhost:3000/api/posts')
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });

    }

    /**
     * Listener of posts when is updated.
     */
    getPostsUpdateListener(){
        return this.postsUpdated.asObservable();
    }

    /**
     * If you build the object, you can use this function.
     * @param post
     */
    setPost = (post) => this.posts = [...this.posts, post]

    /**
     * This will be adding a post, by title and
     * content passed into this function.
     *
     * @param title
     * @param content
     */
    addPost = (title : string, content : string) => {
        const post : Post = { id : null , title: title, content: content }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}