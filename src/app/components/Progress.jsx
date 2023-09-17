import React from 'react';

const Progress = ({ currentPage }) => {
  const totalSteps = 3;
  const progressBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
  };

  const stepStyle = {
    height: '100%',
    backgroundColor: '#ccc',
    flexGrow: 1,
    transition: 'background-color 0.3s ease',
    borderRight: '1px solid #eaeaea',
    position: 'relative',
  };

  const activeStepStyle = {
    backgroundColor: '#0070f3',
  };

  const indicatorStyle = {
    position: 'absolute',
    top: '-1px', // Ajusta la posición verticalmente para que se salga del contorno
    right: '-1px', // Ajusta la posición horizontalmente para que se salga del contorno
    width: '20px', // Ajusta el ancho del triángulo
    height: '20px', // Ajusta la altura del triángulo
    backgroundColor: '#ffffff',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    transform: 'rotate(180deg)', // Rotación de 180 grados
  };

  const getStepStyles = () => {
    const stepStyles = [];
    for (let step = 1; step <= totalSteps; step++) {
      const isActive = step <= currentPage;
      stepStyles.push({
        ...stepStyle,
        ...(isActive && activeStepStyle),
      });
    }
    return stepStyles;
  };

  return (
    <div>
      <div style={progressBarStyle}>
        {getStepStyles().map((style, index) => (
          <div key={index} style={style}>
            {index === currentPage - 1 && <div style={indicatorStyle}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
