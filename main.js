import React from 'react';

const MainPage = () => {
  const fixedParagraph = 'Follow the link to attempt the test.';

  return (
    <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      <p>{fixedParagraph}</p>
    </div>
  );
};

export default MainPage;
