function ServiceList(props) {
  return (
    <div className="products">
      {props.data.map((item) => (
        <div className="card">
          <div>
            <img src={item.img} alt="" srcset="" />
            <h2 className="product">{item.product}</h2>
            <button type="submit">Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ServiceList;