<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';

@Component
export default class Row extends Vue {
  private name='row-item'

  @Prop({ required: false , default: 'div'})
  public readonly tag!: string;

  @Prop({ required: false , default: 0})
  public readonly gutter!: number;

  @Prop({ required: false , default: ''})
  public readonly type!: string;

  // Flex 主轴对齐方式，justify-content: flex-start | flex-end | center | space-between | space-around;
  @Prop({ required: false , default: 'start'})
  public readonly justify!: string;

  // Flex 交叉轴对齐方式，align-items: flex-start | flex-end | center | baseline | stretch;
  @Prop({ required: false , default: 'top'})
  public readonly align!: string ;
  @Provide('row')
  public row = this;

  public click(event: MouseEvent): void {
    this.$emit('click', event);
  }

  public render(h: any): any {
    const classList = ['row'];
    const margin = -this.gutter / 2 + 'px';
    let style = {
      marginLeft: margin,
      marginRight: margin,
    };
    if (this.type === 'flex') {
      style = Object.assign(style, {
        display: 'flex',
        ['justify-content']: this.justify,
        ['align-items']: this.align,
      });
    }
    return h(
      this.tag,
      {
        style: {
          overflow: 'hidden',
        },
      },
      // this.$slots.default
      [
        h(
          'div',
          {
            class: classList,
            style,
            on: {
              click: this.click,
            },
          },
          this.$slots.default,
        ),
      ],
    );
  }
}
</script>
<style lang="less">
.row {
	word-spacing: -5px;
	text-align: start;
}
</style>
