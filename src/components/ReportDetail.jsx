function ReportDetail({ report, onBack }) {
    if (!report) return null;

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pendiente': return 'badge-warning';
            case 'En Proceso': return 'badge-info';
            case 'Resuelto': return 'badge-success';
            default: return 'badge-ghost';
        }
    };

    return (
        <div className="h-full overflow-y-auto bg-base-100 p-6">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    className="btn btn-ghost gap-2 mb-6"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Volver
                </button>

                <div className="card bg-base-200 border border-base-300">
                    <div className="card-body">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-2">{report.title}</h2>
                                <div className="flex gap-3">
                                    <span className={`badge ${getStatusColor(report.status)}`}>
                                        {report.status}
                                    </span>
                                    <span className="badge badge-outline">{report.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-primary">Información General</h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-sm text-base-content/70">Ubicación</p>
                                        <p className="font-medium flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                            </svg>
                                            {report.location}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-base-content/70">Fecha</p>
                                        <p className="font-medium flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                            </svg>
                                            {report.date}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-base-content/70">Prioridad</p>
                                        <p className={`font-bold ${report.priority === 'Alta' ? 'text-error' :
                                                report.priority === 'Media' ? 'text-warning' : 'text-info'
                                            }`}>
                                            {report.priority}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-primary">Descripción</h3>
                                <p className="text-base-content/90 leading-relaxed">
                                    {report.description || 'Este reporte documenta una observación importante en la reserva natural. Se requiere seguimiento y acción según la prioridad asignada.'}
                                </p>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="flex gap-3 justify-end">
                            <button className="btn btn-outline">
                                Editar
                            </button>
                            <button className="btn btn-primary">
                                Actualizar Estado
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportDetail;
