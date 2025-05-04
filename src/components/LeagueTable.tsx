import { LeagueTableEntry } from '../types/LeagueTable';

interface LeagueTableProps {
  data: LeagueTableEntry[];
}

const LeagueTable: React.FC<LeagueTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pos</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">P</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">W</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">D</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">L</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GF</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GA</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GD</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pts</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((entry) => (
            <tr key={entry.team.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img src={entry.team.logo} alt={entry.team.name} className="h-6 w-6 mr-2" />
                  <span className="text-sm font-medium text-gray-900">{entry.team.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.played}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.win}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.draw}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.lose}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.goals.for}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.all.goals.against}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.goalsDiff}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.points}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.form}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable; 