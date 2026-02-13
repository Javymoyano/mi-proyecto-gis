import { useState } from 'react';

function NewReportForm({ onCancel, onSubmit }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        priority: '',
        location: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="h-full overflow-y-auto bg-base-100 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-primary mb-2">Nuevo Reporte</h2>
                    <p className="text-base-content/70">Complete el formulario para registrar un nuevo reporte en la reserva</p>
                </div>

                <form onSubmit={handleSubmit} className="card bg-base-200 border border-base-300">
                    <div className="card-body space-y-6">
                        {/* Título */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Título del Reporte</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Ej: Avistamiento de fauna silvestre"
                                className="input input-bordered bg-base-100"
                                required
                            />
                        </div>

                        {/* Categoría y Prioridad */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Categoría</span>
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="select select-bordered bg-base-100"
                                    required
                                >
                                    <option value="">Seleccionar...</option>
                                    <option value="Fauna">Fauna</option>
                                    <option value="Flora">Flora</option>
                                    <option value="Infraestructura">Infraestructura</option>
                                    <option value="Seguridad">Seguridad</option>
                                    <option value="Mantenimiento">Mantenimiento</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Prioridad</span>
                                </label>
                                <select
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    className="select select-bordered bg-base-100"
                                    required
                                >
                                    <option value="">Seleccionar...</option>
                                    <option value="Alta">Alta</option>
                                    <option value="Media">Media</option>
                                    <option value="Baja">Baja</option>
                                </select>
                            </div>
                        </div>

                        {/* Ubicación y Fecha */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Ubicación</span>
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Ej: Sector Norte, Sendero A"
                                    className="input input-bordered bg-base-100"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Fecha</span>
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="input input-bordered bg-base-100"
                                    required
                                />
                            </div>
                        </div>

                        {/* Descripción */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Descripción</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describa los detalles del reporte..."
                                className="textarea textarea-bordered bg-base-100 h-32"
                                required
                            />
                        </div>

                        {/* Botones */}
                        <div className="flex gap-4 justify-end pt-4">
                            <button
                                type="button"
                                onClick={onCancel}
                                className="btn btn-ghost"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Guardar Reporte
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewReportForm;
