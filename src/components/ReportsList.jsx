import { useState } from 'react';

function ReportsList({ onSelectReport, onNewReport }) {
    const [selectedReportId, setSelectedReportId] = useState('REP-8219');
    const [reports] = useState([
        {
            id: 'REP-8219',
            title: 'Wildlife Sighting',
            submitted: 'Oct 24, 2023',
            time: '09:42 AM',
            category: 'Wildlife Sighting',
            categoryColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
            status: 'In Progress',
            statusDot: 'bg-blue-500',
            statusText: 'text-blue-500',
            location: 'North Ridge Path',
            coordinates: '◎4.42.62 / -72.012',
            description: 'Large predator tracks observed near the northern crossing point. Suspected puma sighting. Requested additional camera trap deployment.',
            reporter: 'Ranger Smith',
        },
        {
            id: 'REP-8215',
            title: 'Illegal Activity',
            submitted: 'Oct 23, 2023',
            time: '03:15 PM',
            category: 'Illegal Activity',
            categoryColor: 'bg-red-500/10 text-red-500 border-red-500/20',
            status: 'Flagged',
            statusDot: 'bg-red-500 animate-pulse',
            statusText: 'text-red-500 font-semibold',
            location: 'West Perimeter Fence',
            coordinates: '◎4.41.23 / -72.045',
            description: 'Unauthorized access detected at west perimeter fence.',
            reporter: 'Ranger Johnson',
        },
        {
            id: 'REP-8204',
            title: 'Maintenance',
            submitted: 'Oct 22, 2023',
            time: '11:00 AM',
            category: 'Maintenance',
            categoryColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            status: 'Resolved',
            statusDot: 'bg-[#13ec5b]',
            statusText: '',
            location: 'Valley Bridge',
            coordinates: '◎4.40.15 / -72.033',
            description: 'Bridge requires structural inspection and repairs.',
            reporter: 'Ranger Davis',
        },
        {
            id: 'REP-8199',
            title: 'Path Obstruction',
            submitted: 'Oct 21, 2023',
            time: '08:20 AM',
            category: 'Path Obstruction',
            categoryColor: 'bg-slate-500/10 text-slate-500 border-slate-500/20',
            status: 'Open',
            statusDot: 'bg-slate-400',
            statusText: '',
            location: 'East Oak Trail',
            coordinates: '◎4.39.88 / -72.021',
            description: 'Fallen tree blocking main trail access.',
            reporter: 'Ranger Martinez',
        },
        {
            id: 'REP-8192',
            title: 'Wildlife Sighting',
            submitted: 'Oct 20, 2023',
            time: '01:45 PM',
            category: 'Wildlife Sighting',
            categoryColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
            status: 'Resolved',
            statusDot: 'bg-[#13ec5b]',
            statusText: '',
            location: 'South Wetlands',
            coordinates: '◎4.38.92 / -72.056',
            description: 'Rare bird species spotted in wetlands area.',
            reporter: 'Ranger Chen',
        },
    ]);

    const selectedReport = reports.find(r => r.id === selectedReportId) || reports[0];

    return (
        <div className="h-full flex bg-[#102216]">
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="h-16 border-b border-[#1f3a28] bg-[#162a1d]/80 backdrop-blur-md flex items-center justify-between px-8">
                    <h1 className="text-xl font-bold">Report History</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search report ID, tag, or ranger..."
                                className="pl-10 pr-4 py-2 bg-[#102216] border-transparent focus:border-[#13ec5b] focus:ring-0 rounded-lg text-sm w-72 text-white placeholder-slate-500"
                            />
                        </div>
                        <button
                            onClick={onNewReport}
                            className="bg-[#13ec5b] hover:bg-[#13ec5b]/90 text-[#102216] font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-transform active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-sm">New Report</span>
                        </button>
                    </div>
                </div>

                {/* Filters Bar */}
                <div className="px-8 py-4 bg-[#102216]/30 flex flex-wrap items-center gap-4 border-b border-[#1f3a28]">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Filters:</span>
                        <select className="bg-[#162a1d] border-[#1f3a28] rounded-lg text-xs py-1.5 text-white focus:ring-[#13ec5b] focus:border-[#13ec5b]">
                            <option>All Categories</option>
                            <option>Wildlife Sighting</option>
                            <option>Path Obstruction</option>
                            <option>Illegal Activity</option>
                            <option>Maintenance</option>
                        </select>
                        <select className="bg-[#162a1d] border-[#1f3a28] rounded-lg text-xs py-1.5 text-white focus:ring-[#13ec5b] focus:border-[#13ec5b]">
                            <option>All Statuses</option>
                            <option>Open</option>
                            <option>In Progress</option>
                            <option>Resolved</option>
                            <option>Flagged</option>
                        </select>
                        <select className="bg-[#162a1d] border-[#1f3a28] rounded-lg text-xs py-1.5 text-white focus:ring-[#13ec5b] focus:border-[#13ec5b]">
                            <option>Last 30 Days</option>
                            <option>Last 7 Days</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-xs text-slate-500">
                        <span>Showing <b className="text-white">1-12</b> of <b className="text-white">284</b> results</span>
                    </div>
                </div>

                {/* Table View */}
                <div className="flex-1 overflow-auto p-8">
                    <div className="bg-[#162a1d] border border-[#1f3a28] rounded-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[#1f3a28] bg-white/5">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Report ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Submitted</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Location</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1f3a28]">
                                {reports.map((report) => (
                                    <tr
                                        key={report.id}
                                        onClick={() => setSelectedReportId(report.id)}
                                        className="hover:bg-white/5 transition-colors group cursor-pointer"
                                    >
                                        <td className="px-6 py-4 font-mono text-sm text-[#13ec5b] font-medium">#{report.id}</td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-white">{report.submitted}</div>
                                            <div className="text-xs text-slate-500">{report.time}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${report.categoryColor}`}>
                                                {report.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${report.statusDot}`}></span>
                                                <span className={`text-sm ${report.statusText}`}>{report.status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-400">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                </svg>
                                                {report.location}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 hover:bg-[#13ec5b]/20 hover:text-[#13ec5b] rounded-lg text-slate-400" title="View on Map">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                                                    </svg>
                                                </button>
                                                <button className="p-2 hover:bg-[#13ec5b]/20 hover:text-[#13ec5b] rounded-lg text-slate-400" title="Edit Details">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#13ec5b]/5 border border-[#13ec5b]/20 p-4 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#13ec5b] rounded-lg flex items-center justify-center text-[#102216]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">142</p>
                                <p className="text-xs text-slate-500 uppercase font-semibold">Reports Resolved</p>
                            </div>
                        </div>
                        <div className="bg-[#162a1d]/40 border border-[#1f3a28] p-4 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">28</p>
                                <p className="text-xs text-slate-500 uppercase font-semibold">Currently Active</p>
                            </div>
                        </div>
                        <div className="bg-[#162a1d]/40 border border-[#1f3a28] p-4 rounded-xl flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">4</p>
                                <p className="text-xs text-slate-500 uppercase font-semibold">High Priority Issues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Location Preview */}
            <div className="w-80 border-l border-[#1f3a28] bg-[#162a1d] hidden xl:flex flex-col">
                <div className="p-6 border-b border-[#1f3a28]">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-white">Location Preview</h3>
                </div>
                <div className="p-4 flex-1 overflow-auto">
                    <div className="h-64 rounded-xl bg-[#102216] relative overflow-hidden mb-6 group cursor-crosshair">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 bg-[#13ec5b] rounded-full flex items-center justify-center shadow-lg shadow-[#13ec5b]/40">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#102216]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute bottom-3 left-3 bg-[#102216]/80 backdrop-blur-md px-2 py-1 rounded text-[10px] border border-white/10 text-white">
                            {selectedReport.coordinates}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-[#102216] p-4 rounded-xl border border-[#1f3a28]">
                            <h4 className="text-xs font-bold text-[#13ec5b] uppercase mb-2">Selected Report Info</h4>
                            <p className="text-sm font-semibold mb-1 text-white">#{selectedReport.id} {selectedReport.title}</p>
                            <p className="text-xs text-slate-500 mb-4 leading-relaxed">{selectedReport.description}</p>
                            <div className="flex items-center justify-between pt-3 border-t border-[#1f3a28]">
                                <span className="text-[10px] text-slate-500">Reported by: {selectedReport.reporter}</span>
                                <button
                                    onClick={() => onSelectReport(selectedReport)}
                                    className="text-[#13ec5b] text-[10px] font-bold uppercase hover:underline"
                                >
                                    Full Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <button className="w-full bg-[#102216] text-slate-300 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#13ec5b] hover:text-[#102216] transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                        Open Interactive Map
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReportsList;
