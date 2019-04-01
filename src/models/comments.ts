
export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export const convertPayloadToModel = (payload: any) => {
    const {
        postId,
        id,
        name,
        email,
        body,
    } = payload;
    return <IComment> {
        postId,
        id,
        name,
        email,
        body
    };
};
