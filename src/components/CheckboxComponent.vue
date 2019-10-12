<template>

  <div id="exp1">

    <input type="checkbox"
           id="jack"
           value="Jack"
           v-model="checkNames">
    <label for="jack">jack</label>
    <input type="checkbox"
           id="caldremch"
           value="Caldremch"
           v-model="checkNames">
    <label for="caldremch">Caldremch</label>
    <br>
    <span>Checked names:{{checkNames}}</span>
  </div>

</template>

<script>
export default {
  data () {
    return {
      checkNames: []
    }
  }
}
</script>
