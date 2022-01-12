export class Album {
    id?: string;
    title: string;
    artist: string;
    releaseDate: string;
    cover: string;
    date: string;

    constructor() {
        this.title = '';
        this.artist = '';
        // for releaseDate we use the current date 
        // get the selected date in the input
        this.releaseDate = new Date().toISOString();
        this.cover = '';
        this.date = new Date().toLocaleDateString();
    }
}