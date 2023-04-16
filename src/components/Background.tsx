export const Background = () => (
  <video
    autoPlay
    controls={false}
    loop
    muted
    style={{
      position: 'fixed',
      minWidth: '100vw',
      minHeight: '100vh',
      filter: 'saturate(0) brightness(0.3)',
    }}
  >
    <source src="/background.mp4"/>
  </video>
);