import { Bold, Code, Italic, Strikethrough, Underline } from "lucide-react";
import { Toggle } from "@/components/ui";
import { capitalizeFirstChar } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  editor: Editor;
  iconSize: number;
  toggleSize: ToggleSizeType;
}

const formattingOptions = [
  { command: "bold", icon: Bold },
  { command: "italic", icon: Italic },
  { command: "strike", icon: Strikethrough },
  { command: "underline", icon: Underline },
  { command: "code", icon: Code },
] as const;

export default function FormattingToggles({
  editor,
  iconSize,
  toggleSize,
}: PropsType) {
  return (
    <div className="flex items-center gap-1">
      {formattingOptions.map(({ command, icon: Icon }) => (
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
