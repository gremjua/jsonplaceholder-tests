/**
 * Comment data type, used by the comments resource.
 */
export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
