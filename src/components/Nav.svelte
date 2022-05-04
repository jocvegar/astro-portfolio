<script>
  import userData from "../constants/userData";
  import * as animateScroll from "svelte-scrollto";
  import Hamburger from "./Hamburger.svelte";

  export let sidebar = false;

  const goHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
</script>

<header class="body-font text-gray-600">
  <div class="container mx-auto flex flex-row flex-wrap items-center p-5">
    <Hamburger bind:open={sidebar} />
    <a
      name="home"
      on:click={goHome}
      class="title-font flex items-center font-medium text-gray-900 duration-300 ease-in hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 rounded-full bg-anaranjado p-2 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          fill-rule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="ml-3 text-xl">{userData.name}</span>
    </a>

    <nav
      class="text-bold hidden flex-wrap items-center justify-center text-base sm:flex md:ml-auto md:mr-auto"
    >
      <a
        class="mr-5 transform text-lg font-medium transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-anaranjado"
        name="navigation"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#about",
            offset: 50,
          })}
      >
        About
      </a>

      <a
        name="navigation"
        class="mr-5 transform text-lg font-medium transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-anaranjado"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#employement",
            offset: 50,
          })}
      >
        Employement
      </a>
      <a
        name="navigation"
        class="mr-5 transform text-lg font-medium transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-anaranjado"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#projects",
            offset: 50,
          })}
      >
        Projects
      </a>
      <a
        name="navigation"
        class="mr-5 transform text-lg font-medium transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-anaranjado"
        on:click={() =>
          animateScroll.scrollTo({
            element: "#tech",
            offset: 50,
          })}
      >
        Tech Stack
      </a>
    </nav>

    <button
      class="text-bold mt-4 hidden transform items-center rounded border-0 bg-gray-100 py-2 px-4 text-base shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-anaranjado hover:text-white focus:outline-none sm:inline-flex md:mt-0"
      on:click={() =>
        animateScroll.scrollTo({
          element: "#contact",
          offset: 50,
        })}
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
    </button>
  </div>
</header>
