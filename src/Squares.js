"use strict"

class Game {
    constructor() {
        this.squares = []
    }
}


class Square {
    constructor(row, column, value) {
        this.row = row
        this.column = column
        this.value = value
        this.hasMerged = false
    }
}


