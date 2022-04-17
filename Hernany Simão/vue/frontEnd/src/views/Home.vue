<template>
  <div>
     <cena1 />

    <div class="container-fluid">
      <div class="row">
            <cena2 />
            <cena3 />
      </div>
    </div>
  </div>
</template>

<script>
 import cena1 from "../components/cena1.vue";
 import cena2 from "../components/cena2.vue";
 import cena3 from "../components/cena3.vue";
// <-- Componentes principais -->
 

export default {
  nome: "home",

  components:{
    cena1,
    cena2,
    cena3
  }
     
   
};
</script>

<style>

 

</style>