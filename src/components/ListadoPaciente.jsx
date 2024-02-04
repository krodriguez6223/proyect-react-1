import Paciente from "./Paciente"


const ListadoPaciente = ({ pacientes }) => {

    return (
        <div className="md:w-1/2 lgw-3/5 md:h-screen overflow-y-scroll mt-10 md:mt-0">
           
            { pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Paciente</h2>
                    <p className="text-cl mt-5 b-10 text-center">Administra
                    <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>

                    {
                        pacientes.map(paciente => (
                            <Paciente
                            key={paciente.id}
                                paciente={paciente}
                            />
                        ))
                    }

                </>
            ): (
                <>
                     <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                     <p className="text-cl mt-5 b-10 text-center">Comienza {''}
                    <span className="text-indigo-600 font-bold">Agregando pacientes</span></p>
                </>

            )}
            
        </div>
    )
}

export default ListadoPaciente