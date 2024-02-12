<template>
    <ion-page>
      <ion-content>
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

        <div class="bg-custom-blue h-full">
            
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
  import { IonContent, IonPage } from '@ionic/vue';
  </script>