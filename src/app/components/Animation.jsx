
const Animation = () => {
  return (
    <div id="loading" className="violet-red-loading">
      <div id="loading-center">
        <div className="spinner">
          <div className="blob top"></div>
          <div className="blob bottom"></div>
          <div className="blob left"></div>
          <div className="blob move-blob"></div>
        </div>
      </div>
    </div>
  );
};

export default Animation;