import { useEffect, useState } from "react";
import { Api, Product } from "../services/Api";

export interface State {
  list:Product[]
}

export function Home() {
  const [state, setState] = useState<State>({
    list: [],
  });

  useEffect(function () {
    (function () {
      getProducts();
    })();
  }, []);

  const getProducts = async () => {
    const response = await Api.getProducts();
    setState({ list: response });
  };

  return (
    <div>
     <div className="nav">
        <a href="/" className="title">electron-React</a>
     </div>
    
      <div className="container-cards">
        {state.list.map((item) => (
          <div className="column" key={item.id}>
            <div className="card">
              <div className="card-body">

              <div className="card-title">
                {item.name}
                </div>

                <div className="card-price">
                {item.price}
                </div>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
