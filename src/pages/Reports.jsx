import ReportTable from "../components/ReportTable";
import ChartCard from "../components/ChartCard";

export default function Reports() {
  const reports = [
    { address: "0xabc123...", risk: 82, date: "2025-09-16" },
    { address: "0xdef456...", risk: 45, date: "2025-09-15" },
    { address: "0xghi789...", risk: 20, date: "2025-09-14" },
  ];

  const chartData = [
    { date: "Sep 10", fraudCases: 5 },
    { date: "Sep 11", fraudCases: 12 },
    { date: "Sep 12", fraudCases: 8 },
    { date: "Sep 13", fraudCases: 15 },
    { date: "Sep 14", fraudCases: 7 },
    { date: "Sep 15", fraudCases: 18 },
    { date: "Sep 16", fraudCases: 10 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Reports</h1>
      <ChartCard data={chartData} />
      <ReportTable reports={reports} />
    </div>
  );
}
