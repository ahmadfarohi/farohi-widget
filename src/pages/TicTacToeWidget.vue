<template>
  <div class="container">
    <h1 class="z">Tic Tac Toe</h1>
    <div class="board">
      <div class="row" v-for="(row, rowIndex) in rows" :key="rowIndex">
        <div class="cell" v-for="(cell, colIndex) in row" :key="colIndex" @click="makeMove(rowIndex, colIndex)">
          {{ cell }}
        </div>
      </div>
    </div>
    <button class="k" @click="resetBoard">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [[null, null, null], [null, null, null], [null, null, null]],
      currentPlayer: 'X',
      gameOver: false
    };
  },
  methods: {

    BackToHome() {
    this.$router.push('/home')
    },

    makeMove(rowIndex, colIndex) {
      if (!this.gameOver && !this.rows[rowIndex][colIndex]) {
        this.rows[rowIndex][colIndex] = this.currentPlayer;
        if (this.checkWin(this.currentPlayer)) {
          alert(this.currentPlayer + ' wins!');
          this.gameOver = true;
        } else if (this.checkDraw()) {
          alert('It\'s a draw!');
          this.gameOver = true;
        } else {
          this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
        }
      }
    },
    checkWin(player) {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
      ];
      return winningCombinations.some(combination => {
        return combination.every(index => {
          const [rowIndex, colIndex] = this.getCellPosition(index);
          return this.rows[rowIndex][colIndex] === player;
        });
      });
    },
    checkDraw() {
      return this.rows.every(row => row.every(cell => cell !== null));
    },
    resetBoard() {
      this.rows = [[null, null, null], [null, null, null], [null, null, null]];
      this.currentPlayer = 'X';
      this.gameOver = false;
    },
    getCellPosition(cellIndex) {
      const rowIndex = Math.floor(cellIndex / 3);
      const colIndex = cellIndex % 3;
      return [rowIndex, colIndex];
    }
  }
};
</script>

<style>
.z {
  color: black;
}

.container {
  background-image: url('../assets/tictactoe.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.k {
  align-items: center;
  margin-top: 20px;
  background-color: lime;
  padding: 10px;
  border: none;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
}

.k:hover {
  background-color:rgb(88, 255, 88);
}

.board {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
}

.row {
  display: flex;
  color: black;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: 1px solid black;
  font-size: 36px;
  cursor: pointer;
}

button {
  margin-top: 20px;
}
</style>