  <template>
  <div class="quote-wrapper">
    <img @click="loadRandomQuote" alt="chuck-norris" src="../assets/chuck-norris.png" class="img" />
    <h1 class="quote">"{{ randomQuote }}"</h1>
  </div>
</template>

<script>
export default {
  name: "ChuckNorrisQuote",
  data() {
    return {
      randomQuote: []
    };
  },
  methods: {
    loadRandomQuote() {
      const endpoint = 'http://localhost:3000/api/v1/quotes'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      const randomInt = this.getRandomInt(79)

      fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(randomQuote => this.randomQuote.push(randomQuote))
      .catch(error => console.log('error', error))
    },
    getRandomInt(maxExclusive) {
      return Math.floor(Math.random() * maxExclusive);
    },
  },
};
</script>

<style>
.quote-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 95%;
  margin: auto;
}
h1 {
  font-size: 4vw;
  text-align: center;
  font-style: italic;
}
.img {
  width: 50%;
}
.quote {
  width: 50%;
}

@media screen and (max-width: 780px) {
  .quote-wrapper {
    display: flex;
    flex-direction: column;
  }
  .img {
    width: 100%;
  }
  .quote {
    width: 100%;
  }
}
</style>
