<script>
  import * as animateScroll from "svelte-scrollto";
  export let open = false;

  const goTo = (element) => {
    animateScroll.scrollTo({
      element: element,
      offset: 50,
    });
    open = false;
  };
</script>

<aside
  class="absolute h-full w-full border-r-2 bg-gray-100 shadow-lg"
  class:open
>
  <nav class="p-12 text-xl">
    <a class="my-4 block" name="navigation" on:click={() => goTo("#about")}>
      About
    </a>
    <a
      class="my-4 block"
      name="navigation"
      on:click={() => goTo("#employement")}
    >
      Employement
    </a>
    <a class="my-4 block" name="navigation" on:click={() => goTo("#projects")}>
      Projects
    </a>
    <a class="my-4 block" name="navigation" on:click={() => goTo("#tech")}>
      Tech Stack
    </a>
    <a
      class="my-4 inline-flex items-center rounded bg-anaranjado py-2 px-4 text-base text-white"
      name="navigation"
      on:click={() => goTo("#contact")}
    >
      Contact
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-1 h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        />
      </svg>
    </a>
  </nav>
</aside>

<style>
  aside {
    left: -100%;
    transition: left 0.3s ease-in-out;
    z-index: 1;
  }

  .open {
    left: 0;
  }
</style>
