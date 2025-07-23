import {
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

/**
 * Custom hook to initialize and configure multiple DnD Kit input sensors.
 *
 * This hook sets up:
 * - PointerSensor: for mouse/touchpad dragging.
 * - TouchSensor: for touch screen interactions.
 * - KeyboardSensor: for keyboard accessibility with a sortable-aware coordinate getter.
 *
 * @returns An array of sensor descriptors to be passed to `DndContext`.
 */
export function useDnDSensors() {
  return useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
}
