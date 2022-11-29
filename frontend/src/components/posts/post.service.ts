import { Post } from 'src/components/posts/post.model'
import { Injectable } from '@angular/core'
import { Subject } from "rxjs"
import { map } from "rxjs/operators"
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
        //pipe allows we change the _id to id
        this.http.get<{ message : string; posts : any }>(
            'http://localhost:3000/api/posts'
        ).pipe(map((postData) => {
            return postData.posts.map( post => {
                return {
                    title: post.title,
                    content: post.content,
                    id: post._id
                }
            })
        }))
        .subscribe((formattedPosts) => {
            this.posts = formattedPosts;
            this.postsUpdated.next([...this.posts]);
        });
    }

    /**
     * This will be responsible to delete a post.
     */
    deletePost = (postId : string) => {
        this.http.delete(`http://localhost:3000/api/posts/${postId}`)
            .subscribe(() => {

                // now we clean the data after delete
                const updatedPosts = this.posts.filter( post  => post.id !== postId);
                this.posts = updatedPosts;
                this.postsUpdated.next([...this.posts]);
            })

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

        const post : Post = { id : null , title: title, content: content };

        this.http.post<{ message: string}>('http://localhost:3000/api/posts', post)
            .subscribe((responseData) => {
                console.log(responseData.message);
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });

    }
}