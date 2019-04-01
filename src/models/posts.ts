export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const convertPayloadToModel = (payload: any) => {
    const {
        userId,
        id,
        title,
        body,
    } = payload;
    return <IPost> {
        userId,
        id,
        title,
        body,
    };
};
