import '../Style/css/bootstrap.min.css';
import '../Style/css/style.css';

export default function PageWrapper(props) {

  return (
    <div>
      <main className="main">
        	<div className="page-header text-center" >
        		<div className="container">
        			<h1 className="page-title">TODOS NUESTROS PRODUCTOS</h1>
        		</div> 
        	</div>
			
			<br />

            <div className="page-content">
                <div className="container">
                	<div className="row"> 
                		
					{props.children}

                	</div>
                </div>
            </div>
      </main>
    </div>
  
  );
}