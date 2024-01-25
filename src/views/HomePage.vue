<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <div class="flex justify-between items-center w-full h-12 px-5">
        <!-- Logo and title -->
        <div class="flex items-center pl-5">
          <img src="/src/output-onlinepngtools-2.png" alt="CodeExhibit Logo" class="h-10" />
          <ion-title class="text-codeExhibit font-londrina text-3xl normal-case font-normal leading-normal -m-4">CodeExhibit</ion-title>
        </div>

        <!-- Navigation buttons -->
        <div class="flex gap-2">
          <button class="text-white text-center font-semibold text-sm bg-transparent">Home</button>
          <button class="text-white text-center font-semibold text-sm bg-transparent">About</button>
          <button class="text-white text-center font-semibold text-sm bg-transparent">Contact</button>
        </div>

        <!-- Projects button -->
        <button class="bg-codeExhibit px-6 py-2 text-white rounded-full">Projects</button>
      </div>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true" class="content-style">
    <img src="/src/Rectangle1.svg" alt="Rectangle1" class="w-full h-auto mx-auto -z-1" />
  </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
</script>

<style scoped>
</style>
