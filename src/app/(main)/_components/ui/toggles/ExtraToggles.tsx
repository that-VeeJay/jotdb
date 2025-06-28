import { Quote, CodeXml } from "lucide-react";
import { Toggle } from "@/components/ui";
import { capitalizeFirstChar } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import { type ToggleSizeType } from "@/lib/types";
interface PropsType {
  editor: Editor;
  iconSize: number;
  toggleSize: ToggleSizeType;
}

const extraOptions = [
  { command: "blockquote", icon: Quote },
  { command: "codeBlock", icon: CodeXml },
] as const;

export default function ExtraToggles({
  editor,
  iconSize,
  toggleSize,
}: PropsType) {
  return (
    <div className="flex items-center gap-1">
      {extraOptions.map(({ command, icon: Icon }) => (
        <Toggle
          key={command}
          size={toggleSize}
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
