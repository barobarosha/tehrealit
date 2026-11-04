declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string) => void;
    YANDEX_METRIKA_ID: string;
  }
}

export {};
