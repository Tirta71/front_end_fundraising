export {};
declare module "wowjs" {
  const WOW: any;
  export default WOW;
}

declare global {
  interface Window {
    snap: any;
  }
}
