
export class Recipe {
    // constructor(
        public _id: string;
        public title: string;
        public timeForCook: number;
        public type: string;
        public addOns: string;
        public imageUrl: string;
        public caption: string;
       public ingredients: [
           {
            quantity: string,
            name: string,
            imageUrl: string
           },
           {
            quantity: string,
            name: string,
            imageUrl: string
           },
           {
            quantity: string,
            name: string,
            imageUrl: string
           },
           {
            quantity: string,
            name: string,
            imageUrl: string
           },
           {
            quantity: string,
            name: string,
            imageUrl: string
           }
       ];

    // ) {}
}

export class Ingredients {
    constructor(
          public urls: object,
    ) {}
}
