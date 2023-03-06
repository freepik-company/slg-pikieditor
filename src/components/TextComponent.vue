<script setup lang="ts">
import {Text} from "@/classes/Text";

const props = defineProps<{
  element: Text
}>();
</script>
<template>
  <div class="flex items-center justify-center h-full w-full">
    {{element.content}}
  </div>
</template>
