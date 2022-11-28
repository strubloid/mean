import { Component } from '@angular/core';
import { Post } from 'src/components/posts/post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    // stored saved posts
    public storedPosts : Post[] = [];

    /**
     * This will be the function to add a post.
     * @param posts
     */
    public onPostAdded(posts : Post){
        this.storedPosts.push(posts)
    }
}
