import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', commits: 12 },
  { month: 'Feb', commits: 19 },
  { month: 'Mar', commits: 15 },
  { month: 'Apr', commits: 25 },
  { month: 'May', commits: 32 },
  { month: 'Jun', commits: 45 },
  { month: 'Jul', commits: 60 },
  { month: 'Aug', commits: 40 },
  { month: 'Sep', commits: 20 },
  { month: 'Oct', commits: 35 },
  { month: 'Nov', commits: 50 },
  { month: 'Dec', commits: 93 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gh-bg border border-gh-border p-2 rounded shadow-lg text-xs font-console">
        <p className="font-bold text-gh-text">{`${label}`}</p>
        <p className="text-gh-pink">{`Contributions: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const GitHubStats: React.FC = () => {
  return (
    <div className="w-full bg-gh-card border border-gh-border rounded-lg p-6 mb-8 relative overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 z-10 relative">
        <div>
          <h3 className="text-sm md:text-base text-gh-pink mb-4">gisolinha (giulia.)</h3>
          <div className="space-y-2 text-sm text-gh-muted font-console">
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gh-green"></span>
                <span className="text-gh-text">93 Contributions in 2025</span>
             </div>
             <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-gh-text" fill="currentColor" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" clipRule="evenodd"></path></svg>
                <span>7 Public Repos</span>
             </div>
             <div className="flex items-center gap-2">
                <svg className="w-3 h-3 text-gh-text" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>
                <span>Joined GitHub 3 years ago</span>
             </div>
          </div>
        </div>
        <div className="text-xs text-gh-pink mt-4 md:mt-0 font-pixel opacity-70">
          contributions
        </div>
      </div>
      
      <div className="h-48 w-full border-t border-gh-border pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: -30,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF91AF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF91AF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
                dataKey="month" 
                tick={{fontSize: 12, fill: '#8b949e', fontFamily: 'VT323'}} 
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                tick={{fontSize: 12, fill: '#8b949e', fontFamily: 'VT323'}} 
                axisLine={false}
                tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{stroke: '#30363d', strokeWidth: 1}} />
            <Area 
                type="monotone" 
                dataKey="commits" 
                stroke="#FF91AF" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorCommits)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GitHubStats;