<template>
  <header>
    <h2>Programmers Force</h2>
    <h4 class="text-warning">Online Store</h4>
    <p class="col-md-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quae tenetur
      ea, ad obcaecati accusantium tempore eius labore omnis architecto optio
      earum maiores quod nobis facere dolores ipsa eos a atque quasi quis?
      Facilis.
    </p>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");
header {
  width: 100%;
  height: 67vh;
  background: url("../../assets/header-bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
header h2 {
  font-family: "Playfair Display", serif;
  font-size: 55px;
}
</style>
