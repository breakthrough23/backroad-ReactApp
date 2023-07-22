const Title = ({ title, subTitile }) => {
  return (
    <div className="section-title">
      <h2>
        {title}
        <span>{subtitle}</span>
      </h2>
    </div>
  );
};

export default Title;
