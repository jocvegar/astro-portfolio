<script>
  import Alert from "./Alert.svelte";
  import Contact from "./Contact.svelte";

  export let userData = {};
  let alert = false;
</script>

<div>
  <Contact bind:alert {userData} />
  <Alert bind:alert />
</div>
