const game = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    playerAttack() {
      const attackValue = randomValue(8, 12);
      this.monsterHealth -= attackValue;
      this.monsterAttack();
    },
    monsterAttack() {
      const attackValue = randomValue(10, 15);
      this.playerHealth -= attackValue;
    },
  },
});
game.mount("#game");

const randomValue = function (min, max) {
  Math.floor(Math.random() * (max - min)) + min;
};
