// define RecordItem Type
type RootState = {
  recordList:  RecordItem[];
  tagList:  Tag[];
  currentTag?: Tag;
  createRecordError:  Error | null;
}
type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number; // data type
  createdAt?: string; // class or constructor
}
type Tag = {
  id: string;
  name: string;
}
