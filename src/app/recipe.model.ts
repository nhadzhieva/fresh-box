
export class Recipe {
    constructor(
        public title: string,
        public timeForCook: number,
        public type: string,
        public addOns: string,
        public imageUrl = '',
        public caption: string,
        public id: number,
        // public ingredients: {
        //     url: '',
        //     caption: ''
        // },

    ) {}
}

export class Ingredients {
    constructor(
          public urls: object,
    ) {}
}
