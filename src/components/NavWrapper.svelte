<script>
  import Nav from "./Nav.svelte";
  import Sidebar from "./Sidebar.svelte";

  let open = false;
</script>

<div>
  <Nav bind:sidebar={open} />
  <Sidebar bind:open />
</div>
