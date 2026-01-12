<template>
  <div class="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-24">
    <!-- <div class="bg-gray-100 w-full h-full">
      <nav class="text-sm text-black mt-60">
        <ul class="flex items-center space-x-2">
          <li class="flex items-center">
            <NuxtLink
              to="/"
              class="hover:text-red-600 transition-colors font-bold text-3xl"
            >
              Ana Sayfa
            </NuxtLink>
            <span class="mx-2 text-black text-3xl">/</span>
            <span class="text-gray-400 transition-colors font-bold text-3xl">
              İletişim
            </span>
          </li>
        </ul>
      </nav>
    </div> -->
    <div
      class="flex flex-col items-center justify-center min-h-screen text-black"
    >
      <div
        class="w-full max-w-6xl p-6 bg-white rounded-2xl shadow-2xl text-black my-12"
      >
        <h1 class="text-3xl font-bold text-center">İletişime Geç</h1>
        <p class="text-center mt-4">
          Yemek Tarifleri ile iletişime geçin! Herhangi bir sorunuz veya
          öneriniz varsa, bizimle iletişime geçebilirsiniz.
        </p>
        <div class="lg:flex w-full mt-6 gap-10">
          <div class="w-full mt-8 h-full">
            <NuxtImg
              src="img/contact-us.webp"
              alt="Contact Us"
              width="500"
              height="700"
              format="webp"
              class="rounded-lg transform hover:scale-105 transition-transform"
            />
          </div>
          <form class="w-full mt-6" @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Adınız"
                v-model="form.name"
                class="w-full px-4 py-2 mt-2 rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>
            <div class="mb-4">
              <label for="name" class="block text-lg font-medium"
                >Soyadınız</label
              >
              <input
                type="text"
                id="surname"
                placeholder="Soyadınız"
                v-model="form.surname"
                class="w-full px-4 py-2 mt-2 rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                v-model="form.email"
                class="w-full px-4 py-2 mt-2 rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-medium"
                >Telefon</label
              >
              <input
                type="tel"
                id="tel"
                placeholder="Telefon"
                v-model="form.phone"
                class="w-full px-4 py-2 mt-2 rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
              />
            </div>
            <div class="mb-4">
              <label for="contactType" class="block text-lg font-medium"
                >İletişim Tipi</label
              >
              <Listbox v-model="form.contactType">
                <div class="relative">
                  <ListboxButton
                    class="w-full px-4 py-2 mt-2 text-start rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600 flex justify-between items-center"
                  >
                    {{ selectedOptionTitle }}
                    <ChevronDownIcon class="w-5 h-5 text-gray-500" />
                  </ListboxButton>
                  <ListboxOptions
                    class="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                  >
                    <ListboxOption
                      v-for="(option, index) in contactOptions"
                      :key="index"
                      :value="option.value"
                      class="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {{ option.title }}
                    </ListboxOption>
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg font-medium"
                >Mesaj</label
              >
              <textarea
                id="message"
                placeholder="Mesajınız"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 mt-2 rounded-lg text-black border focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 mt-4 bg-red-600 text-white font-bold rounded-lg hover:bg-gray-900 hover:scale-105 cursor-pointer transform transition-transform"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import webContactRequest from "../services/webContactRequest";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const breadcrumbs = [
  { label: "Ana Sayfa", to: "/" },
  { label: "İletişim", to: "contactus" },
];

const form = ref({
  name: "",
  surname: "",
  email: "",
  phone: "",
  contactType: "",
  message: "",
});

const contactOptions = [
  { value: 0, title: "Seçiniz" },
  { value: "1", title: "Soru" },
  { value: "2", title: "Şikayet" },
  { value: "3", title: "Öneri" },
  { value: "4", title: "Diğer" },
];

const selectedOptionTitle = computed(() => {
  const selectedOption = contactOptions.find(
    (option) => option.value === form.value.contactType
  );
  return selectedOption ? selectedOption.title : "Seçiniz";
});

// Check if the form is valid before submitting
const submitForm = async () => {
  const response = await webContactRequest.setWebContactRequestOnWeb(
    0, // userId (anonim kullanıcı için 0)
    form.value.name,
    form.value.surname,
    form.value.email,
    form.value.phone,
    parseInt(form.value.contactType), // string'den number'a çevir
    form.value.message
  );

  if (response.isSuccess()) {
    useToastify("Mesaj Başarıyla Gönderildi", {
      autoClose: 5000,
      position: ToastifyOption.POSITION.TOP_RIGHT,
    });
    form.value = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      contactType: "",
      message: "",
    };
  } else {
    useToastify(response.em, {
      autoClose: 5000,
      position: ToastifyOption.POSITION.TOP_RIGHT,
      toastClassName: "!bg-white !text-black",
      progressStyle: {
        background: "#FFD700",
      },
    });
  }
};

useHead({
  title: "İletişim | Yemek Tarifleri",
  meta: [
    {
      name: "description",
      content:
        "Yemek Tarifleri ile iletişime geçin! Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçebilirsiniz.",
    },
    {
      name: "keywords",
      content: "iletişim, yemek tarifleri, öneri, soru, müşteri hizmetleri",
    },
  ],
});
</script>
