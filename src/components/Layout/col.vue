<script lang='ts'>
import {Component, Prop, Vue, Inject} from 'vue-property-decorator';

@Component
export default class Col extends Vue {
  @Prop({
    required: false,
    default: 'div',
  })
  public readonly tag!: string;

  @Prop({
    required: true,
    default: 0,
  })
  public readonly span!: number;

  @Prop({
    required: false,
    default: 0,
  })
  public readonly offset!: number;

  @Inject('row')
  public readonly row: any;

  public click(event: MouseEvent): void {
    this.$emit('click', event);
  }
  public render(h: any): any {
    const classList = ['col'];
    const padding: string = this.row.gutter / 2 + 'px';
    const style: any = {
      paddingLeft: padding,
      paddingRight: padding,
    };
    classList.push(`col-${this.span}`);
    if (this.offset) {
      classList.push(`col-offset-${this.offset}`);
    }
    return h(
      this.tag,
      {
        class: classList,
        style,
        on: {
          click: this.click,
        },
      },
      this.$slots.default,
    );
  }

}
</script>
<style lang='stylus'>
for n in (1...25)
  .col-{n}
    width (100%/24)*n
    background-color even(n)?rgb(60,150,227):rgb(60,199,227)
  .col-offset-{n}
    margin-left (100%/24)*n

.col
  float left
  box-sizing border-box
  min-height 20px
  padding 0 20px
  background-clip content-box
</style>