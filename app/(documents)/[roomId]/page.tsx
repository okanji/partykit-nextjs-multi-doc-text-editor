"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import useYProvider from "y-partykit/react";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";

import { getBaseExtensions } from "@/tiptapExtensions";

export default function Page({ params }: { params: { roomId: string } }) {
  const provider = useYProvider({
    host: "localhost:1999",
    room: params.roomId,
    options: {}
  });

  const editor = useEditor({
    extensions: [
      ...getBaseExtensions(),
      Collaboration.configure({
        document: provider.doc
      }),
      // Register the collaboration cursor extension
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: provider.id,
          color: "#f783ac"
        }
      })
    ]
  });

  return <EditorContent style={{ border: "solid" }} editor={editor} />;
}
