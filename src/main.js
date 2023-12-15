import React from 'react';

const MainPage = () => {
  const fixedParagraph = 'Quantitative Checklist for Autism in Toddlers (Q-CHAT) : The Q-CHAT is a normally distributed quantitative measure of autistic traits in children 18-24 months old. It is the first ASC screening instrument, designed for use with toddlers, that has been shown to produce a range of scores that approximates to a normal distribution. If your child scores more than 3 out of 10, the health professional may consider referring your child for a multi-disciplinary assessment. Follow the link to attempt the assessment : https://docs.google.com/forms/d/e/1FAIpQLSd5JGWCRt7RsdD7KRH4NX_EkNcyLN5fjdde8QGpIkTzmK3qUA/viewform?usp=sharing ' ;

  return (
    <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      <p>{fixedParagraph}</p>
    </div>
  );
};

export default MainPage;
