<script setup lang="ts">

import {computed} from "vue";
import {Element} from "@/classes/Element";
import {Text} from "@/classes/Text";
import TextComponent from "@/components/TextComponent.vue";
import {useStore} from "@/stores/store";

const props = defineProps<{
  element: Element
}>();

const store = useStore();

const componentToRender = computed(() => {
  if (props.element instanceof Text) {
    return TextComponent;
  }
  return null;
});

const transformElement = computed(() => `translate(${props.element.position.x}px, ${props.element.position.y}px)`);
</script>
<template>
  <div
      :id="element.id"
      class="absolute"
      :class="{'target': store.activeElement?.id === element.id}"
      :style="{width: `${element.size.width}px`, height: `${element.size.height}px`, transform: transformElement}"
      @click="store.setActive(element)"
  >
    <component :is="componentToRender" :element="element" />
  </div>
</template>
