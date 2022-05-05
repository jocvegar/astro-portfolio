<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import Header from "./Header.svelte";
  import axios from "axios";
  export let alert = false;
  export let userData = {};

  const { form, errors, handleChange, handleSubmit, handleReset } = createForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    }),
    onSubmit: (values) => {
      sendEmail(values.name, values.email, values.message);
      handleReset();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      alert = !alert;
    },
  });

  const sendEmail = async (name, email, message) => {
    console.log("name", name);
    console.log("email", email);
    console.log("message", message);
    // try {
    //   await axios.post("/.netlify/functions/sendgrid/sendgrid", {
    //     message:
    //       `<br>` +
    //       "Name: " +
    //       name +
    //       `<br>` +
    //       "Email: " +
    //       email +
    //       `<br>` +
    //       "Message: " +
    //       message +
    //       `<br>`,
    //   });
    // } catch (e) {
    //   console.error(e);
    //   // @ts-ignore
    //   alert("Your message could not be sent. Sorry about that.");
    // }
  };
</script>

<section id="contact" class="body-font relative text-gray-600">
  <div class="container mx-auto px-5 py-8 md:py-16">
    <Header
      title="Contact Me"
      description="If you have a project in mind, have a question or simply want to say hi, please send me a message"
    />

    <form on:submit={handleSubmit}>
      <div class="mx-auto md:w-2/3 lg:w-1/2">
        <div class="-m-2 flex flex-wrap">
          <div class="w-full p-2 md:w-1/2">
            <div class="relative text-left">
              <label for="name" class="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                bind:value={$form.name}
                on:change={handleChange}
                type="text"
                id="name"
                name="name"
                class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
              />
              {#if $errors.name}
                <small class="font-extralight text-anaranjado">
                  {$errors.name}
                </small>
              {/if}
            </div>
          </div>
          <div class="w-full p-2 md:w-1/2">
            <div class="relative text-left">
              <label for="email" class="text-sm leading-7 text-gray-600">
                Email
              </label>
              <input
                bind:value={$form.email}
                on:change={handleChange}
                type="email"
                id="email"
                name="email"
                class="w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
              />
              {#if $errors.email}
                <small class="font-extralight text-anaranjado">
                  {$errors.email}
                </small>
              {/if}
            </div>
          </div>
          <div class="w-full p-4">
            <div class="relative">
              <label for="message" class="text-sm leading-7 text-gray-600">
                Message
              </label>
              <textarea
                bind:value={$form.message}
                on:change={handleChange}
                id="message"
                name="message"
                class="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
              />
              {#if $errors.message}
                <small class="font-extralight text-anaranjado">
                  {$errors.message}
                </small>
              {/if}
            </div>
          </div>
          <div class="w-full p-2">
            <button
              class="mx-auto flex rounded border-0 bg-anaranjado py-2 px-8 text-lg text-white hover:bg-red-600 focus:outline-none"
            >
              Send
            </button>
          </div>

          <div
            class="mt-8 w-full border-t border-gray-200 p-2 pt-8 text-center"
          >
            <a href={"#"} class="text-anaranjado">{userData.email}</a>
            <p class="my-5 leading-normal">
              {userData.address}
            </p>
            <span class="inline-flex">
              <a
                href={userData.socialLinks.github}
                class="ml-4 text-gray-500"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 496 512"
                  ><path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  /></svg
                >
              </a>
              <a
                href={userData.socialLinks.linkedin}
                class="ml-4 text-gray-500"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="h-5 w-5"
                  viewBox="0 0 448 512"
                  ><path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  /></svg
                >
              </a>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
