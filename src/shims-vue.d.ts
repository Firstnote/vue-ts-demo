declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare const BScroll: any
declare module 'better-scroll' {
  export = BScroll;
}