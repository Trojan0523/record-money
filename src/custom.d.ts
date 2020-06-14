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
type TagListModel =
  {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated'; // 联合类型，类似于枚举
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    remove: (id: string) => boolean;
    save: () => void;
  }
