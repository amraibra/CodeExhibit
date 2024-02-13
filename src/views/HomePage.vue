<template>
  <ion-page class="bg-custom-blue flex-col min-h-screen">
      <ion-content class="bg-custom-blue overflow-hidden flex-grow">
        <header class="bg-custom-blue text-white">
          <!--Navbar-->
          <nav class="container mx-auto py-4 flex justify-between items-center">
            <!--Logo + Title-->
            <div class="flex items-center justify-start flex-1">
              <div class="logo" style="width: 4.8rem; height: 3rem; background-image: url('/logo2.png'); background-size: cover; background-position: center;"></div>
              <span class="text-3xl font-londrina leading-normal text-custom-orange">CodeExhibit</span>
            </div>

            <!--Navigation buttons-->
            <div class="hidden md:flex items-center space-x-1 justify-center flex-1">
              <a href="/home" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">Home</a>
              <a href="/info" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">About Us</a>
              <a href="/contact" class="py-2 px-3 text-white transition duration-100 font-inter font-semibold text-sm">Contact</a>
            </div>

            <!-- Projects Button -->
            <div class="flex justify-end flex-1">
              <a href="/projects" class="py-2 px-3 text-white bg-custom-orange rounded-full transition duration-100 font-inter font-semibold text-sm" style="padding: 0.4375rem 1.75rem; ">Projects</a>
            </div>

          </nav>
        </header>


        <div class="absolute h-screen w-full">
          <!-- Original setup for rectangle1 and art1 -->
          <div class="rectangle1 absolute w-full h-screen bg-[url('/rectangle1.svg')] bg-no-repeat bg-cover -z-10"></div>
          <div class="text-image-container original-content relative z-20 px-[3.125rem] flex flex-col md:flex-row items-center justify-center h-full">
            <!-- Text Content for art1 -->
            <div class="text-content flex-1">
              <h1 style="font-size: 3.75888rem;" class="font-inter font-bold text-white mb-3">
                <span class="text-custom-orange">Project</span> Today,<br>
                <span class="text-custom-orange">Portfolio</span> Tomorrow:<br>
                Where Students <span class="text-custom-orange">Shine</span>.
              </h1>
            </div>

            <!-- Image Content for art1 -->
            <div class="image-content flex-1">
              <img src="/public/art1.svg" alt="Descriptive Alt Text" class="max-w-full h-auto">
            </div>
          </div>

          <!-- New setup for rectangle2 and art2 -->
          <div class="rectangle2 absolute w-full h-screen bg-[url('/rectangle2.svg')] bg-no-repeat bg-cover top-[20%] md:top-[15%] lg:top-[75%] -z-10"></div>
          <div class="centered-content new-content absolute z-20 w-[50%] h-[50%] top-[calc(75% + 25vh)] left-[25%] flex items-center justify-center">
            <!-- Image Content for art2 -->
            <div class="image-content w-1/2">
              <img src="/public/art2.png" alt="Descriptive Alt Text" class="" style="width: 32.1875rem; height: 19.9375rem;">
            </div>

            <!-- Text Content for art2 -->
            <div class="text-content w-1/2 text-right">
              <h1 class="text-white" style="width: 49.3125rem; height: 23.0625rem; flex-shrink: 0; color: #000; text-align: center; font-family: Inter; font-size: 3.75rem; font-style: normal; font-weight: 700; line-height: normal;">
                Welcome to <span class="text-custom-orange">CodeExhibit</span> the premier platform where ambition meets opportunity.
              </h1>
            </div>
          </div>
        </div>
      </ion-content>

    <ion-footer class="bg-custom-blue text-white flex items-center p-6">
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
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
