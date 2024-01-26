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
        <div class="bg-custom-blue text-white h-60 pt-10 pl-16 items-center">
          <h1 class="text-3xl md:text-4xl font-bold text-custom-orange mb-3">
            Project Today,
          </h1>
          <h2 class="text-3xl md:text-4xl font-bold mb-3">
            Portfolio Tomorrow:
          </h2>
          <h2 class="text-3xl md:text-4xl font-bold">
            Where Students Shine.
          </h2>
        </div>
        <div class="bg-stone-300 text-custom-orange h-80">

        </div>
        <div class="bg-custom-blue text-white h-1/5">
          <div class="container mx-auto">
          </div>
        </div>
      </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
