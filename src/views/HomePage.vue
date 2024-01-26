<template>
  <ion-page class="bg-custom-blue h-full overflow-hidden">
      <header class="bg-custom-blue text-white">
        <!--Navbar-->
        <nav class="container mx-auto py-4 flex justify-between items-center">
          <!--Logo + Title-->
          <div class="flex items-center">
            <span class="font-extrabold text-lg tracking-tight text-custom-orange font-mono">CodeExhibit</span>
          </div>

          <!--Navigation buttons-->
          <div class="hidden md:flex items-center space-x-1">
            <a href="/home" class="py-2 px-3 text-white hover:bg-custom-orange rounded-full 
            transition duration-100 font-mono font-semibold text-sm">Home</a>
            <a href="/info" class="py-2 px-3 text-white hover:bg-custom-orange rounded-full 
            transition duration-100 font-mono font-semibold text-sm">About Us</a>
            <a href="#" class="py-2 px-3 text-white hover:bg-custom-orange rounded-full 
            transition duration-100 font-mono font-semibold text-sm">Contact</a>
            <a href="/projects" class="py-2 px-3 text-white bg-custom-orange rounded-full 
            transition duration-100 font-mono font-semibold text-sm">Projects</a>
          </div>
        </nav>
      </header>
      <ion-content class="bg-custom-blue overflow-hidden">
        <div class="absolute h-screen w-full">
          <div class="rectangle1 absolute w-full h-screen bg-[url('/rectangle1.svg')] bg-no-repeat bg-cover -z-10"></div>
          <div class="rectangle2 absolute w-full h-screen bg-[url('/rectangle2.svg')] bg-no-repeat bg-cover top-[20%] md:top-[15%] lg:top-[75%] -z-10"></div>
        </div>


        <div class="bg-custom-blue text-white h-60 pt-10 pl-16 items-center">
          <h1 class="text-3xl md:text-4xl font-mono font-bold text-custom-orange mb-3">
            Project Today,
          </h1>
          <h2 class="text-3xl md:text-4xl font-mono font-bold mb-3">
            Portfolio Tomorrow:
          </h2>
          <h2 class="text-3xl md:text-4xl font-mono font-bold">
            Where Students Shine.
          </h2>
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
