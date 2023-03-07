<script setup lang="ts">
import {Text} from "@/classes/Text";

const props = defineProps<{
  element: Text
}>();
</script>
<template>
  <div class="flex items-center justify-center h-full w-full" :style="{background: element.background}">
    {{element.content}}
  </div>
</template>
