import React, { useMemo, useState, useEffect } from "react";
// import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';

// import Table from "./Table";
import ObsTable from "./ObsTable";
import RegaTable from "./RegaTable";
import OpsCultTable from "./OpsCultTable";
import BioControlTable from "./BioControlTable";
import FertTable from "./FertTable";
import PulvTable from "./PulvTable";
import CropTable from "./CropTable";
import "./App.css";
import Header from './Header';
import Footer from './Footer';


import opsCultDataFile from './opsCultData.json'
import obsDataFile from './obsData.json'
import regaDataFile from './regaData.json'
import pulvDataFile from './pulvData.json'
import cropDataFile from './cropData.json'
import fertDataFile from './fertData.json'
import bioControlDataFile from './bioControlData.json'

function App() {

  const obsColumns = useMemo(
    () => [
      {
        Header: "Observations",
        columns: [
          {
            Header: "ID",
            accessor: "observation.id"
          },
          {
            Header: "Recomendations",
            accessor: "observation.exportable"
          },
          {
            Header: "Date",
            accessor: "observation.exportable"
          },
          {
            Header: "Subplots",
            accessor: "observation.recommendation"
          },
          {
            Header: "Type",
            accessor: "observation.date"
          },
          {
            Header: "Details",
            accessor: "observation.type"
          },
          {
            Header: "Notes",
            accessor: "observation.quantity"
          },
          {
            Header: "Updated At",
            accessor: "observation.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "observation.updatedBy"
          }
        ]
      }
    ],
    []
  );

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Observations",
  //       columns: [
  //         {
  //           Header: "ID",
  //           accessor: "show.name"
  //         },
  //         {
  //           Header: "Exportable",
  //           accessor: "show.type"
  //         },
  //         {
  //           Header: "Recomendations",
  //           accessor: "show.language"
  //         },
  //         {
  //           Header: "Date",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Subplots",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Type",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Details",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Notes",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Updated At",
  //           accessor: "show.status"
  //         },
  //         {
  //           Header: "Updated By",
  //           accessor: "show.status"
  //         }
  //       ]
  //     }
  //   ],
  //   []
  // );

  const opsCultColumns = useMemo(
    () => [
      {
        Header: "Cultural Operations",
        columns: [
          {
            Header: "ID",
            accessor: "opcult.id"
          },
          {
            Header: "Exportable",
            accessor: "opcult.exportable"
          },
          {
            Header: "Recomendation",
            accessor: "opcult.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "opcult.initDate"
          },
          {
            Header: "End Date",
            accessor: "opcult.endDate"
          },
          {
            Header: "Operation",
            accessor: "opcult.opreation"
          },
          {
            Header: "Subplots",
            accessor: "opcult.subplots"
          },
          {
            Header: "Area",
            accessor: "opcult.area"
          },
          {
            Header: "Product",
            accessor: "opcult.product"
          },
          {
            Header: "Quantity",
            accessor: "opcult.quantity"
          },
          {
            Header: "Dosage",
            accessor: "opcult.dosage"
          },
          {
            Header: "COncentration",
            accessor: "opcult.concentration"
          },
          {
            Header: "Ground",
            accessor: "opcult.ground"
          },
          {
            Header: "Active Substance",
            accessor: "opcult.activeSub"
          },
          {
            Header: "Notes",
            accessor: "opcult.notes"
          },
          {
            Header: "Updated At",
            accessor: "opcult.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "opcult.updatedBy"
          }
        ]
      }
    ],
    []
  );

  const regaColumns = useMemo(
    () => [
      {
        Header: "Waterings",
        columns: [
          {
            Header: "ID",
            accessor: "rega.id"
          },
          {
            Header: "Exportable",
            accessor: "rega.exportable"
          },
          {
            Header: "Recomendations",
            accessor: "rega.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "rega.initDate"
          },
          {
            Header: "End Date",
            accessor: "rega.endDate"
          },
          {
            Header: "Type",
            accessor: "rega.type"
          },
          {
            Header: "Subplots",
            accessor: "rega.subplots"
          },
          {
            Header: "Product",
            accessor: "rega.product"
          },
          {
            Header: "Quantity",
            accessor: "rega.quantity"
          },
          {
            Header: "Dosage",
            accessor: "rega.dosgae"
          },
          {
            Header: "Concentration",
            accessor: "rega.concentration"
          },
          {
            Header: "Ground",
            accessor: "rega.ground"
          },
          {
            Header: "Active Substance",
            accessor: "rega.activeSubs"
          },
          {
            Header: "Notes",
            accessor: "rega.notes"
          },
          {
            Header: "Updated At",
            accessor: "rega.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "rega.updatedBy"
          }
        ]
      }
    ],
    []
  );

  
  const bioControlColumns = useMemo(
    () => [
      {
        Header: "Biological Control",
        columns: [
          {
            Header: "ID",
            accessor: "bioControl.id"
          },
          {
            Header: "Exportable",
            accessor: "bioControl.exportable"
          },
          {
            Header: "Recommendation",
            accessor: "bioControl.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "bioControl.initDate"
          },
          {
            Header: "End Date",
            accessor: "bioControl.endDate"
          },
          {
            Header: "Type",
            accessor: "bioControl.type"
          },
          {
            Header: "Subplots",
            accessor: "bioControl.subplots"
          },
          {
            Header: "Area",
            accessor: "bioControl.area"
          },
          {
            Header: "Product",
            accessor: "bioControl.product"
          },
          {
            Header: "Quantity",
            accessor: "bioControl.quantity"
          },
          {
            Header: "Dosage",
            accessor: "bioControl.dosage"
          },
          {
            Header: "Concentration",
            accessor: "bioControl.concentration"
          },
          {
            Header: "Ground",
            accessor: "bioControl.ground"
          },
          {
            Header: "Active Substance",
            accessor: "bioControl.activeSubs"
          },
          {
            Header: "Notes",
            accessor: "bioControl.notes"
          },
          {
            Header: "Updated At",
            accessor: "bioControl.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "bioControl.updatedBy"
          }
        ]
      }
    ],
    []
  );

  const fertColumns = useMemo(
    () => [
      {
        Header: "Fertilization",
        columns: [
          {
            Header: "ID",
            accessor: "fertilization.id"
          },
          {
            Header: "Exportable",
            accessor: "fertilization.exportable"
          },
          {
            Header: "Recommendation",
            accessor: "fertilization.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "fertilization.initDate"
          },
          {
            Header: "End Date",
            accessor: "fertilization.endDate"
          },
          {
            Header: "Type",
            accessor: "fertilization.type"
          },
          {
            Header: "Subplots",
            accessor: "fertilization.subplots"
          },
          {
            Header: "Area",
            accessor: "fertilization.area"
          },
          {
            Header: "Product",
            accessor: "fertilization.product"
          },
          {
            Header: "Quantity",
            accessor: "fertilization.quantity"
          },
          {
            Header: "Dosage",
            accessor: "fertilization.dosage"
          },
          {
            Header: "Concentration",
            accessor: "fertilization.concentration"
          },
          {
            Header: "Ground",
            accessor: "fertilization.ground"
          },
          {
            Header: "Active Substance",
            accessor: "fertilization.activeSubs"
          },
          {
            Header: "Notes",
            accessor: "fertilization.notes"
          },
          {
            Header: "Updated At",
            accessor: "fertilization.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "fertilization.updatedBy"
          }
        ]
      }
    ],
    []
  );

  const pulvColumns = useMemo(
    () => [
      {
        Header: "Pulverizations",
        columns: [
          {
            Header: "ID",
            accessor: "spray.id"
          },
          {
            Header: "Exportable",
            accessor: "spray.exportable"
          },
          {
            Header: "Recomendations",
            accessor: "spray.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "spray.initDate"
          },
          {
            Header: "End Date",
            accessor: "spray.endDate"
          },
          {
            Header: "Subplots",
            accessor: "spray.subplots"
          },
          {
            Header: "Area",
            accessor: "spray.area"
          },
          {
            Header: "Volume",
            accessor: "spray.volume"
          },
          {
            Header: "Product",
            accessor: "spray.product"
          },
          {
            Header: "Quantity",
            accessor: "spray.quantity"
          },
          {
            Header: "Details",
            accessor: "spray.status"
          },
          {
            Header: "Dosage",
            accessor: "spray.dosage"
          },
          {
            Header: "Concentration",
            accessor: "spray.concentration"
          },
          {
            Header: "Ground",
            accessor: "spray.ground"
          },
          {
            Header: "Active Substance",
            accessor: "spray.activeSubs"
          },
          {
            Header: "Notes",
            accessor: "spray.notes"
          },
          {
            Header: "Updated At",
            accessor: "spray.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "spray.updatedBy"
          }
        ]
      }
    ],
    []
  );

  const cropColumns = useMemo(
    () => [
      {
        Header: "Crops",
        columns: [
          {
            Header: "ID",
            accessor: "crop.id"
          },
          {
            Header: "Exportable",
            accessor: "crop.exportable"
          },
          {
            Header: "Recomendations",
            accessor: "crop.recommendation"
          },
          {
            Header: "Init Date",
            accessor: "crop.initDate"
          },
          {
            Header: "End Date",
            accessor: "crop.endDate"
          },
          {
            Header: "Subplots",
            accessor: "crop.subplots"
          },
          {
            Header: "Area",
            accessor: "crop.area"
          },
          {
            Header: "Weight",
            accessor: "crop.weight"
          },
          {
            Header: "Package Quantity",
            accessor: "crop.packageQuantity"
          },
          {
            Header: "Package Type",
            accessor: "crop.packageType"
          },
          {
            Header: "Notes",
            accessor: "crop.notes"
          },
          {
            Header: "Updated At",
            accessor: "crop.updatedAt"
          },
          {
            Header: "Updated By",
            accessor: "crop.updatedBy"
          }
        ]
      }
    ],
    []
  );


  // const [data, setData] = useState([]);
  const [obsData, setObsData] = useState([]);
  const [opsCultData, setOpsCultData] = useState([]);
  const [regaData, setRegaData] = useState([]);
  const [fertData, setFertData] = useState([]);
  const [bioControlData, setBioControlData] = useState([]);
  const [pulvData, setPulvData] = useState([]);
  const [cropData, setCropData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setData(result.data);
  //   })();
  // }, []);


  useEffect(() => {
        console.log(opsCultDataFile)
        setOpsCultData(opsCultDataFile)
  }, []);

  useEffect(() => {
    console.log(obsDataFile)
    setObsData(obsDataFile)
  }, []);

  useEffect(() => {
    setRegaData(regaDataFile);
  }, []);

  useEffect(() => {
    (async () => {
      setBioControlData(bioControlDataFile);
    })();
  }, []);

  useEffect(() => {
    setFertData(fertDataFile)
  }, []);

  useEffect(() => {
    setPulvData(pulvDataFile);
  }, []);

  useEffect(() => {
    setCropData(cropDataFile);
  }, []);

  return (
    <>
    <Header batch={"Carvalhal"}/>
    <div className="App">
      <div>Link to blockchain transaction: FC83DDDC226689068B831E564B46E55359EF83EFF8E658E3912A38C91A964C06</div>
      <br></br><br></br>
      {/* <Table columns={columns} data={data} />
      <br></br> */}
      <ObsTable columns={obsColumns} data={obsData} />
      <br></br><br></br><br></br>
      <OpsCultTable columns={opsCultColumns} data={opsCultData} />
      <br></br><br></br><br></br>
      <RegaTable columns={regaColumns} data={regaData} />
      <br></br><br></br><br></br>
      <FertTable columns={fertColumns} data={fertData} />
      <br></br><br></br><br></br>
      <BioControlTable columns={bioControlColumns} data={bioControlData} />
      <br></br><br></br><br></br>
      <PulvTable columns={pulvColumns} data={pulvData} />
      <br></br><br></br><br></br>
      <CropTable columns={cropColumns} data={cropData} />
    </div>
    <Footer/>
    </>
  );
}

export default App;
