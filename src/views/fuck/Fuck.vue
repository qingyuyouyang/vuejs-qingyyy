<template>
  <div id="article" class="container">
    <div class="row">

            <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 topic-content">
              <div class="card ">
                <div class="card-body">
                  <h1 class="text-center mt-3 mb-3">
                  </h1>

                  <div class="article-meta text-center text-secondary">
                    <i class="fa fa-clock-o"></i>
                    <abbr>today:{{today}}</abbr>
                    <br>
                    <i class="fa fa-clock-o"></i>
                    <abbr>fuck_day:{{fuck_day}}</abbr>
                    <br>
                    <i class="fa fa-clock-o"></i>
                    <abbr>fucked_day:{{fucked_day}}</abbr>
                    <br>
                    <i class="fa fa-clock-o"></i>
                    <abbr>fucking_day:{{fucking_day}}</abbr>
                                       
                  </div>


                </div>
              </div>
            </div>

    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Fuck',
  data() {
    return {
      today: '',
      fuck_day: '',
      fucked_day: '',
      fucking_day: '',
    }
  },
  created() {
      var start_day = moment('20201123')
      var end_day = moment('20241122')
      var today = moment().format('YYYY, M, DD')
      // var today = moment([2021, 3, 13])
      console.log(start_day)
      this.today = today
      this.fuck_day = moment(end_day).diff(start_day, 'days')
      this.fucked_day = moment(today).diff(start_day, 'days') 
      this.fucking_day = moment(end_day).diff(today, 'days')
  }
} 
</script>
