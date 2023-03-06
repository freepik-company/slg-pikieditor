import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Text } from '@/classes/Text'
import type {Canvas} from "@/types";
import {ElementTypes} from "@/types";

export const useStore = defineStore('store', () => {

    const canvas = ref<Canvas>({
        size: { width: 700, height: 700 },
        backgroundColor: '#fff',
        elements: [],
    })

    const activeElement = ref(null);

    const setActive = (element) => {
        activeElement.value = element;
    }

    const addElement = (type: ElementTypes) => {
        if(type === ElementTypes.Text) {
            canvas.value.elements.push(Text.createDefault());
        }
    }

    return { canvas, activeElement, setActive, addElement }
})
