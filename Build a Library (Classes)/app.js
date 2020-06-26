
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get checkedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        let totalRatings = 0
        for (let i = 0; i < this._ratings.length; i++) {
            totalRatings += this._ratings[i];
        }
        let ratingsAverage = totalRatings / this._ratings.length;
        return `The average rating for ${this._title} is ${ratingsAverage} Stars.`;
    }
    toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        if (rating <= 5) {
            this._ratings.push(rating);
        } else {
            console.log(`Please enter a rating between 0 and 5.`);
        }   
    }
};


class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
};

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
};

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
};



const harryPotter2 = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 251);
console.log(harryPotter2)

const theThing = new Movie('The Thing', 'John Carpenter', 109);
theThing.addRating(5)
theThing.addRating(5)
theThing.addRating(3)
theThing.addRating(4)
theThing.addRating(5)
console.log(theThing.getAverageRating());

const californication = new CD('Californication', 'Red Hot Chili Peppers', ['Around the World', 'Parallel Universe', 'Scar Tissue','Otherside']);
console.log(californication);
