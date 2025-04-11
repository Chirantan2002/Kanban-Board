import { Separator } from "@radix-ui/react-separator";

type TaskCard = {
  label: string;
  value: number;
};

export default function TaskStats() {
  const statisticCards: TaskCard[] = [
    { label: "total", value: 23 },
    { label: "In progress", value: 231 },
    { label: "waiting", value: 342 },
    { label: "completed", value: 212 },
  ];

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-xl">Tasks</span>
      <div className="grid grid-cols-2 gap-3 mt-3">
        {statisticCards.map((statCard, idx) => (
          <SingleCard key={idx} statCard={statCard} />
        ))}
      </div>
    </div>
  );
}

function SingleCard({ statCard }: { statCard: TaskCard }) {
  return (
    <div>
      <span className="text-gray-600 text-[12px]">
        {statCard.label.toUpperCase()}
      </span>
      <div className="flex items-center gap-2">
        <Separator className="w-1 h-4 bg-primary" orientation={"vertical"} />
        <span className="font-bold text-lg">{statCard.value}</span>
      </div>
    </div>
  );
}
