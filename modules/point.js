class Point {
    constructor (...values) {
        this.coords = values;
    }

    distance (point) {
        return Math.sqrt(this.coords.reduce((acc, val, ind) => acc + (val - point.coords[ind]) * (val - point.coords[ind]), 0));
    }

    add (point) {
        return new Point(this.coords.map((val, ind) => val + point.coords[ind]));
    }
    
    sub (point) {
        return new Point(this.coords.map((val, ind) => val - point.coords[ind]));
    }

    to_str () {
        return `(${this.coords})`;
    }
}

export default Point;