import './index.css'

const BusinessData = ({ data }) => {
  const { name, address, phone, website } = data;
  return (
    <header className="header">
      <h1 className="header_business-name">{name}</h1>
      <p className="header_business">{address}</p>
      <p className="header_business">{phone}</p>
      <p className="header_business">{website}</p>
    </header>
  );
};

export default BusinessData;
