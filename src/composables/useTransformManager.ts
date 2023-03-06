import Moveable from "moveable";
import {useStore} from "@/stores/store";
import {onMounted, ref, watch} from "vue";

export const useTransformManager = () => {
    const store = useStore();
    const moveable = ref<Moveable>();

    onMounted(() => {
        moveable.value = new Moveable(document.body, {
            target: store.activeElement?.getDomElement(),
            // If the container is null, the position is fixed. (default: parentElement(document.body))
            container: document.body,
            originDraggable: false,
            draggable: true,
            resizable: true,
            scalable: true,
            rotatable: true,
            warpable: true,
            origin:false,
            // Enabling pinchable lets you use events that
            // can be used in draggable, resizable, scalable, and rotateable.
            keepRatio: true,
        });

        moveable.value.on("drag", ({ translate }) => {
            store.activeElement.position.x = translate[0];
            store.activeElement.position.y = translate[1];
        })
    });

    watch(() => store.activeElement, (element) => {
        if(!moveable.value) return;

        moveable.value.target = element.getDomElement();
    });
}
