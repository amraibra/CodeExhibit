<template>
    <ion-page>
      <ion-content class="bg-custom-blue h-full">
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

        <div class="h-screen">
          <div class="flex flex-wrap h-full">
            <!-- First Row -->
            <div class="w-full h-full bg-custom-gray flex items-center pb-32">
              <!--SETA image-->
              <div class="w-[27rem] h-[27rem] bg-custom-blue rounded-full border-4 border-custom-orange mx-20 flex items-center justify-center">
                <img src="/SETA.jpg" alt="SETA" class="absolute w-[26.5rem] h-[26.5rem] object-cover rounded-full">
              </div>
              <!--First caption-->
              <div class="text-custom-blue mx-auto text-center flex-grow space-y-5">
                <h2 class="font-bold text-4xl font-mono pb-2">
                  Our Inspiration... 
                </h2>
                <p> We aimed to create an innovative online platform designed exclusively</p>
                <p>for showcasing the diverse range of computer science projects created by students.</p>
                <p>These projects are an important aspect to a student's career and this is their</p>
                <p>place to <b class="text-custom-orange">Show</b> their experience. The School of Engineering, Technology, and</p>
                <p>Aeronautics (SETA) at Southern New Hampshire University has inspired our work.</p>
                <p class="text-sm">- Amra, Sam, Paul</p>
              </div>
            </div>
            <div class="w-full h-full bg-custom-blue flex items-center">
              <div class="text-white mx-auto text-center flex-grow space-y-5">
                <h2 class="font-bold text-4xl font-mono pb-2">
                  What is the SETA Showcase?
                </h2>
                <p>The SETA showcase is an event held at the end of each semester for computer science students.</p>
                <p>Participating classes give their student's an oppurtunity to present their projects to the department</p>
                <p>and other students. The students are also given an opportunity to get feedback from the audience</p>
                <p>suggestions. The department has all these amazing projects, but no home to keep them for reference</p>
                <p>and inspiration. CodeExhibit aims to be the connection between the students and the department.</p>
              </div>
              <div class="flex items-center justify-end mx-32">
                <div class="relative">
                  <div class="w-[16rem] h-[16rem] bg-custom-blue rounded-full border-4 border-custom-grayflex items-center justify-center relative top-28 right-36">
                    <img src="/showcase.png" alt="Image 1" class="absolute w-[15.5rem] h-[15.5rem] object-cover rounded-full">
                  </div>
                  <div class="w-[16rem] h-[16rem] bg-custom-blue rounded-full border-4 border-custom-gray flex items-center justify-center relative left-208">
                    <img src="/tech-class.jpeg" alt="Image 2" class="absolute w-[15.5rem] h-[15.5rem] object-cover rounded-full">
                  </div>
                  <div class="w-[16rem] h-[16rem] bg-custom-blue rounded-full border-4 border-custom-gray flex items-center justify-center relative bottom-28 right-36">
                    <img src="/seta-cup.jpg" alt="Image 3" class="absolute w-[15.5rem] h-[15.5rem] object-cover rounded-full">
                  </div>
                </div>
              </div>
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
  import { IonContent, IonPage } from '@ionic/vue';
  </script>
  
  