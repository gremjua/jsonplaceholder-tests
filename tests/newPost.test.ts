import comments from 'resources/comments/client';
import { Comment } from 'resources/comments/types';

describe('a new post', () => {
    it('should not have any comments', async () => {
        const postId = 101; // there are 101 posts in the app
        const response = await comments.getBy({ postId });
        expect(response.statusCode).toEqual(200);
        expect((response.body as Comment[]).length).toEqual(0);
    });
});
