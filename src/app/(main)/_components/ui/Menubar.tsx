"use client";

import { ScrollArea, ScrollBar, VerticalSeparator } from "@/components/ui";
import { Editor } from "@tiptap/react";

import ListToggles from "./toggles/ListToggles";
import ExtraToggles from "./toggles/ExtraToggles";
import HeadingDropdown from "./toggles/HeadingDropdown";
import HighlightDropdown from "./toggles/HighlighDropdown";
import TextAlignDropdown from "./toggles/TextAlignDropdown";
import FormattingToggles from "./toggles/FormattingToggles";

import { type ToggleSizeType } from "@/lib/types";

const TOGGLE_SIZE: ToggleSizeType = "sm";
const ICON_SIZE = 18;

export default function Menubar({ editor }: { editor: Editor }) {
  if (!editor) return null;

  const commonProps = { editor, iconSize: ICON_SIZE, toggleSize: TOGGLE_SIZE };

  const components = [
    <HeadingDropdown key="heading" {...commonProps} />,
    <FormattingToggles key="formatting" {...commonProps} />,
    <ListToggles key="list" {...commonProps} />,
    <TextAlignDropdown key="align" {...commonProps} />,
    <HighlightDropdown key="highlight" {...commonProps} />,
    <ExtraToggles key="extra" {...commonProps} />,
  ];

  return (
    <ScrollArea className="max-w-full">
      <div className="flex items-center">
        {components.map((Component, index) => (
          <div key={index} className="flex items-center">
            {Component}
            {index < components.length - 1 && <VerticalSeparator />}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="h-2" />
    </ScrollArea>
  );
}
