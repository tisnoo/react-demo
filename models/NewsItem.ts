export default class NewsItem {
    header: string;
    imageURL: string;
    body: string;
    key: string;
    author: string;

    constructor(header: string, imageURL: string, body:string, author:string, key: string){
        this.header = header;
        this.imageURL = imageURL;
        this.body = body;
        this.key = key;
        this.author = author;
    }
    

}