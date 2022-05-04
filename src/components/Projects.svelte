<script>
  import { Navigation, Pagination, Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/autoplay";
  import Header from "./Header.svelte";

  let projects = [
    {
      name: "WanFu Menu",
      image: "./images/wanfu.png",
      link: "https://wan-fu.netlify.app/",
    },
    {
      name: "Fito's Menu",
      image: "./images/fitos.png",
      link: "https://menu.fitoshn.com/",
    },
    {
      name: "Registro de Cáncer Infatil",
      image: "./images/registro.png",
      link: "https://www.registrodecancerhn.com/",
    },
    {
      name: "Observatorio de Cáncer",
      image: "./images/observatorio.png",
      link: "https://www.observatoriocancerhn.com/",
    },
    {
      name: "Otra Vez",
      image: "./images/otra.png",
      link: "https://www.otravez.shop/",
    },
    {
      name: "Memory Game",
      image: "./images/memory.png",
      link: "https://memory-game-6b16f.web.app/",
    },
    {
      name: "SafetySpot",
      image: "./images/safetyspot.png",
      link: "https://safetyspot.com/",
    },
    {
      name: "Covid Tracker",
      image: "./images/covid.png",
      link: "https://honduras-cv-19.netlify.app/",
    },
    {
      name: "MediNota",
      image: "./images/medinota.png",
      link: "https://medinota.herokuapp.com/",
    },
  ];
</script>

<section id="projects" class="my-16 py-16">
  <Header
    title="Projects"
    description="A small collection of my favorite and most interesting projects"
  />
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    autoplay
    spaceBetween={50}
    slidesPerView={1}
    navigation
    loop
    pagination={{ clickable: true }}
    breakpoints={{
      "640": {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      "768": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
  >
    {#each projects as project}
      <SwiperSlide>
        <div class="swiper-slide p-2 flex flex-col">
          <p class="w-full text-gray-600 text-xl px-6 pb-4 text-center">
            {project.name}
          </p>
          <div class="flex flex-col rounded shadow overflow-hidden">
            <div class="flex-shrink-0">
              <img
                src={project.image}
                alt="joc"
                class="h-56 w-full object-cover rounded-md shadow-lg hover:shadow-none"
              />
            </div>
          </div>
          <button
            class="mx-auto bg-anaranjado hover:bg-light-anaranjado text-white hover:text-black font-bold rounded my-6 py-2 px-4 shadow-lg"
          >
            <a href={project.link} target="_blank">
              {project.name}
            </a>
          </button>
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</section>

<style>
  :global(.swiper-pagination-bullet-active) {
    background-color: #ff3e00 !important;
    border-color: #ff3e00 !important;
  }
  :global(.swiper-button-next) {
    color: #ff3e00 !important;
  }
  :global(.swiper-button-prev) {
    color: #ff3e00 !important;
  }
</style>
