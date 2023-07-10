import "./EmotionItem.css";

const EmotionItem = ({ id, img, name, onClick, isSelceted }) => {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <div
      className={[
        "EmotionItem",
        isSelceted ? `EmotionItem_on_${id}` : `EmotionItem_off`,
      ].join(" ")}
      onClick={handleOnClick}
    >
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
