import CulturalForm from "@/feature/culturalForm/culturalForm";

const CulturalQuestionaire = () => {
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto max-h-90">
      <div className="max-w-screen-md">
        <CulturalForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default CulturalQuestionaire;
