<template>
  <ion-page class="bg-custom-blue h-full overflow-hidden">
      <ion-content class="bg-custom-blue overflow-hidden">
        <header class="bg-custom-blue text-white">
          <!--Navbar-->
          <nav class="container mx-auto py-4 flex justify-between items-center">

            <!--Logo + Title-->
            <div class="flex items-center justify-start flex-1">
              <div class="logo" style="width: 3.625rem; height: 2.875rem; background-image: url('/logo.png'); background-size: cover; background-position: center;"></div>
              <span class="text-3xl font-londrina leading-normal text-custom-orange">CodeExhibit</span>
            </div>

            <!--Navigation buttons-->
            <div class="hidden md:flex items-center space-x-1 justify-center flex-1">
              <a href="/home" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">Home</a>
              <a href="/info" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">About Us</a>
              <a href="#" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">Contact</a>
            </div>

            <!-- Projects Button -->
            <div class="flex justify-end flex-1">
              <a href="/projects" class="py-2 px-3 text-white bg-custom-orange rounded-full transition duration-100 font-inter font-semibold text-sm" style="padding: 0.4375rem 1.75rem; ">Projects</a>
            </div>

          </nav>
        </header>


        <div class="absolute h-screen w-full">
          <div class="rectangle1 absolute w-full h-screen bg-[url('/rectangle1.svg')] bg-no-repeat bg-cover -z-10" style="top: -0.05rem;"></div>
          <div class="rectangle2 absolute w-full h-screen bg-[url('/rectangle2.svg')] bg-no-repeat bg-cover top-[20%] md:top-[15%] lg:top-[75%] -z-10" ></div>
        </div>

        <div class="text-image-container relative z-20 px-[3.125rem] flex flex-col md:flex-row items-center justify-center h-full">
          <!-- Text Content -->
          <div class="text-content flex-1">
            <h1 style="font-size: 3.75888rem;" class="font-inter font-bold text-white mb-3">
              <span class="text-custom-orange">Project</span> Today,<br>
              <span class="text-custom-orange">Portfolio</span> Tomorrow:<br>
              Where Students <span class="text-custom-orange">Shine</span>.
            </h1>

          </div>

          <!-- Image Content -->
          <div class="image-content flex-1">
            <img src="/public/art1.svg" alt="Descriptive Alt Text" class="max-w-full h-auto">
          </div>

        </div>
        <footer class="bg-custom-blue text-white flex items-center p-9">
          <div class="flex-1 flex items-center mx-2">
            <img src="/gmail.png" alt="email" class="h-7 w-7 mr-2">
            <span class="text-sm font-semibold font-mono">support@codeexhibit.com</span>
          </div>
          <div class="flex-1 flex justify-center">
            <div class="text-base font-semibold font-mono">
              Ready to <b class="text-custom-orange">Show</b> the World?
            </div>
          </div>
          <div class="flex-1 flex justify-end items-center">
            <a href="https://instagram.com" class="mx-1.5">
              <img src="/instagram.png" alt="insta" class="h-7 w-7">
            </a>
            <a href="https://tiktok.com" class="mx-1.5">
              <img src="/tiktok.png" alt="x" class="h-7 w-7">
            </a>
            <a href="https://facebook.com" class="mx-1.5">
              <img src="/facebook.png" alt="facebook" class="h-7 w-7">
            </a>
          </div>
        </footer>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
