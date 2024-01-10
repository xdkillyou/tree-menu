import { defineStore } from 'pinia';

export const usePathStore = defineStore('path', () => {
  const path = useStorage('path', '');

  function updatePath(newPath: string) {
    path.value = newPath;
  }

  return { path, updatePath };
});
