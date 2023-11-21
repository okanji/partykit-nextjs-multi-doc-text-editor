## PartyKit example: multi document collaborative text editor

![text editor demo](./text-editor.gif)

This example app features a collaborative text editor built with [Yjs](https://yjs.dev/), [Tiptap](https://tiptap.dev/) and [Supabase](https://supabase.com/).

## Getting Started

First, copy the `.env.example` file to `.env` in the project root.

```bash
cp .env.example .env
```

Then, create a new Supabase project and open the created `.env` file to fill in the missing environment variables with the new project information.

In Supabase's SQL editor, create a `documents` table with:

```sql
create table
  public.documents (
    id bigint generated by default as identity,
    created_at timestamp with time zone null default now(),
    document json null,
    name text null,
    constraint documents_pkey primary key (id),
    constraint documents_name_key unique (name)
  ) tablespace pg_default;
```

Then, run the development server:

```bash
npm install
npm run dev
```

This will start the PartyKit development server at port **1999**.

Open [http://localhost:3000](http://localhost:3000) with your browser.

To create a new collaborative document (which will create a new partykit room), simply add a path segment to the base URL. For example http://localhost:3000/myDocument.

Accessing the same URL in a different browser tab will take you to the same collaborative document.

Enjoy your collaboration! 🎈🎉
