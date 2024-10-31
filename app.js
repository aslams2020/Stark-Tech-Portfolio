// Ensure header is rendered only once in App.js
const App = () => {
  return (
    <>
      <Header />  {/* Ensure Header is outside scroll-triggered components */}
      <Content />
    </>
  );
};
