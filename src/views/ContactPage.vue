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

        <div class="bg-custom-blue h-full flex flex-col items-center">
          <div class="h-1/4 w-full flex bg-custom-gray items-center text-center justify-center font-mono text-custom-blue text-4xl font-bold">
            <h6>Need Support?</h6>
          </div>
          <div class="flex justify-center w-full my-12">
            <!-- Card 1 -->
            <div class="bg-custom-gray h-96 w-1/4  rounded text-center justify-center items-center mx-8 shadow-lg text-custom-blue border-2 border-custom-orange">
              <h2 class="text-xl font-extrabold mb-2 mt-16 font-mono">Call</h2>
              <p class="text-base mx-5 mb-5">If you are experiencing any difficulties and need to speak to a representative, we would be glad to help.
                 If you have any comments, questions, or suggestions, feel free to give us a call!
                We can be reached at:
              </p>
              <p><b>School:</b> 1-(800)-668-1249</p>
              <p><b>Personal:</b> 1-(603)-123-4567</p>
            </div>
            <!-- Card 2 -->
            <div class="bg-custom-gray h-96 w-1/4  rounded text-center justify-center items-center mx-8 shadow-lg text-custom-blue border-2 border-custom-orange">
              <h2 class="text-xl font-extrabold mb-2 mt-16 font-mono">Email</h2>
              <p class="text-base mx-5 mb-5"> If you have any questions regarding CodeExhibit, please contact us through email.
                Typically we take 2-3 business days to send a response. If we cannot get back to you in that time, feel free to reference
                our call section. 
                We can be reached at:
              </p>
              <p><b>support@codeexhibit.com</b></p>
            </div>
            <!-- Card 3 -->
            <div class="bg-custom-gray h-96 w-1/4  rounded text-center justify-center items-center mx-8 shadow-lg text-custom-blue border-2 border-custom-orange">
              <h2 class="text-xl font-extrabold mb-2 mt-16 font-mono">Visit</h2>
              <p class="text-base mx-5 mb-5"> Come see where it all started! You can request a meeting with one of our representatives
                or participate in a tour of the SETA building. CodeExhibit is proud to be headquartered at:
              </p>
              <p><b>Address:</b> 2500 N River Rd</p>
              <p>Manchester, NH 03106</p>
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