export default function Tabs({button, children, ButtonsContainer = "menu"}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{button}</ButtonsContainer>
      {children}
    </>
  );
}
