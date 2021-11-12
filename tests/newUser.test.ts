import posts from 'resources/posts/client';
import { Post } from 'resources/posts/types';

describe('a new user', () => {
    it('should not have any posts', async () => {
        const userId = 11; // there are 10 users in the app
        const response = await posts.getBy({ userId });
        expect(response.statusCode).toEqual(200);
        expect((response.body as Post[]).length).toEqual(0);
    });
});
