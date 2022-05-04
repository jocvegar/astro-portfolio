<script>
  export let userData = {};
  let year = new Date().getFullYear();

  const goHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
</script>

<footer class="body-font bg-gray-100 text-gray-600">
  <div
    class="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row"
  >
    <a
      name="logo"
      on:click={goHome}
      class="title-font	 flex cursor-pointer items-center justify-center font-medium text-gray-900 md:justify-start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 animate-bounce rounded-full bg-anaranjado p-2 text-white"
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
    <p
      class="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4"
    >
      © {year}
    </p>
  </div>
</footer>
