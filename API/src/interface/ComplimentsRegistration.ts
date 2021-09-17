export interface ICreateComplimentsRequest {
    user_sender: number,
    user_receiver: number,
    message: string,
    tag_id: number
}