import { Toggle } from "@/components/ui";
import { List, ListOrdered } from "lucide-react";
import { capitalizeFirstChar } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  editor: Editor;
  iconSize: number;
  toggleSize: ToggleSizeType;
}

const listOptions = [
  { command: "bulletList", icon: List },
  { command: "orderedList", icon: ListOrdered },
] as const;

export default function ListToggles({
  editor,
  iconSize,
  toggleSize,
}: PropsType) {
  return (
    <div className="flex items-center gap-1">
      {listOptions.map(({ command, icon: Icon }) => (
        <Toggle
          size={toggleSize}
          key={command}
          pressed={editor.isActive(command)}
          onPressedChange={() =>
            (editor.chain().focus() as any)
              [`toggle${capitalizeFirstChar(command)}`]()
              .run()
          }
        >
          <Icon size={iconSize} />
        </Toggle>
      ))}
    </div>
  );
}
