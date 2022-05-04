<script>
  import Header from "./Header.svelte";
  export let userData = {};
</script>

<section
  id="employement"
  class="body-font my-16 bg-gray-100 py-16 text-gray-600 "
>
  <Header title="Employement History" />
  <section class="body-font text-gray-600">
    <div class="container mx-auto flex flex-wrap px-5">
      <div class="flex w-full flex-wrap">
        <div class="mx-auto md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
          {#each userData.work as work}
            <div class="relative flex pb-12">
              <div
                class="absolute inset-0 flex h-full w-12 items-center justify-center"
              >
                <div class="pointer-events-none h-full w-1 bg-gray-200" />
              </div>
              <div
                class="relative z-10 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-anaranjado text-white shadow"
              >
                {work.order}
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="title-font mb-1 text-lg font-medium tracking-wider text-gray-900"
                >
                  <a href={work.link}>{work.name}</a>
                </h2>
                <p class="leading-relaxed">({work.date})</p>
              </div>
            </div>
          {/each}
        </div>
        <img
          class="mt-12 scale-75 rounded-lg object-cover object-center md:mt-0 md:w-1/2 lg:w-3/5"
          src="./images/undraw.png"
          alt="step"
        />
      </div>
    </div>
  </section>
</section>
