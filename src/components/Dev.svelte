<script>
  import Header from "./Header.svelte";
  export let userData = {};
</script>

<section class="body-font text-gray-600 ">
  <div class="container mx-auto px-5 py-24">
    <Header
      title="Design & Development"
      description="Clean, modern designs - optimized for performance"
    />
    <div class="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
      {#each userData.skills as skill}
        <div class="w-full transform p-2 hover:scale-105 sm:w-1/2">
          <div
            class="flex h-full items-center rounded bg-gray-100 p-4"
            data-aos="fade-down"
            data-aos-delay={skill.delay}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              class="mr-4 h-6 w-6 flex-shrink-0 text-anaranjado"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span class="title-font text-left font-medium">
              {skill.name}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
