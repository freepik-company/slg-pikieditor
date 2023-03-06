<script setup lang="ts">
import {useStore} from "@/stores/store";
import Element from "@/components/ElementComponent.vue";
import {useTransformManager} from "@/composables/useTransformManager";
import {ElementTypes} from "@/types";

const store = useStore();
useTransformManager();
</script>

<template>
  <div class="flex flex-col align-center justify-center h-full bg-gray-200">
    <div class="mt-8 flex justify-center">
      <button class="p-2 rounded border border-blue-500" @click="store.addElement(ElementTypes.Text)">Add Text</button>
    </div>
    <div class="m-auto w-4/5 h-4/5 relative bg-blue-300 relative"  :style="{backgroundColor: store.canvas.backgroundColor, width: `${store.canvas.size.width}px`, height: `${store.canvas.size.height}px`}">
      <Element v-for="element in store.canvas.elements" :key="element.id" :element="element" />
    </div>
  </div>

</template>
