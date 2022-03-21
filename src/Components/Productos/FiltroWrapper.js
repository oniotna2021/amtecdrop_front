// import '../Style/css/bootstrap.min.css';
// import '../Style/css/style.css';
import { useState } from 'react';


export default function FiltroWrapper(props) {

	const [busqueda, setBusqueda]= useState("");

	const handleChange=e=>{
		props.onChange(e.target.value)
		setBusqueda(e.target.value);
	  }



  return (
   
	<aside className="col-lg-3 order-lg-first">
		<div className="sidebar sidebar-shop">
			<div className="widget widget-clean">
				<label>Filtros:</label>
				<a href="prueba.html" className="sidebar-filter-clear">Limpiar filtros</a>
			</div>

			{/* inicio */}
			<form>
          	<div className="form-group">
            <label for="inputtxt">Filtro</label>
				<input 
					type="text" 
					className="form-control" 
					id="inputtxt" 
					aria-describedby="nombreHelp" 
					placeholder="" 
					value={busqueda}
					onChange={handleChange}/>
          </div>
          {/* <button 
              type="button" 
              className="btn btn-primary"
              onClick={onClicLogin}>
                  Ingresar
          </button> */}
      </form>



			{/* fin */}


			<div className="widget widget-collapsible">
				<h3 className="widget-title">
					<a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
						Categoria
					</a>
				</h3>

				<div className="collapse show" id="widget-1">
					<div className="widget-body">
						<div className="filter-items filter-items-count">
							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-1" />
									<label className="custom-control-label" htmlFor="cat-1">Agricola</label>
								</div>
								<span className="item-count">3</span>
							</div>

							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-2" />
									<label className="custom-control-label" htmlFor="cat-2">Fertilizantes</label>
								</div>
								<span className="item-count">0</span>
							</div>

							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-3" />
									<label className="custom-control-label" htmlFor="cat-3">Veterinaria</label>
								</div>
								<span className="item-count">4</span>
							</div>

							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-4" />
									<label className="custom-control-label" htmlFor="cat-4">Nutrición</label>
								</div>
								<span className="item-count">2</span>
							</div>

							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-5" />
									<label className="custom-control-label" htmlFor="cat-5">Equipos</label>
								</div>
								<span className="item-count">2</span>
							</div>

							<div className="filter-item">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="cat-6" />
									<label className="custom-control-label" htmlFor="cat-6">Mascotas</label>
								</div>
								<span className="item-count">1</span>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</aside>
  
  
  );
}