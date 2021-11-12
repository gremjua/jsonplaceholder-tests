import * as emailValidator from 'email-validator';

import comments from 'resources/comments/client';
import { Comment } from 'resources/comments/types';
import posts from 'resources/posts/client';
import { Post } from 'resources/posts/types';
import users from 'resources/users/client';
import { User } from 'resources/users/types';

describe('comments on users posts', () => {
    it('should have valid emails', async () => {
        let response = await users.getBy({
            username: 'Delphine',
        });
        expect(response.statusCode).toEqual(200);
        const user = response.body as User;

        response = await posts.getBy({ userId: user.id });
        expect(response.statusCode).toEqual(200);
        const postsFromUser = response.body as Post[];

        return Promise.all(
            postsFromUser.map(async (post) => {
                const res = await comments.getBy({ postId: post.id });
                expect(res.statusCode).toEqual(200);
                const commentsOnPost = res.body as Comment[];
                commentsOnPost.forEach((comment) => {
                    const msg = `Failed to validate ${comment.email}`;
                    expect([emailValidator.validate(comment.email), msg]).toEqual([true, msg]);
                });
                return true;
            })
        ).catch((error) => {
            throw new Error(`Failed validating comments from each post: ${error as string}`);
        });
    });
});
