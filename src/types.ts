// etiket tipi
export type Tag = {
  label: string;
  value: string;
};

// formda alınacak olan note verisinin tipi
export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

// state'e kaydedilecek olan note verisinin tipi
export type Note = {
  id: string;
} & NoteData;
