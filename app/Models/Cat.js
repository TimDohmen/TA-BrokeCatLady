export default class Cat {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}