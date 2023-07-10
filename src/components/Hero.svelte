<script>
  export let userData = {};
  import Annotation from "svelte-rough-notation";
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";

  const visible = [false, false];

  onMount(() => {
    setTimeout(() => (visible[0] = true), 100);
    setTimeout(() => (visible[1] = true), 400);
  });
</script>

<div
  class="order-last mb-16 flex flex-col items-center text-center md:order-first md:mb-4 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
>
  <h1 class="title-font mb-4 text-3xl font-medium text-gray-200 sm:text-4xl">
    <Annotation
      bind:visible={visible[0]}
      type="highlight"
      color="#FF3E00"
      multiline
    >
      {userData.name}
      <br />
      {userData.designation}
    </Annotation>
  </h1>
  <p class="mb-8 text-2xl leading-relaxed">
    I'm a software developer that
    <Annotation bind:visible={visible[1]} type="underline" color="#FF3E00">
      loves
    </Annotation>
    building products and web applications that make life a little easier.
  </p>
  <div class="flex justify-center">
    <button
      on:click={() =>
        animateScroll.scrollTo({
          element: "#about",
          offset: 50,
        })}
      class="inline-flex rounded border-0 bg-anaranjado py-2 px-6 text-lg text-white shadow-md hover:bg-red-600 focus:outline-none"
    >
      More
    </button>
    <button
      class="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 shadow-md hover:bg-gray-200 focus:outline-none"
    >
      <a href="/JoseVegaCV.pdf" download> Download Resume </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <path d="M7 11l5 5l5 -5" />
        <path d="M12 4l0 12" />
      </svg>
    </button>
  </div>
</div>
