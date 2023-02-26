const ItemListContainer = ({ greeting }) => {
    return (
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <h1>{greeting}</h1>
      </div>
    );
  };
  
  export default ItemListContainer;