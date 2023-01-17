export class Game{
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = []
    public currentPlayer:number = 0;
    public elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

    constructor(){
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i)
            this.stack.push('clubs_' + i)
            this.stack.push('hearts_' + i)
            this.stack.push('diamonds_' + i)
        }
    
        this.shuffleStack();
    }

    shuffleStack(): void {
        for (let i = this.stack.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.stack[i], this.stack[j]] = [this.stack[j], this.stack[i]];
        }
    }
}

