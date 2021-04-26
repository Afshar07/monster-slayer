const game = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      winner: null,
      currentRound: 0,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    playerAttack() {
      const attackValue = randomValue(8, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.currentRound++;
    },
    monsterAttack() {
      const attackValue = randomValue(10, 15);
      this.playerHealth -= attackValue;
    },
    specialAttack() {
      const attackValue = randomValue(15, 25);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
      this.currentRound++;
    },
    playerHeal() {
      const healValue = randomValue(8, 20);
      this.playerHealth += healValue;
      this.monsterAttack();
      this.currentRound++;
    },
  },
  computed: {
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: "0" };
      }
      return { width: this.playerHealth + "%" };
    },
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: "0" };
      }
      return { width: this.monsterHealth + "%" };
    },
    mayUseSpecialAtt() {
      return this.currentRound % 3 !== 0;
    },
  },
});
game.mount("#game");

const randomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
