<template>
  <div>
    <h1>this is my first compoennt, data below</h1>
    <button v-on:click="counter += 1">add 1</button>
    <p> the button above has been clicked {{counter}} times</p>
    <button v-on:click="greet">invoke method</button>
    <br>
    <input type="text"
           v-model="message">
    <p>Message is {{message}}</p>
    <br>
    <span>multiline message is: {{message}}</span>
    <textarea name="unknowname"
              v-model="message"
              id="noid"></textarea>

    {{myData}}
    <CheckboxComponent></CheckboxComponent>
    <SelectComponent></SelectComponent>
  </div>
</template>

<script>
import CheckboxComponent from './CheckboxComponent'
import SelectComponent from './SelectComponent'
export default {
  components: {
    CheckboxComponent, SelectComponent
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.counter)
      if (event) {
        alert(event.target.tagName)
      }
    }

  },
  data () {
    return {
      counter: 0,
      message: '',
      myData: 'this is my first component'

    }
  }
}
</script>
