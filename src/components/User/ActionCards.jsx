import {
  BillsIcon,
  DetailsIcon,
  FlowIcon,
  FolderIcon,
  ScannerIcon,
  TaxIcon,
} from "../../../icons";

const ActionCard = ({ icon, text, isGray = false }) => {
  return (
    <button className="flex flex-col justify-between items-center px-9 py-11 bg-white rounded-2xl border-indigo-600 border-solid border-[5px] h-[250px] w-[180px] max-sm:p-5 max-sm:w-full max-sm:h-[200px] hover:bg-indigo-100 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center">{icon}</div>
      <h3 className="text-3xl font-black text-indigo-600 max-sm:text-3xl">
        {text}
      </h3>
    </button>
  );
};

export const ActionCards = () => {
  return (
    <div className="flex flex-col gap-8 max-md:items-center">
      <div className="flex gap-8 max-md:flex-col">
        <ActionCard
          icon={<BillsIcon color={"black"} size={40} />}
          text="Bills"
        />
        <ActionCard icon={<FlowIcon color={"black"} size={40} />} text="flow" />
        <ActionCard icon={<TaxIcon color={"black"} size={40} />} text="Tax" />
      </div>
      <div className="flex gap-8 max-md:flex-col">
        <ActionCard
          icon={<DetailsIcon color={"black"} size={40} />}
          text="Details"
        />
        <ActionCard
          icon={<ScannerIcon color={"black"} size={40} />}
          text="Scan"
          isGray
        />
        <ActionCard
          icon={<FolderIcon color={"black"} size={40} />}
          text="others"
        />
      </div>
    </div>
  );
};
