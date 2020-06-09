// define RecordItem Type
type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // data type
  createdAt?: Date; // class or constructor
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

interface Window {
  tagList: Tag[];
}