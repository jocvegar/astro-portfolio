<script>
  import Nav from "./Nav.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Alert from "./Alert.svelte";

  let open = false;
  let alert = false;
</script>

<div>
  <Nav bind:sidebar={open} />
  <Sidebar bind:open />
  <Alert bind:alert />
</div>
