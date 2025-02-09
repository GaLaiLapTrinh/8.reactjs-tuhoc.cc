export default function Tabs({button, children}) {
  return (
    <>
      <menu>{button}</menu>
      {children}
    </>
  );
}
