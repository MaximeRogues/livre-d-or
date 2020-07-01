export class Message {
    id: number;
    titre: string;
    description: string;
    image: string;
    dateAjout: Date;

    constructor(id: number = null, titre:string = null, description: string = null, image: string = null, dateAjout: Date = new Date()) {
        this.id = id
        this.titre = titre
        this.description = description
        this.image = image
        this.dateAjout = dateAjout
    }
}
