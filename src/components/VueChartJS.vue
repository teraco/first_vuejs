<template>
  <section class="container">
    <ul>
      <li><router-link to="/Home">Home</router-link></li>
      <li><router-link to="/chartjs">vue-chartjs</router-link></li>
    </ul>
    <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line chart</h3>
        <line-chart></line-chart>
      </div>
      <div class="column">
        <h3>Bar chart</h3>
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <h3>Bubble chart</h3>
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <reactive :chart-data="dataContents"></reactive>
        <button class="button is-primary" @click="fillData()">Ramdomize</button>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
import BubbleChart from '@/components/BubbleChart'
import Reactive from '@/components/Reactive'

export default {
  name: 'VueChartJS',
  components: {
    LineChart,
    BarChart,
    BubbleChart,
    Reactive
  },

  data () {
    return {
      dataContents: null
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.dataContents = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Data reractive',
            backgroundColor: '#f8b979',
            data: [this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum(), this.getRandomNum()]
          }
        ]
      }
    },
    getRandomNum () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>