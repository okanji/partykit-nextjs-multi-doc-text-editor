import Party from "partykit/server";
import { onConnect } from "y-partykit";
import { createClient } from "@supabase/supabase-js";
import { TiptapTransformer } from "@hocuspocus/transformer";
import { getBaseExtensions } from "@/tiptapExtensions";
import * as Y from "yjs";

const transformer = TiptapTransformer.extensions(getBaseExtensions());
const rootFragmentField = "default";

const SUPABASE_URL = "";
const SUPABASE_KEY = "";

export default class PartyKitServer implements Party.Server {
  constructor(readonly party: Party.Party) {}

  async onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
    // Create a single supabase client for interacting with your database
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { persistSession: false }
    });

    await onConnect(connection, this.party, {
      load: async () => {
        const data = (await this.party.storage.get(this.party.id)) as
          | Uint8Array
          | undefined;

        const doc = new Y.Doc();

        if (data) {
          Y.applyUpdate(doc, data);
        }
        // return new Y.Doc();
        return doc;
      },

      callback: {
        handler: async (doc) => {
          console.log("HANDLER", this.party.id);

          await this.party.storage.put(
            this.party.id,
            Y.encodeStateAsUpdate(doc)
          );

          const json = transformer.fromYdoc(doc, rootFragmentField);

          const { data, error } = await supabase
            .from("documents")
            .upsert(
              {
                name: this.party.id,
                document: json
              },
              { onConflict: "name" }
            )
            .select();

          if (error) {
            console.error("ERROR", error);
          }
        }
      }
    });
  }
}
