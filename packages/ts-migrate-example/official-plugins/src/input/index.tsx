/** THIS_IS_A_NEWLINE * */
// @ts-expect-error FIXME: 'index.tsx' cannot be compiled under '--isolatedMo...
class Hi {
  sayHi = (msg: any) => (msg2: any) => console.log('hi there', msg, msg2);
}
/** THIS_IS_A_NEWLINE * */
const a = (msg: any) => console.log('hi there', msg);

type ComponentProps = {
  children: React.ReactNode;
};
/** THIS_IS_A_NEWLINE * */
const Component = (props: ComponentProps) => (
  <div onClick={(e) => console.log(e)}>{props.children}</div>
);
