import React, { useState, useEffect } from "react";

//! components
import Header from "./components/Header";
import Form from "./components/Form";
import Climate from "./components/Climate";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: ""
  });
  const [readyfetch, setReadyfetch] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    // funcion de peticion
    const fetchAPI = async () => {
      const { city, country } = search;
      const apiKey = "APIHERE";
      const URI = `
      https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
      const res = await fetch(URI);
      const data = await res.json();
      setData(data);
      setReadyfetch(false);
      //!   Validating error
      if (parseInt(data.cod) === 404) {
        setError(true);
      } else {
        setError(false);
      }
    };

    //ejecutando la funcion
    if (readyfetch) {
      fetchAPI();
    }
  }, [readyfetch, search]);

  // carga condicional de componentes
  let ResultComponent;
  if (error) {
    ResultComponent = <Error>{data.message}</Error>;
  } else {
    ResultComponent = <Climate data={data} errorFetch={error} />;
  }

  return (
    <>
      <Header title="React Climate" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setReadyfetch={setReadyfetch}
              />
            </div>
            <div className="col m6 s12">{ResultComponent}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
